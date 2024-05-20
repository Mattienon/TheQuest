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

import raven from '@/assets/Images/raven.svg';
import Malice from '@/assets/Images/Malice.jpg';
import elf from '@/assets/Images/elf.jpg';

const cards = ref([
  {
    imageUrl: Malice,
    text: 'This is a paragraph inside the first column.'
  },
  {
    imageUrl: raven,
    text: 'This is a paragraph inside the second column.'
  },
  {
    imageUrl: elf,
    text: 'This is a paragraph inside the second column.'
  },
  {
    imageUrl: Malice,
    text: 'This is a paragraph inside the first column.'
  },
  {
    imageUrl: raven,
    text: 'This is a paragraph inside the second column.'
  },
  {
    imageUrl: elf,
    text: 'This is a paragraph inside the second column.'
  },
  // Add more card items as needed
]);
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.container {
  text-align: center;
  color: $primary-yellow;
}

.card {
  width: 90%;
  height: 90%;
  border: solid 8px $primary-yellow;
  padding: 5%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 3rem;
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

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-5px); /* Move up by 5px */
  }
}
</style>
