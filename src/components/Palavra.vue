<template>
  <div class="palavra">
    <div class="palavra-letras">
      <div class="palavra-letra" v-for="(letra, key) in palavra" :key="key">
        {{ verificarLetra(letra) ? letra : '' }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Palavra',
    props: {
    },
    inject: ['palavra', 'verificarLetra']
  }
</script>

<style scoped>
  .palavra {
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .palavra-letras {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .palavra-letra {
    height: 30px;
    width: 30px;
    border-bottom: 1px solid var(--color-text-light);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>