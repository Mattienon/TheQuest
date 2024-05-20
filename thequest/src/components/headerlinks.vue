<template>
  <div>
    <header class="sticky-header">
      <router-link to="/" class="logo" @mouseover="logoHover(true)" @mouseleave="logoHover(false)">
        <h1 class="logo">{{ brandName }}</h1>
        <hr class="vertical-line" :class="{ 'vertical-line-hover': isLogoHovered }">
        <div class="additional-info">
          <span>{{ eventDate }}</span>
          <span>{{ eventLocation }}</span>
        </div>
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
        <!-- button to buy tickets -->
        <div class="btn btn-dark" @mouseover="buttonHover(true)" @mouseleave="buttonHover(false)"> 
          <a href="tickets">{{ ticketText }}</a>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const brandName = ref("QUEST");
const eventDate = ref('15 - 16 .Sep 2024');
const eventLocation = ref('Esbjerg torvet');
const ticketText = ref ('Køb billet')

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
  z-index: 2;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.logo {
  display: flex; 
  align-items: center; 
}

h1, a {
  text-decoration: none;
  color: $primary-yellow;
  padding-left: 6%;
}

.vertical-line {
  border-left: 2px solid $primary-yellow;
  height: 35px; 
  margin-left: 10px; 
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

.vertical-line-hover {
  border-color: lighten($primary-yellow, 20%); 
}

.logo:hover {
  transform: scale(1.05); 
}

.btn:hover {
  background-color: lighten($primary-purple, 10%); 
}
</style>
