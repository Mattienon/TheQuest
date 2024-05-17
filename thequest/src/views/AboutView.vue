<template>
  <div class="body">
    <gallery/> 
    <!-- Gallery is the imported component with the Gallery stucture -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import gallery from '@/components/gallery.vue';

</script>

<style lang="scss" scoped>
.body{

padding-top: 3%;
padding-left: 10%;
padding-right: 10%;
background-color: rgb(139, 139, 139);
height: 200vh;
}
</style>
