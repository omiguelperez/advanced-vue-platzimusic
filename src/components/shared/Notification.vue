<template lang="pug">
  .container
    .columns
      .column.is-4.is-offset-4
        .notification.is-danger.has-text-centered
          slot(name="body") Algo anduvo mal
</template>

<style scoped>
  .notification {
    margin-top: 10px;
  }
</style>

