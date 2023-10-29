<template>
    <div>
          <h3>{{ titulo }}</h3>
          <input type="text" placeholder="Nome do Filme" v-model="item">
          <button type="button" @click="adicionarItem">Adicionar</button>
          <br>
          <ul>
              <li v-for="(item, index) in itens" :key="index">{{ item }}</li>
          </ul>
          <button type="button" @click="removerItem">Remover</button>
      </div>
  </template>
  
  <script>
  import ListaMixin from '@/mixins/ListaMixin';
  import RemoverItemListaMixin from '@/mixins/RemoverItemListaMixin'
  
  export default {
      name: 'listaFilmes',
      data: () => ({
        titulo: 'Lista Filmes'
      }),
      mixins: [ListaMixin,RemoverItemListaMixin], // ele vai começar a implementar o created primeiro do lista+ remover item, e por ultimo o do componente, na ordem
      created() {
        console.log('lista Filmes criada')
      }
  }
  </script>
  
  <style>
  
  </style>