<template>
  <div class="jogo">
    <Forca />
    <Palavra />
    <Teclado />
  </div>
</template>

<script>
  import Forca from '@components/Forca.vue';
  import Palavra from '@components/Palavra.vue';
  import Teclado from '@components/Teclado.vue';

  export default {
    name: 'Jogo',
    components: {
      Forca,
      Palavra,
      Teclado
    }
  }
</script>

<style scoped>
  .jogo {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
</style>