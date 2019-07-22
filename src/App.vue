<template lang="pug">
  #app
    pm-header

    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            type="text",
            placeholder="Buscar canciones",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(:track="t")

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
      isLoading: false
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
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
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";

.results {
  margin-top: 50px;
}
</style>
