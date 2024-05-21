<template>
  <div class="container">
    <h1 class="animated-heading">Galleri</h1>
    <div class="row">
      <div v-for="(item, index) in cards" :key="index" class="col-6">
        <div class="card">
          <div class="feather-border">
            <img :src="item.imageUrl" alt="Card image">
          </div>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import violin from '@/assets/Images/violin.jpg';
import skyd from '@/assets/Images/skyd.jpg';
import elf from '@/assets/Images/elf.jpg';
import fans from '@/assets/Images/fans.jpg';
import leg from '@/assets/Images/leg.jpg';
import musik from '@/assets/Images/musik.jpg';

const cards = ref([
  {
    imageUrl: violin,
    text: 'Hyggelig musik bliver spillet og hygget om.'
  },
  {
    imageUrl: skyd,
    text: 'Inkluderende samvær, og en masse at se på.'
  },
  {
    imageUrl: elf,
    text: 'Smukke kostumer og skuespillere.'
  },
  {
    imageUrl: fans,
    text: 'Hygge steder man kan spise mad og få noget godt at drikke.'
  },
  {
    imageUrl: leg,
    text: 'Aktiviter til alle aldre.'
  },
  {
    imageUrl: musik,
    text: 'Mere musik på den opstillede scene.'
  },
  // Add more card items as needed
]);
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.container {
  text-align: center;
  color: $primary-yellow;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center; 

}

.card {
  width: 90%;
  height: 90%;
  border: solid 8px $primary-yellow;
  padding: 5%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 2rem;
  background-color: transparent;
 
}



.feather-border::before,
.feather-border::after {
  content: '';
  position: absolute;
  top: -1px;
  bottom: -0px;
  left: -0px;
  right: -0px;
  border-radius: 0%;
  background: radial-gradient(circle at center, transparent 50%, black 200%);
}

img {
  width: 100%;
  height: 300px;
  object-fit: contain;
  display: block;
}

.animated-heading {
  margin-top: -5%;
  animation: moveUp ease-in-out 0.5s; 
}


@media (max-width: 800px) {
    .row{
      flex-direction: column;
}
.card{
  width: 180%;

}

}


@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-5px); /* Move up by 5px */
  }
}
</style>
