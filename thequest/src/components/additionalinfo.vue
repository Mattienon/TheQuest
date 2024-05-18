// MainComponent.vue
<template>
  <div class="container">
    <h1 class="my-4">Main Title</h1>
    <p class="mb-4">This is the main description for the cards section.</p>
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
          title: 'Card 1 Title',
          description: 'This is the description for card 1.'
        },
        {
          imgSrc: 'https://via.placeholder.com/150',
          title: 'Card 2 Title',
          description: 'This is the description for card 2.'
        },
        {
          imgSrc: 'https://via.placeholder.com/150',
          title: 'Card 3 Title',
          description: 'This is the description for card 3.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
</style>
