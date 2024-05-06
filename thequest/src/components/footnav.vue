<template>
    <footer class="footer">
      <div class="navigation-links">
        <RouterLink
          v-for="(link, index) in navigationLinks"
          :key="index"
          :to="link.path"
          class="footer-link"
        >{{ link.text }}</RouterLink>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'

  
  const navigationLinks = ref([
  { path: '/', text: 'QUEST' },
  { path: '/About', text: 'Om os'}
])

  </script>
  
  <style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: end;
    background-color: black;
    padding: 1%;
    position: fixed;
    width: 95%;
    bottom: 2%;
  }
  a{
    color: aliceblue;
    padding: 2%;
    text-decoration: none;
  }


  </style>
  