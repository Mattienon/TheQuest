<template>
  <Outerim/>
    <div class="body">   
      <header class="hero-position">
        <hero />
      </header>

      <div class="boxcontent">
        <section class="cirkelarea">
          <logoarea />
        </section>
        <infoboxes />
      </div>
      
      <additionalinfo/> 

      <div class="bottom-position">
        <bottomcard/>
      </div>
    </div>
    <div class="outerim" :style="{ minHeight: dynamicHeight }"></div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import hero from '@/components/HomeView/hero.vue';
import bottomcard from '@/components/HomeView/bottomcard.vue';
import logoarea from '@/components/HomeView/logoarea.vue';
import infoboxes from '@/components/HomeView/infoboxes.vue';
import additionalinfo from '@/components/HomeView/additionalinfo.vue';
import Outerim from '@/components/All/outerim.vue';

const dynamicHeight = ref('');

// onMounted(() => {
//   calculateDynamicHeight();
//   window.addEventListener('resize', calculateDynamicHeight); // Recalculate height on window resize
// });

// const calculateDynamicHeight = () => {
//   const bodyElement = document.querySelector('.body');
//   if (bodyElement) {
//     dynamicHeight.value = `${bodyElement.clientHeight}px`; // Set dynamic height based on the content height
//   }
// }
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';


.body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1%;
  flex-direction: column;
  //this is for the footer to not be so far away but its a stupid solution
  margin-bottom: -110%;
  overflow-x: hidden;
  z-index: 1; /* Ensure it is above outerim */
  min-height: 100vh;
}

h1, h2 {
  color: $primary-yellow;
  font-weight: 600;
  letter-spacing: 3px;
  font-size: 2.5rem;
  text-align: center;
}

.hero-position {
  padding-top:10%;
  width: 100%;
  z-index: 1;
}

.cirkelarea {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10%;
  padding: 2%;
  z-index: 1;
}
.infoboxes{
  margin-top: 10%;
}
.boxcontent {
  padding: 2rem;
  width: 100%;
  max-width: 1100px;
  z-index: 1;
}

.bottom-position {
  padding-top: 5%;
  width: 100%;
  z-index: 1;
  transition: transform 0.3s;/* Add transition for microinteraction */
}

.bottom-position:hover {
  transform: scale(1.02);
}

// .outerim {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 13%;
//   bottom: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 85%;
//   z-index: -1;
//   border: 10px outset $primary-yellow;
//   background: linear-gradient(to bottom, $primary-purple 70%, $primary-green 95%);
//   clip-path: polygon(
//     0% var(--notchSize), 
//     var(--notchSize) 0%, 
//     calc(100% - var(--notchSize)) 0%, 
//     100% var(--notchSize), 
//     100% calc(100% - var(--notchSize)), 
//     calc(100% - var(--notchSize)) 100%, 
//     var(--notchSize) 100%, 
//     0% calc(100% - var(--notchSize))
//   );
// }

// @media (max-width: 500px) {
//   .outerim {
//     --notchSize: 10px; // Adjust notch size for smaller screens
//   }
// }

@media (max-width: 550px) {
  .body {
    padding: 0;
    margin-bottom: 0;
    min-height: auto;
  }

  .hero-position,
  .boxcontent, {
    width: 100%;
  
}
.hero-position{
  display: none;
}
}
</style>
