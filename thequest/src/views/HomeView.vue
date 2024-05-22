<template>
  <outerim/>
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
</template>

<script setup>
import hero from '@/components/HomeView/hero.vue';
import bottomcard from '@/components/HomeView/bottomcard.vue';
import logoarea from '@/components/HomeView/logoarea.vue';
import infoboxes from '@/components/HomeView/infoboxes.vue';
import additionalinfo from '@/components/HomeView/additionalinfo.vue';
import outerim from '@/components/All/outerim.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 1%;
  margin-bottom: -50%;
  flex-direction: column;
  overflow-x: hidden;
  z-index: 1; /* Ensure it is above outerim */
}

h1, h2 {
  color: $primary-yellow;
  font-weight: 600;
  letter-spacing: 3px;
  font-size: 2.5rem;
  text-align: center;
}

.hero-position {
  padding-top: 5%;
  width: 100%;
  max-width: 1700px;
  z-index: 1;
}

.cirkelarea {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -8%;
  padding: 2%;
  z-index: 1;
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
  max-width: 1700px;
  z-index: 1;
  transition: transform 0.3s;/* Add transition for microinteraction */
}

.bottom-position:hover {
  transform: scale(1.02);
}

@media (max-width: 1600px) {
  .body {
    padding-left: 5%;
    padding-right: 5%;
  }
  .bottom-position {
    margin-top: 10%;
  }
}

@media (max-width: 700px) {
  h1, h2 {
    font-size: 2rem;
  }

  .outerim {
    --notchSize: 10px;
  }

  .bottom-position {
    margin-top: 10%;
  }

  .cirkelarea {
    margin-top: -20%;
  }
}
</style>
