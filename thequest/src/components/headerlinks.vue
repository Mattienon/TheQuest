<template>
  <header class="sticky-header">
    <router-link to="/" class="logo">
      <h1 class="logo">{{ brandName }}</h1>
      <hr class="vertical-line">
      <div class="additional-info">
        <span>{{ eventDate }}</span>
        <span>{{ eventLocation }}</span>
      </div>
    </router-link>
    <nav class="navbar">  
      <!-- basic navigation -->
      <div class="navigation-links">
        <router-link
          v-for="(link, index) in navigationLinks"
          :key="index"
          :to="link.path"
          class="nav-link"
        >{{ link.text }}</router-link>
      </div>
      <!-- button to buy tickets -->
      <div class="btn btn-dark"> 
        <a href="tickets">{{ ticketText }}</a>
      </div>
      <!-- language changes -->
          <!-- <div class="lang-pack">
          <span class="language">DA</span>
          <hr class="vertical-line">
          <span class="language">DA</span>
          <hr class="vertical-line">
          <span class="language">DA</span>
        </div> -->
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
// dynamic info
const brandName = ref("QUEST");
const eventDate = ref('15 - 16 .Sep 2024');
const eventLocation = ref('Esbjerg torvet');
const ticketText = ref ('Køb billet')
// navigation paths & names
const navigationLinks = ref([
  { path: '/', text: 'QUEST' },
  { path: '/About', text: 'GALLERI'}
]);
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.sticky-header {
  position: sticky;
  top: 0;
  background-color: transparent;   
  display: flex;
  z-index: 1;
  
}

.logo {
  display: flex; /* Make the logo and additional info flex containers */
  align-items: center; /* Align items vertically */
}

h1, a {
  text-decoration: none;
  color: $primary-yellow;
  padding-left: 6%;
}

.vertical-line {
  border-left: 2px solid $primary-yellow; /* Adjust thickness and color as needed */
  height: 35px; /* Adjust height as needed */
  margin-left: 10px; /* Add margin between brand name and vertical line */
}

.additional-info {
  line-height: 20px;
  display: flex;
  flex-direction: column;
  margin-left: 10px; 
  min-width: 50%;
}

.btn{
  border-radius: 20px;
  padding: 1.2%;
  width: auto;
  height: 50%;
  display: flex;
  align-items: center;
  margin-left: 1%;
  background-color: $primary-purple;
  border: none;
}

.lang-pack{
  display: flex;
  align-items: center;
  margin-left: 1%;

  .language{
    margin-left: 5px;
    margin-right: 0px;
  }
}
.navbar {
  display: flex;
  justify-content: flex-end;
  width: 75%;
}

.nav-link {
  padding: 0.5rem;
  color: $primary-yellow;
  text-decoration: none;
  font-size: 20px;
}

.navigation-links {
  display: flex;
}
</style>
