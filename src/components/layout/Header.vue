<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-brand
            strong.navbar-item PlatziMusic
    .hero-body
      .container.has-text-centered
        h1.title PlatziMusic
        h2.subtitle Canciones que están Vue-nisímas
        pm-player
</template>

<script>
import PmPlayer from '@/components/Player'

export default {
  components: {
    PmPlayer
  }
}
</script>

