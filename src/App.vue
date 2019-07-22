<template lang="pug">
  #app
    pm-header

    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(
            placeholder="Buscar canciones...",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        p
          small {{ searchMessage }}
      .container.results
        .columns
          .column(v-for="t in tracks")
            | {{ t.name }} - {{ t.artists[0].name }}

      .container
        p {{ person }}
        button(@click="add") Add

    pm-footer
</template>

<script>
import trackService from './services/track'
import PmFooter from './components/Footer'
import PmHeader from './components/Header'

export default {
  name: 'app',

  components: {
    PmFooter,
    PmHeader
  },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      person:  {
        name: 'Darlene'
      }
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
    }
  },

  methods: {
    add () {
      // this.$set(this.person, 'lastName', 'Alderson')
      this.person = { ...this.person, lastName: 'Alderson' }
    },

    search () {
      if (!this.searchQuery) return

      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
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
