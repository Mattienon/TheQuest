<template>
  <div class="body">
    <header class="hero-position">
      <hero />
    </header>
   
    <main class="outerim"> 

      <section class="cirkelarea">
      <logoarea />
      </section>

      <div class="boxcontent">
        <infoboxes />
      </div>
      <additionalinfo/>
    </main>
    <div class="bottom-position">
      <bottomcard/>
    </div>
  </div>
</template>


<script setup>
import hero from '@/components/hero.vue';
import bottomcard from '@/components/bottomcard.vue';
import logoarea from '@/components/logoarea.vue';
import infoboxes from '@/components/infoboxes.vue';
import additionalinfo from '@/components/additionalinfo.vue';
</script>


<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.body {
  display: flex;
  align-items: center;
  padding: 1%; /* Adjusted padding for better responsiveness */
  min-height: 100vh; /* Ensure the body takes at least full viewport height */
  flex-direction: column;
}

h1, h2 {
  color: $primary-yellow;
  font-weight: 600;
  letter-spacing: 3px;
  font-size: 2.5rem; /* Use relative units for better scaling */
  text-align: center;
}

.outerim {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  padding-bottom: 30%;
  max-width: 1200px; /* Max width for better layout control */
  margin-top: -25%;
  border: 10px outset $primary-yellow;
  background-color: $primary-purple;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-position{
  width: 120%;
  max-width: 1500px; /* Max width for better layout control */
  z-index: 1;
  padding-top: 5%;
}

.cirkelarea{
  z-index: 2;
  display: flex;
  justify-content: center;
}

.boxcontent {
  padding: 2rem; /* Adjusted padding for better spacing */
  width: 100%;
  max-width: 1000px; /* Max width for better layout control */
}


.bottom-position{
  width: 120%;
  max-width: 1500px; /* Max width for better layout control */
  z-index: 1;
  margin-top: -25%;
  padding-bottom: 8%;
}


@media (max-width: 768px) {
  .h1, .h2 {
    font-size: 2rem; /* Smaller font size on mobile */
  }
  
  .outerim {
    --notchSize: 10px; /* Smaller notch size on mobile */
  }
}
</style>
