<template>
  <div class="page">
    <img :src="leftTreeSrc" alt="Left Tree" class="left-tree">
    <img :src="rightTreeSrc" alt="Right Tree" class="right-tree">
    <!-- Your main content goes here -->
  </div>
</template>

<script setup>
// Dynamically import the images
// import leftTreeImage from '../assets/Images/treebranch.png';
// import rightTreeImage from '../assets/Images/treebranch.png';

const leftTreeSrc = leftTreeImage;
const rightTreeSrc = rightTreeImage;
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  overflow-x: hidden;
  width: 100%;
  height: 100vh; /* Adjust the min-height as necessary to ensure the trees are fully visible */
  pointer-events: none; /* Ensures the page itself doesn't block interactions */
}

img {

  opacity: 0.8;
  position: absolute;
  z-index: 1; /* Lower z-index to ensure it's behind other elements */
  pointer-events: none; /* Ensures the image doesn't block interactions */
}

.left-tree {  
  width: 100%;
  top: 52%;
  left: -26%;
  transform: rotate(190deg);
}

.right-tree {
  width: 100%;
  top: 20%;
  right: -20%;
  transform: rotate(-360deg) scaleY(1); /* Flip the image horizontally */
}
</style>
