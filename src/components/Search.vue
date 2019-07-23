<template lang="pug">
  main
    pm-notification(v-if="showNotification")
      p(slot='body') No se encontraron resultados

    section.section
      nav.nav.has-shadow
        .container
          .field.has-addons
            .control.is-expanded
              input.input.is-large(
                type="text",
                placeholder="Buscar canciones",
                v-model="searchQuery"
              )
            .control
              a.button.is-info.is-large(@click="search") Buscar
            .control
              a.button.is-danger.is-large &times;
      .container
        p.search-message
          small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
              :track="t",
              @select="setSelectedTrack",
              :class="{ 'is-active': t.id === selectedTrack }"
            )

    pm-loader(v-if="isLoading")
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track'
import PmLoader from '@/components/shared/Loader'
import PmNotification from '@/components/shared/Notification'

export default {
  name: 'app',

  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotification: false
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods: {
    search () {
      if (!this.searchQuery) return

      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotification = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  }
}
</script>

<style lang="scss">
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px #23d160 solid;
}

.search-message {
  padding: 1em 0;
}
</style>
