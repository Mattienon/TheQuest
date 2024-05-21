<template>
  <button @click="scrollToTop" class="scroll-to-top">
    <span class="visually-hidden">Scroll to top</span> <!-- Visually hidden label for accessibility -->
    <span>Portal til toppen</span>
  </button>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
};
</script>

<style scoped lang="scss">
/* Import the SCSS file directly into the style block */
@import '@/assets/hexcolors.scss';

.scroll-to-top {
  position: fixed;
  bottom: 33px;
  right: 20px;
  padding: 15px; /* Increase padding to make the button larger */
  border: none;
  border-radius: 50%; /* Set border-radius to 50% for a completely round button */
  background-color: $light-purple; /* Use the SCSS variable */
  color: #fff;
  cursor: pointer;
  z-index: 999; /* Ensure the button is above other content */
  transition: background-color 0.3s ease; /* Add transition for smooth hover effect */
}

.scroll-to-top:hover {
  background-color: lighten($light-purple, 10%); /* Lighten the background color on hover */
}

.scroll-to-top span {
  /* Center the text vertically and horizontally */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
