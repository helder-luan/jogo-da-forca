<template>
  <div class="form">
    <div class="form-title">{{ title }}</div>
    <input type="text" class="form-input" v-model="inputValue" />
    <button :disabled="inputValue.length === 0" v-on:click="onSubmit">{{ textButton }}</button>
  </div>
</template>

<script>
  export default {
    name: 'Form',
    props: {
      title: String,
      textButton: String,
      action: Function
    },
    data: function () {
      return {
        inputValue: ''
      }
    },
    methods: {
      onSubmit: function () {
        this.action(this.inputValue);
        this.inputValue = '';
      }
    }
  }
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 1.5rem;
  }

  .form-input {
    padding: 1rem 0.5rem;
    border: 0;
    border-radius: 0.5rem;
    margin: 1rem 0;
    text-align: center;
    color: var(--color-text-dark);
    font-size: 1rem;
  }
</style>