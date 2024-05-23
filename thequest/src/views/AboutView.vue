<template>
  <div class="outerim" :style="{ minHeight: dynamicHeight }">
    <div class="body">
      <gallery/>
      <!-- Gallery is the imported component with the Gallery structure -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gallery from '@/components/AboutView/gallery.vue';

const dynamicHeight = ref('');

onMounted(() => {
  calculateDynamicHeight();
  window.addEventListener('resize', calculateDynamicHeight); // Recalculate height on window resize
});

const calculateDynamicHeight = () => {
  const bodyElement = document.querySelector('.body');
  if (bodyElement) {
    dynamicHeight.value = `${bodyElement.clientHeight}px`; // Set dynamic height based on the content height
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.outerim {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 82%;
  z-index: -1;
  border: 10px outset $primary-yellow;
  background: linear-gradient(to bottom, $primary-purple 70%, $primary-green 95%);
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

.body {
  display: flex;
  align-items: center;
  padding: 1%; /* Adjusted padding for better responsiveness */
  
}

@media (max-width: 500px) {
  .outerim {
    --notchSize: 10px; // Adjust notch size for smaller screens
  }
}
</style>
