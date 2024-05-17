<template>
<!-- nav area for sticky navbar -->
    <headerlinks/>


    <RouterView />


  <!-- footer comp -->
   <footnav/>

</template>




<script setup>

import { RouterLink, RouterView } from 'vue-router'
import footnav from './components/footnav.vue'
import headerlinks from './components/headerlinks.vue'

</script>



<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

</style>