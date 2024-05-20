// MainComponent.vue
<template>
  <div class="container">
    <h1 >Extra aktiviteter</h1>
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

export default {
  name: 'MainComponent',
  components: {
    CardComponent
  },
  data() {
    return {
      cards: [
        {
          imgSrc: 'https://via.placeholder.com/150',
          title: 'Bar & By',
          description: 'Efter din Questen åbner dronning Louise drinks der smager af eventyr '
        },
        {
          imgSrc: 'https://via.placeholder.com/150',
          title: 'Fantasy Festival',
          description: 'This is the description for card 2.'
        },
        {
          imgSrc: 'https://via.placeholder.com/150',
          title: 'Noget Tredje',
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


.card{
  border-radius: 2px;
  border: none;
}
</style>
