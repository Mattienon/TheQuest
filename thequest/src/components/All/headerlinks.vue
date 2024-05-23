<template>
  <header :class="['sticky-header', { 'collapse-expanded': isCollapseExpanded }]">
    <router-link to="/" class="logo" @mouseover="logoHover(true)" @mouseleave="logoHover(false)">
      <h1>{{ brandName }}</h1>
      <hr class="vertical-line" :class="{ 'vertical-line-hover': isLogoHovered }">
      <div class="additional-info">
        <span>{{ eventDate }}</span>
        <span>{{ eventLocation }}</span>
      </div>
    </router-link>

    <nav class="navbar">
      <button class="btn btn-secondary dropdown-toggle d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-expanded="false" aria-controls="navbarCollapse" @click="toggleCollapse">
        <icon icon="mdi-menu" class="menu-icon"></icon>
      </button>
      <div class="collapse navbar-collapse justify-content-start align-items-center" id="navbarCollapse">
        <div class="social-links">
          <a v-for="(socialLink, index) in socialMediaLinks" :key="index" :href="socialLink.url" class="social-link">
            <icon :icon="socialLink.icon" class="social-icon"></icon>
          </a>
        </div>
        <div class="navigation-links">
          <router-link v-for="(link, index) in navigationLinks" :key="index" :to="link.path" class="nav-link">{{ link.text }}</router-link>
        </div>
        <div class="btn ticket-button" @mouseover="buttonHover(true)" @mouseleave="buttonHover(false)">
          <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4">{{ ticketText }}</a>
        </div>
      </div>
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

const isLogoHovered = ref(false);
const isCollapseExpanded = ref(false);

const logoHover = (hover) => {
  isLogoHovered.value = hover;
};

const toggleCollapse = () => {
  isCollapseExpanded.value = !isCollapseExpanded.value;
};
</script>


<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.sticky-header {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 15px;
  z-index: 10;
  background: linear-gradient(to bottom, $primary-purple 0%, $light-purple(20%) 20%, rgba(0, 0, 0, 0) 100%);
  overflow-x: hidden;

  &.collapse-expanded .logo {
    display: none;
  }
}

.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1, a {
  text-decoration: none;
  color: $primary-yellow;
  font-size: 1.5rem;
}

.vertical-line {
  border-left: 2px solid $primary-yellow;
  height: 35px;
  margin: 0.5rem;
}

.additional-info {
  line-height: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.btn {
  border-radius: 20px;
  padding: 0px 15px;
  background-color: $primary-purple;
  border: none;
}

.btn a {
  color: white;
  text-decoration: none;
}

.nav-link {
  padding: 0.5rem;
  color: $primary-yellow;
  text-decoration: none;
  font-weight: 700;
}

.navigation-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-link, .menu-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 5px;
  transition: background-color 0.3s ease;
}

.social-icon {
  font-size: 25px;
  color: #ffffff;
}

.social-link:hover {
  background-color: $primary-yellow;
}

.logo:hover {
  transform: scale(1.05);
}

.btn:hover {
  background-color: lighten($primary-yellow, 5%);
}

@media (min-width: 768px) {
  .sticky-header {
    flex-direction: row;
    justify-content: space-between;
  }
  .logo {
    flex-direction: row;
  }
  .additional-info {
    margin-top: 0;
  }
  .navbar-collapse {
    display: flex !important;
    flex-direction: row;
    align-items: center;
  }
  .navigation-links {
    flex-direction: row;
  }
}

@media (max-width: 767px) {
  .sticky-header {
    flex-direction: row;
    justify-content: center;
  }
  .additional-info{
    display: none;
  }
  .navbar-collapse {
    flex-direction: column;
    align-items: center;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 10px auto;
  }
  .ticket-button {
    text-align: center;
  }
  hr {
    display: none;
  }
}

</style>
