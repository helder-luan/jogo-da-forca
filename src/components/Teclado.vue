<template>
  <div class="teclado">
    <button
      class="teclado-botao"
      v-for="(letra, key) in 'abcdefghijklmnopqrstuvwxyz'"
      :disabled="verificarLetra(letra)"
      v-on:click="inserirLetra(letra)"
    >
      {{ letra }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Teclado',
    props: {
    },
    inject: ['letras', 'verificarLetra', 'inserirLetra']
  }
</script>

<style scoped>
  .teclado {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    width: 80%;
    margin-top: 1.5rem;
  }
  .teclado-botao {
    border: 5px solid var(--color-text-dark);
    text-transform: uppercase;
  }
</style>