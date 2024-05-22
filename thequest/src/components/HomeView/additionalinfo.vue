<template>
  <div class="container">
    <h1>Extra aktiviteter</h1>
    <p>Oplev ekstra aktiviteter i forlængelse af din Quest</p>
    <div class="row">
      <div class="col" v-for="(card, index) in cards" :key="index">
        <div class="card h-100">
          <img :src="card.imgSrc" class="card-img-top" :alt="card.title + ' image'">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import card1 from '@/assets/Images/elf.jpg';
import card2 from '@/assets/Images/bar.jpg';
import card3 from '@/assets/Images/aktivitet.jpg';

const cards = [
  {
    imgSrc: card2,
    title: 'Bar & By',
    description: 'Efter din Quest åbner dronning Louise op for magiske drinks, der smager af eventyr ',
  },
  {
    imgSrc: card1,
    title: 'Fantasy Festival',
    description: 'The Quest er en del af Esbjergs berømte Fantasy Festival.',
  },
  {
    imgSrc: card3,
    title: 'Aktiviteter',
    description: 'Questen tager ca 1 time og derefter kan du gå ud og nyde godt af hvad Festivalen har at tilbyde.'
  }
];
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.container {
  padding: 20px;
  text-align: center;
  width: 85%;
}
h1 {
  padding-bottom: 1rem;
  color: $primary-yellow;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem; /* Space between cards */
}


.card {
  margin: 10px;
  border: none;
  display: flex;
  flex-direction: column;
}

.card-body {
  flex: 1; /* Ensure the card body takes up remaining space */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-img-top {
  width: 100%;
  height: auto;
}

.col {
  flex: 1 1 calc(33.333% - 1rem); /* Three columns layout */
  box-sizing: border-box;
  margin-bottom: 1rem; /* Space between rows */
}

@media (max-width: 1000px) {
  .col {
    flex: 1 1 calc(50% - 1rem); /* Two columns layout on smaller screens */
  }
  .container{
    padding: 0%;
  }
}

@media (max-width: 800px) {
  .col {
    flex: 1 1 calc(100% - 1rem); /* Single column layout on extra small screens */
  }
}
</style>
