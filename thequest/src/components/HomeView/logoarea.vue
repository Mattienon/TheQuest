<template>
    <div class="video-container">
        <video class="circular-video" controls loop>
        <source src="@/assets/Videos/logoanim.mp4" type="video/mp4">
      </video>
    </div>
  </template>
  
  <style lang="scss" scoped>
  @import '@/assets/hexcolors.scss';
  
  .video-container {
    width: 500px; /* Set the width of the circle */
    height: 500px; /* Set the height of the circle */
    border-radius: 50%; /* Make the container circular */
    overflow: hidden; /* Ensure the video fits within the circle */
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid $primary-yellow; /* Optional: Add a border around the circle */
  }
  
  .circular-video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the video covers the entire circular container */
  }
  </style>
  