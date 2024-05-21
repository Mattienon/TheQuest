<template>
  <div class="page">
    <img :src="leftTreeSrc" alt="Left Tree" class="left-tree">
    <img :src="rightTreeSrc" alt="Right Tree" class="right-tree">
    <!-- Your main content goes here -->
  </div>
</template>

<script setup>
// Dynamically import the images
import leftTreeImage from '../assets/Images/treebranch.svg';
import rightTreeImage from '../assets/Images/treebranch.svg';

const leftTreeSrc = leftTreeImage;
const rightTreeSrc = rightTreeImage;
</script>

<style lang="scss" scoped>
.page {
  position: absolute;
  overflow-x: hidden;
  width: 100%;
  height: 260vh; /* Adjust the min-height as necessary to ensure the trees are fully visible */
  pointer-events: none; /* Ensures the page itself doesn't block interactions */
}

img {

  opacity: 0.3;
  position: absolute;
  z-index: 3; /* Lower z-index to ensure it's behind other elements */
  pointer-events: none; /* Ensures the image doesn't block interactions */
}

.left-tree {  
  width: 60%;
  top: 18%;
  left: -20%;
  transform: rotate(60deg);
}

.right-tree {
  width: 50%;
  top: 50%;
  right: -13%;
  transform: rotate(250deg) scaleY(1); /* Flip the image horizontally */
}
</style>
