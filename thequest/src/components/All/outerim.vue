<!-- Outerim.vue -->
<template>
    <div class="outerim"></div>
  </template>
  
  <script setup>
  // No need for any script in this component
  </script>
  
  <style lang="scss" scoped>
  @import '@/assets/hexcolors.scss';
  
  .outerim {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute; /* Fixed to make sure it stays in the background */
    top: 10%;
    bottom: 0;
    left: 50%; /* Start positioning from the middle of the viewport */
    transform: translateX(-50%); /* Move left by half of its own width to center */
    width: 75%;
    min-height: 270vh; /* Fill the height of the viewport */
    z-index: -1; /* Make sure it's behind all other content */
    border: 10px outset $primary-yellow;
    background: linear-gradient(to bottom, $primary-purple 70%, $primary-green 95%);
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
  @media (max-width: 700px) {
  .outerim {
    min-height: 425vh;
    width: 85%;
  }
  }


  </style>
  