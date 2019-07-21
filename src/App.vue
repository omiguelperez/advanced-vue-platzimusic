<template lang="pug">
  #app
    div
      input(placeholder="Type your name..." v-model="name")
      button(@click="formatName") Format
    div
      p The formatted name: {{ formattedName }}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      formattedName: ''
    }
  },
  methods: {
    formatName () {
      this.formattedName = this.name.split(' ').join('-').toLowerCase()
    }
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  h1,
  h2 {
    font-weight: normal;
  }
}
</style>
