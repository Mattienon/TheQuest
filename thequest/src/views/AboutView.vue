<template>
  <outerim/>
  <div class="body"><!-- Add a div for the dark mist overlay -->
      <gallery/>
    <!-- Gallery is the imported component with the Gallery stucture -->
  </div>
</template>

<script setup>
import gallery from '@/components/AboutView/gallery.vue';
import outerim from '@/components/All/outerim.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';
.body {
  display: flex;
  align-items: center;
  padding: 1%; /* Adjusted padding for better responsiveness */
}


@media (max-width: 899px) {
  .outerim {
    min-height: 310vh;
    width: 85%;
  }
  }
  @media (min-width: 800px) {
  .outerim {
    min-height: 180vh;
    width: 75%;
  }
  }

</style>
