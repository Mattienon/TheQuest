<template>
    <!-- nav area for sticky navbar -->
 
    <headerlinks />
    <drageanimation/>
    <particleeffect />
    <main>   
      <shadowtree />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <totheTOP/>
    </main>
    
    <!-- footer comp -->
    <footnav />
  </template>
  
  <script setup>
  import { RouterView } from 'vue-router';
  import footnav from '@/components/footnav.vue';
  import headerlinks from '@/components/All/headerlinks.vue';
  import shadowtree from '@/components/shadowtree.vue';
  import totheTOP from './components/All/totheTOP.vue';
  import drageanimation from './components/All/drageanimation.vue';
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/hexcolors.scss';
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease; /* Add transition for transform property */
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(20px); /* Initial position: move down by 20px */
  }


  </style>
  