<template lang="pug">
  div
    p this is the child component
    local-component
</template>

<script>
import LocalComponent from './LocalComponent'

export default {
  components: {
    LocalComponent,
  }
}
</script>

