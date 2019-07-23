<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-brand
            strong.navbar-item PlatziMusic
            span.navbar-burger.burger(data-target="navbar-menu")
              span
              span
              span
          #navbar-menu.navbar-menu
            .navbar-end
              router-link.navbar-item(:to="{ name: 'search' }") Buscar
              router-link.navbar-item(to="about") Nosotros
        
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

