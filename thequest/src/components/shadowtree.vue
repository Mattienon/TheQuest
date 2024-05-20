<template>
    <div class="page">
      <img src="../assets/Images/treebranch.png" alt="Left Tree" class="left-tree">
      <img src="../assets/Images/treebranch.png" alt="Right Tree" class="right-tree">
      <!-- Your main content goes here -->
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style lang="scss" scoped>
  .page {
    position: absolute;
    overflow-x: hidden;
    width: 100%;
    height: 200vh; /* Adjust the min-height as necessary to ensure the trees are fully visible */
    pointer-events: none; /* Ensures the page itself doesn't block interactions */
  }
  
  img {
    width: 100%;
    transform: rotate(105deg);
    opacity: 0.6;
    position: absolute;
    z-index: 3; /* Lower z-index to ensure it's behind other elements */
    pointer-events: none; /* Ensures the image doesn't block interactions */
  }
  
  .left-tree {
    top: 25%;
    left: -50%;
  }
  
  .right-tree {
    width: 80%;
    top: 44%;
    right: -38%;
    transform: rotate(78deg) scaleY(-1); /* Flip the image horizontally */
  }
  </style>
  

  <!-- if i plop til into ALL the images dissapear -->