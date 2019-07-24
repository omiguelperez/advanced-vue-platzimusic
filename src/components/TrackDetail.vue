<template lang="pug">
  .container
    .columns
      .column.is-4.is-offset-4
        pm-track(:track="track")
</template>

<script>
import PmTrack from '@/components/Track'
import trackService from '@/services/track'

export default {
  components: {
    PmTrack
  },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(track => {
        this.track = track
      })
  }
}
</script>

<style lang="scss" scoped>
.columns {
  margin: 10px;
}
</style>
