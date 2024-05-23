<template>
  <div class="video-container">
    <video class="circular-video" autoplay loop muted playsinline>
      <source src="@/assets/Videos/logosequence.mp4" type="video/mp4">
    </video>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.video-container {
  width: 400px; /* Set the width of the circle */
  height: 400px; /* Set the height of the circle */
  border-radius: 50%; /* Make the container circular */
  overflow: hidden; /* Ensure the video fits within the circle */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px solid $primary-yellow; /* Optional: Add a border around the circle */
  box-shadow: 0 50px 80px rgba(0, 0, 0, 0.2); /* Add shadow to card */
  transition: transform 0.5s ease, box-shadow 0.3s ease; /* Smooth transition for shadow and transform */
}

.video-container:hover {
  transform: scale(1.1); /* Slightly increase size on hover */
  box-shadow: 0 70px 100px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
}

.circular-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensure the video covers the entire circular container */
  pointer-events: none; /* Disable user interaction with the video element */
}

@media (max-width: 700px) {
  .video-container {
    width: 300px; /* Set the width of the circle for smaller screens */
    height: 300px;
  }
}
</style>
