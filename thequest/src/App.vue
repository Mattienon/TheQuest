<template>
  <header>
    <router-link to="/" class="logo">
      <h1 class="logo">{{ brandName }}</h1>
      <img :src="logoImage" alt="brandImage" class="logoimage" />
    </router-link>
    <nav class="navbar">
      <div class="navigation-links">
        <router-link
          v-for="(link, index) in navigationLinks"
          :key="index"
          :to="link.path"
          class="nav-link"
          >{{ link.text }}</router-link>
      </div>
    </nav>
  </header>
    <RouterView />
   <footnav/>
</template>

<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import footnav from './components/footnav.vue'
const brandName = ref("Something");

const navigationLinks = ref([
  { path: '/', text: 'QUEST' },
  { path: '/About', text: 'Om os'}
])
</script>



<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  background-color: #3168c179;
  z-index: 1;
}

h1, a{
  color: black;
  text-decoration: none;
}

nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.nav-link {
  padding: 0.5rem;
  color: #000000;
  text-decoration: none;
  font-size: 24px;
}
  .navigation-links {
    display: flex;
  }


.logoimage{
  display: none;
}
</style>