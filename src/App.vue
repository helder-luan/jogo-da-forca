<template>
  <h1>Jogo da Forca</h1>

  <section v-if="tela === 'inicio'" id="inicio">
    <h2>
      Escolhendo a palavra
      <span class="dots">
        <span class="dot">.</span>
        <span class="dot">.</span>
        <span class="dot">.</span>
      </span>
    </h2>
  </section>

  <section v-if="tela === 'jogo'" id="jogo">
    <Jogo />
  </section>

  <section v-if="tela === 'gameover'" id="gameover">
    <h2>Você perdeu!</h2>
    <p>A palavra era: <span class="palavra">{{ palavra }}</span></p>
    <button v-on:click="jogarNovamente">Jogar novamente</button>
  </section>

  <section v-if="tela === 'vitoria'" id="vitoria">
    <h2>Você venceu!</h2>
    <p>A palavra era: <span class="palavra">{{ palavra }}</span></p>
    <button v-on:click="jogarNovamente">Jogar novamente</button>
  </section>
</template>

<script>
  import Form from '@components/Form.vue';
  import Jogo from '@components/Jogo.vue';
  import { palavra } from '@services'
  import { computed } from 'vue';
  import { removeAcentos } from '@utils/functions.js';

  export default {
    name: 'App',
    mounted: function () {
      this.obterPalavra();
    },
    provide: function () {
      return {
        etapa: computed(() => this.etapa),
        erros: computed(() => this.erros),
        palavra: computed(() => this.palavra),// dados reativos
        // erros: this.erros, // dados não reativos,
        verificarLetra: this.verificarLetra,
        letras: computed(() => this.letras),
        inserirLetra: this.inserirLetra
      }
    },
    data: function () {
      return {
        tela: 'inicio',
        etapa: 'palavra',
        palavra: '',
        erros: 0,
        letras: []
      }
    },
    components: {
      Form,
      Jogo
    },
    methods: {
      definirPalavra: function (palavra) {
        this.palavra = palavra;
        this.etapa = 'jogo';
        this.tela = 'jogo';
      },
      obterPalavra: function () {
        palavra.get()
        .then(data => {
          const palavra = removeAcentos(data.data.word.toString());
          this.definirPalavra(palavra);
        })
        .catch(err => {
          console.error(err);
        });
      },
      verificarLetra: function (letra) {
        return this.letras.find(l => l === letra);
      },
      inserirLetra: function (letra) {
        this.letras.push(letra);
        this.verificarErros(letra);
      },
      verificarErros: function (letra) {
        if (!this.palavra.includes(letra)) {
          this.erros++;

          if (this.erros === 6) {
            return this.gameOver();
          }
        }

        return this.verificarAcertos();
      },
      verificarAcertos: function () {
        const letrasUnicas = [...new Set(this.palavra.split(''))];
        if (letrasUnicas.every(letra => this.letras.includes(letra))) {
          return this.vitoria();
        }
      },
      gameOver: function () {
        this.tela = 'gameover';
      },
      vitoria: function () {
        this.tela = 'vitoria';
      },
      jogarNovamente: function () {
        this.tela = 'inicio';
        this.etapa = 'palavra';
        this.palavra = '';
        this.erros = 0;
        this.letras = [];
        this.obterPalavra();
      }
    }
  }
</script>

<style scoped>
  #gameover,
  #vitoria {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  #gameover .palavra,
  #gameover h2 {
    color: var(--color-text-error);
  }

  #vitoria .palavra,
  #vitoria h2 {
    color: var(--color-text-success);
  }

  #gameover .palavra,
  #vitoria .palavra {
    font-weight: bold;
    text-transform: uppercase;
  }

  .dot {
    display: inline-block;
    font-size: 2.5rem;
  }

  .dot:nth-child(1) {
    animation: jump 1s ease-in-out infinite;
  }

  .dot:nth-child(2) {
    animation: jump 1s ease-in-out 0.25s infinite;
  }

  .dot:nth-child(3) {
    animation: jump 1s ease-in-out 0.5s infinite;
  }

  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(0.25rem);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
