<template>
  <div style="display: flex; flex-direction: row;">
    <div style="flex-basis: 33%;">
      <lista-filmes/>
    </div>
    <div style="flex-basis: 33%;">
      <lista-pessoas/>
    </div>
    <div style="flex-basis: 33%;">
      <lista-videogames/>
    </div>
  </div>
</template>

<script>
import ListaFilmes from './components/listaFilmes.vue'
import ListaPessoas from './components/listaPessoas.vue'
import ListaVideogames from './components/listaVideogames.vue'

export default {
  name: 'App',
  components: {
    ListaPessoas,
    ListaVideogames,
    ListaFilmes
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
