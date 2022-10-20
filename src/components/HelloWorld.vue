<template>
  <h1>Reusabilidade no Vue 3</h1>
  <hr>
  <input type='text' placeholder="seu nome" v-model="nome">
  <h4>{{nome}}</h4>
  <p>{{frase}}</p>
<button @click="deOndeVemEssaFuncao(nome)">Montar</button>
</template>

<script>
import { useMontarFrase } from '@/hooks/useMontarFrase';

export default {
  name: 'HelloWorld',
  setup() {
    const { deOndeVemEssaFuncao, frase } = useMontarFrase();
    return {
      deOndeVemEssaFuncao, frase
    };
  },
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
