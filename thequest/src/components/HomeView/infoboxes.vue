<template>
  <div class="container">
    <div class="row">
      <!-- First Card -->
      <div class="col">
        <div class="card card1">
         
          <div class="card-body"> 
          
            <img :src="currentContent1.img" class="card-img1" alt="Image 1">
             <h2 class="card-title">{{ currentContent1.title }}</h2>
            <p class="card-text">{{ currentContent1.content }}</p>
            
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
            <img :src="currentContent2.img" class="card-img" alt="Image 2">
            <h2 class="card-title">{{ currentContent2.title }}</h2>
            <p class="card-text">{{ currentContent2.content }}</p>
           
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
import Malice from '@/assets/Images/figurer/Malice.png'
import troldmand from '@/assets/Images/figurer/troldmand.png'
import Gnist from '@/assets/Images/figurer/gnist.png'
import Havfrue from '@/assets/Images/figurer/havfrue.png'
import Akivaren from '@/assets/Images/figurer/arkivaren.png'

const contentOptions1 = ref([
  { title: 'Malice',  img: Malice },
  { title: 'Gnist',  img: Gnist},
  { title: 'Arkivaren',  img: Akivaren },
  { title: 'Troldmand',  img: troldmand },
  { title: 'Havfrue',  img: Havfrue }
]);

const contentOptions2 = ref ([
  { title: 'Hvad er det', content: 'Questen er et oplevesesløb. Når tusmørket begynder at sænke sig over Esbjerg, skrues sværhedsgraden i AftenQuesten op. Nu skal der virkelig tænkes kreativt og løses opgaver, der kræver både mod, samarbejde og snilde for at I kan gennemføre questen og redde Esbjerg. Er du vild med at løse gåder og knække koder, så må du ikke snyde dig selv for denne ultimative oplevelse. Vi sender dig og vennerne ud på jeres ultimative eventyr i Esbjergs gader og stræder. Her vil I blive nødt til at samarbejde og udtænke nye løsninger for at gennemføre AftenQuesten. Questen tager ca. en time at gennemføre', img: 'path_to_img4' },
  { title: 'Tid & sted', content: 'Vi mødes på Torvet i Esbjerg. Dette går løs fra kl 18.00-22:30. Der er mange forskellige tider i dette tidsrum. Så tøv ikke og får bestilt den tid, som passer din gruppe.', img: 'path_to_img5' },
  { title: 'Trailer', content: '', img: 'path_to_img6' },
  { title: 'Overnatning', content: 'I samarbejder med Cabinn Esbjerg og hotel Britania, som ligger i gåafstand fra Torvet, vil du få 10% rabat på overnatning, når du viser din Quest billet ', img: 'path_to_img6' },
  { title: 'Transport', content: ' Der går mange togforbindelser til Esbjerg station. Stationen ligger 100 m fra Torvet, hvor Questen starter. ', img: 'path_to_img6' },
]);

const currentContent1 = ref({});
const currentContent2 = ref({});

const setCurrentContent1 = (option) => {
  currentContent1.value = option;
};

const setCurrentContent2 = (option) => {
  currentContent2.value = option;
};

// Load the content of the first button by default
setCurrentContent1(contentOptions1.value[0]);
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
  height: 80%;
  border: none;
  border-radius: 30px;
  background-color: #8e44ad; /* Example color */
  color: #fff; /* Example color */
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 80%;
  margin-top: -60%;
  height: auto;
  border-radius: 20px;
}
.card-img1 {
  width: 80%;
  margin-top: -60%;
  border-radius: 20px;

}

.button-group {
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 10000;
}

.button-group1 {
  top: 35%;
  left: -10%;
  align-items: start;
}

.button-group2 {
  top: 35%;
  right: -10%;
  align-items: end;
}

.btn {
  margin: 5px 0;
  background-color: $primary-green; /* Example color */
  border: none;
  padding: 5px 3px;
  width: 100%;
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



@media (max-width: 700px) {
  .container {
    padding-top: 15%;
  }
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
    width: 80%;
  }
}
</style>
