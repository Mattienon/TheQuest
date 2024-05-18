<template>
    <div class="container">
      <div class="row">
        <!-- First Card -->
        <div class="col">
          <div class="card card1">
            <h1>Mød karakterende</h1>
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
  
  <script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        contentOptions1: [
          { title: 'Malice', content: 'Ruten', img: 'path_to_img1' },
          { title: 'rfjroeirj', content: 'Blablabla', img: 'path_to_img2' },
          { title: 'ifheohrik', content: 'Noget andet', img: 'path_to_img3' }
        ],
        contentOptions2: [
          { title: 'Hvad er det', content: 'Ruten', img: 'path_to_img4' },
          { title: 'Tid & sted', content: 'Blablabla', img: 'path_to_img5' },
          { title: 'Andet', content: 'Noget andet', img: 'path_to_img6' }
        ],
        currentContent1: {},
        currentContent2: {}
      };
    },
    methods: {
      setCurrentContent1(option) {
        this.currentContent1 = option;
      },
      setCurrentContent2(option) {
        this.currentContent2 = option;
      }
    }
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
    width: 100%;
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
    border-radius: 40px;
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
  