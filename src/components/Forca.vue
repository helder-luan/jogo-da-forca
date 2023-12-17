<template>
  <div class="forca">
    <img :src="`https://raw.githubusercontent.com/william-costa/wdev-hangman-game-resources/master/images/hangman/${erros}.svg`" />
    <p>{{ erros }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Forca',
    props: {
    },
    inject: ['erros']
  }
</script>

<style scoped>
  .forca img {
    height: 100px;
  }
</style>