<template>
  <h1>Reusabilidade no Vue 3</h1>
  <hr>
  <input type='text' placeholder="seu nome" v-model="nome">
  <h4>{{nome}}</h4>
  <p>{{deOndeVemEssaFrase}}</p>
<button @click="deOndeVemEssaFuncao">Montar</button>
</template>

<script>
import montarFrase from '../mixins/testandomixin.js'
export default {
  name: "HelloWorld",
  mixins: [montarFrase],
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
