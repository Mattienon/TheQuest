<template>
<!-- nav area for sticky navbar -->
    <headerlinks/>

<main>
    <RouterView />
</main>

  <!-- footer comp -->
   <footnav/>

</template>




<script setup>

import {RouterView } from 'vue-router'
import footnav from './components/footnav.vue'
import headerlinks from './components/headerlinks.vue'
import { ref } from 'vue'

</script>



<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

</style>