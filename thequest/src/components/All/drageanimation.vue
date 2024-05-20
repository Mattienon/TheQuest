<template>
    <div class="video">
      <video ref="animatedVideo" :src="dragon" autoplay muted loop></video>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import anime from 'animejs/lib/anime.es.js';
  import dragon from '@/assets/Videos/drage.mp4';
  
  const animatedVideo = ref(null);
  
  onMounted(() => {
    anime({
      targets: animatedVideo.value,
      translateX: ['-100%', '100%'],
      duration: 9000,
      easing: 'linear',
      loop: true
    });
  });
  </script>
  
  <style lang="scss" scoped>
  .video {
    position: relative;
    overflow: hidden;
    width: 100vw;
    height: 20vh;
  
    video {
      position: absolute;
      top: -20%; /* Center vertically */
      left: -100%; /* Start off screen to the left */
      transform: translateY(-50%); /* Center the element by its own height */
      width: 200%; /* Adjust width to maintain aspect ratio */
      height: 100%; /* Ensure video fits the container height */
    }
  }
  </style>
  