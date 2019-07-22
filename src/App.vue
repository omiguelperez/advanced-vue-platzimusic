<template lang="pug">
  #app
    pm-header

    section.section
      nav.nav.has-shadow
        .container
          .field.has-addons
            .control
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

    pm-footer
</template>

<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/Footer'
import PmHeader from '@/components/layout/Header'
import PmTrack from '@/components/Track'
import PmLoader from '@/components/shared/Loader'

export default {
  name: 'app',

  components: {
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ' '
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
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";

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
