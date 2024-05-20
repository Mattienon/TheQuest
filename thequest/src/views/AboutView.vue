<template>
  <div class="body"><!-- Add a div for the dark mist overlay -->
    <div class="outerim">
      <gallery/> 
    </div>
    <!-- Gallery is the imported component with the Gallery stucture -->
  </div>
</template>

<script setup>
import gallery from '@/components/gallery.vue';

</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';
.body {
  position: relative; /* Position the dark mist overlay relative to the body */
  display: flex;
  align-items: center;
  padding: 1%; /* Adjusted padding for better responsiveness */
  min-height: 100vh; /* Ensure the body takes at least full viewport height */
  flex-direction: column;
}

.outerim {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5%;
  margin-bottom: 5rem;
  max-width: 1300px; /* Max width for better layout control */
  border: 10px outset $primary-yellow;
  background: linear-gradient(to bottom, $primary-purple, $primary-green);
  // background-color: $primary-purple;
  --notchSize: 15px;
  clip-path: polygon(
    0% var(--notchSize), 
    var(--notchSize) 0%, 
    calc(100% - var(--notchSize)) 0%, 
    100% var(--notchSize), 
    100% calc(100% - var(--notchSize)), 
    calc(100% - var(--notchSize)) 100%, 
    var(--notchSize) 100%, 
    0% calc(100% - var(--notchSize))
  );
}

</style>
