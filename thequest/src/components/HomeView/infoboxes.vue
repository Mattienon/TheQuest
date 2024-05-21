<template>
  <div class="container">
    <div class="row">
      <!-- First Card -->
      <div class="col">
        <div class="card card1">
          <h1>Karakterene</h1>
          <div class="card-body">
            <h2 class="card-title">{{ currentContent1.title }}</h2>
            <p class="card-text">{{ currentContent1.content }}</p>
            <img :src="currentContent1.img" class="card-img" alt="Image 1">
          </div>
          <div class="button-group button-group1">
            <button v-for="(option, index) in contentOptions1" :key="index" class="btn btn-dark" @click="setCurrentContent1(option)">{{ option.title }}</button>
          </div>
        </div>
      </div>

      <!-- Second Card -->
      <div class="col">
        <div class="card card2">
          <h1>Udforsk Questen</h1>
          <div class="card-body">
            <h2 class="card-title">{{ currentContent2.title }}</h2>
            <p class="card-text">{{ currentContent2.content }}</p>
            <img :src="currentContent2.img" class="card-img" alt="Image 2">
          </div>
          <div class="button-group button-group2">
            <button v-for="(option, index) in contentOptions2" :key="index" class="btn btn-dark" @click="setCurrentContent2(option)">{{ option.title }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const contentOptions1 = ref([
  { title: 'Malice', content: 'Ruten', img: 'path_to_img1' },
  { title: 'Gnisten', content: 'Blablabla', img: 'path_to_img2' },
  { title: 'Arkivaren', content: 'Noget andet', img: 'path_to_img3' },
  { title: 'Troldmand', content: 'Blablabla', img: 'path_to_img2' },
  { title: 'Havfrue', content: 'Noget andet', img: 'path_to_img3' }
]);

const contentOptions2 = ref([
  { title: 'Hvad er det', content: 'Questen er et oplevesesløb. Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i AftenQuesten op. Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg. Er du vild med at løse gåder og knække koder, så må du ikke snyde dig selv for denne ultimative oplevelse. Vi sender dig og vennerne ud på jeres ultimative eventyr i Esbjergs gader og stræder. Her vil I blive nødt til at samarbejde og udtænke nye løsninger for at gennemføre AftenQuesten.', img: 'path_to_img4' },
  { title: 'Tid & sted', content: 'Vi mødes på Torvet i Esbjerg. Dette går løs fra kl 18.00-22:30', img: 'path_to_img5' },
  { title: 'Trailer', content: '', img: 'path_to_img6' },
  { title: 'Overnatning', content: 'Overnatningsmuligheder: ', img: 'path_to_img6' },
  { title: 'Transport', content: ' Togforbindelser:', img: 'path_to_img6' },
]);

const currentContent1 = ref({});
const currentContent2 = ref({});

const setCurrentContent1 = (option) => {
  currentContent1.value = option;
};

const setCurrentContent2 = (option) => {
  currentContent2.value = option;
};
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
  text-align: center;
}

.row {
  display: flex;
  flex-wrap: wrap;
  width: 150%;
  justify-content: space-around;
}

.col {
  flex: 1 1 45%; /* Adjusts to 45% width on larger screens */
  margin: 10px;
  display: flex;
  justify-content: center;
}

h1 {
  color: $primary-yellow;
}

.card {
  position: relative;
  width: 100%;
  border: none;
  border-radius: 30px;
  background-color: #8e44ad; /* Example color */
  color: #fff; /* Example color */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-body {
  padding: 20px;
}

.card-img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.button-group {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 10000;
}

.button-group1 {
  top: 8%;
  left: -15%;
  align-items: start;
}

.button-group2 {
  top: 8%;
  right: -20%;
  align-items: end;
}

.btn {
  margin: 5px 0;
  background-color: $primary-green; /* Example color */
  border: none;
  padding: 5px 15px;
  width: 125%;
}

//microinteractions
.card:hover {
  transform: scale(1.02); /* Scale up on hover */
}

.btn:hover {
  background-color: darken($primary-green, 10%); /* Darken button color on hover */
}

.card1 {
  transition: transform 0.3s ease;
}

.card2 {
  transition: transform 0.3s ease;
}

.button-group1,
.button-group2 {
  transition: transform 0.3s ease;
}

.button-group1:hover,
.button-group2:hover {
  transform: translateY(-5px); /* Move button group up on hover */
}


@media (max-width: 768px) {
  .col {
    flex: 1 1 100%; /* Stacks the columns vertically on smaller screens */
  }

  .button-group1,
  .button-group2 {
    position: static;
    align-items: center;
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>
