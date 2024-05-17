<template>
    <div class="row">
      <div v-for="(item, index) in cards" :key="index" class="col-6">
        <div class="card">
          <img :src="item.imageUrl" alt="Card image">
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue'
  const cards = ref([
    {
      imageUrl: 'path/to/first/image.jpg',
      text: 'This is a paragraph inside the first column.'
    },
    {
      imageUrl: 'path/to/second/image.jpg',
      text: 'This is a paragraph inside the second column.'
    },
    {
      imageUrl: 'path/to/third/image.jpg',
      text: 'This is another paragraph inside the second column.'
    }
  ]);
  </script>
  
  <style lang="scss"scoped>
  @import '@/assets/hexcolors.scss';

  .card {
    min-width: 50%;
    height: auto;
    border: solid;
    padding: 5%;
    text-align: center;
    margin-bottom: 10px;
  }
  
  img{
    width: 20%;
    background-color: rgb(157, 10, 255);
  }

  </style>
  