<template>
  <div class="container">
    <h1>Extra aktiviteter</h1>
    <p>Oplev extra aktiviteter i forlængelse af din Quest</p>
    <div class="row">
      <div class="col-md-4" v-for="(card, index) in cards" :key="index">
        <CardComponent
          :imgSrc="card.imgSrc"
          :title="card.title"
          :description="card.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
import card1 from '@/assets/Images/elf.jpg'
import card2 from '@/assets/Images/bar.jpg'
import card3 from '@/assets/Images/aktivitet.jpg'

export default {
  name: 'MainComponent',
  components: {
    CardComponent
  },
  data() {
    return {
      cards: [
        {
          imgSrc: card2,
          title: 'Bar & By',
          description: 'Efter din Questen åbner dronning Louise drinks der smager af eventyr '
        },
        {
          imgSrc: card1,
          title: 'Fantasy Festival',
          description: 'This is the description for card 2.'
        },
        {
          imgSrc: card3,
          title: 'Aktiviteter',
          description: 'This is the description for card 3.'
        }
      ]
    };
  }
};
</script>

<style scoped>
@import '@/assets/hexcolors.scss';

.container {
  padding: 20px;
  text-align: center;
}

h1 {
  color: $primary-yellow;
}

.card {
  border-radius: 5px;
  border: none;
}
</style>
