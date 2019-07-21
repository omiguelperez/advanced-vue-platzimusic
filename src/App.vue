<template lang="pug">
  #app
    input(placeholder="Type your name..." v-model="name")
    div(v-if="name")
      p {{ greeting }}
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: ''
    }
  },
  computed: {
    greeting () {
      return `Hello! My name is ${this.name}`
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
