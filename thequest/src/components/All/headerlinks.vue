<template>
  <header class="sticky-header">
    <router-link to="/" class="logo" @mouseover="logoHover(true)" @mouseleave="logoHover(false)">
      <h1>{{ brandName }}</h1>
      <hr class="vertical-line" :class="{ 'vertical-line-hover': isLogoHovered }">
      <div class="additional-info">
        <span>{{ eventDate }}</span>
        <span>{{ eventLocation }}</span>
      </div>
    </router-link>
  
    <nav class="navbar">
      <div class="collapse navbar-collapse justify-content-start align-items-center" id="navbarCollapse">
         <div class="navigation-links">
          <router-link v-for="(link, index) in navigationLinks" :key="index" :to="link.path" class="nav-link">{{ link.text }}</router-link>
        </div>
 <div class="btn btn-dark" @mouseover="buttonHover(true)" @mouseleave="buttonHover(false)">
          <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4">{{ ticketText }}</a>
        </div>
   <div class="social-links">
          <a v-for="(socialLink, index) in socialMediaLinks" :key="index" :href="socialLink.url" class="social-link">
            <icon :icon="socialLink.icon" class="social-icon"></icon>
          </a>
      </div>
        </div> 
      <!-- bottom o fthe collape^^ -->
       
      
     
      <button class="btn btn-secondary dropdown-toggle d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false" aria-controls="navbarCollapse">
        <icon icon="mdi-menu" class="menu-icon"></icon>
      </button>
    </nav>
  </header>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import { Icon } from '@iconify/vue';
  
  const socialMediaLinks = ref([
    { name: 'Facebook', icon: 'mdi-facebook', url: 'https://www.facebook.com' },
    { name: 'Instagram', icon: 'mdi-instagram', url: 'https://www.instagram.com' },
  ]);
  
  const brandName = ref("QUEST");
  const eventDate = ref('14 .Sep 2024');
  const eventLocation = ref('Esbjerg torvet');
  const ticketText = ref('Køb billet');
  
  const navigationLinks = ref([
    { path: '/', text: 'QUEST' },
    { path: '/About', text: 'GALLERI' }
  ]);
  
  const isButtonHovered = ref(false);
  
  function buttonHover(value) {
    isButtonHovered.value = value;
  }
  </script>
  
  

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.sticky-header {
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  z-index: 3;
}

.logo {
  display: flex;
  align-items: center;
}

h1, a {
  text-decoration: none;
  color: $primary-yellow;
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

.btn {
  border-radius: 20px;
  padding: 2%;
  min-width: max-content;
  display: flex;
  align-items: center;
  margin-left: 1%;
  background-color: $primary-purple;
  border: none;
}

.nav-link {
  padding: 0.5rem;
  color: $primary-yellow;
  text-decoration: none;
  font-size: 20px;
  font-weight: 900;
}

.navigation-links {
  display: flex;
}

.social-links {
  display: flex;
}

.social-link, .menu-icon {
  display: inline-flex;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: $primary-yellow;
  margin-right: 0.5rem;
  transition: background-color 0.3s ease;
}

.social-icon {
  font-size: 18px;
  color: #ffffff;
  margin: auto;
}

.social-link:hover {
  background-color: $primary-purple;
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

@media (min-width: 768px) {
  .navbar-collapse {
    display: flex !important;
  }
  .dropdown-toggle {
    display: none;
  }
}

@media (max-width: 767px) {
.navbar, .social-link{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.social-links, .btn{
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn{
  width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding-bottom: 2%;
}
}
</style>
