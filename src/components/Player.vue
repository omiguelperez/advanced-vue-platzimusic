<template lang="pug">
  .content
    div(v-if="track")
      p
        img(:src="track.album.images[0].url ")
      p
        strong {{ track.name }}
        small [{{ track.duration_ms }}]
      p
        audio(controls, :src="track.preview_url")
</template>

<script>
export default {
  data () {
    return {
      track: null
    }
  },

  created () {
    this.$bus.$on('set-track', track => {
      this.track = track
    })
  }
}
</script>

<style lang="scss" scoped>
  img {
    border-radius: 50%;
    width: 127px;
  }
</style>

