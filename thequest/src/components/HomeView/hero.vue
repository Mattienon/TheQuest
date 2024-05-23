<template>
  <div>
    <div class="card" @mouseover="cardHover(true)" @mouseleave="cardHover(false)">
      <div class="cardtitle">
        <h1>Questen starter om</h1>
      </div>
      <div class="cardcontent">
        <Particleeffect/>
        <!-- <div class="btn btn-dark" @mouseover="buttonHover(true)" @mouseleave="buttonHover(false)">
          <a href="#" role="button" @click.prevent="buyTicket"><span>Køb billet</span></a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Particleeffect from '../HomeView/countDown.vue';

// const buyTicket = () => {
//   // Implement logic to handle ticket purchase
//   console.log("Ticket purchase logic goes here");
//};
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

h1 {
  color: $primary-yellow;
  font-size: 3vw; /* Responsive font size */
  margin: 0; /* Remove default margin */
}

a {
  text-decoration: none;
  color: $primary-yellow;
  font-weight: bold;
  cursor: pointer; /* Add pointer cursor to indicate clickable element */
}

a:hover {
  color: black;
}

.card {
  background-color: $light-purple;
  height: 100%;
  max-height: 350px;
  width: 100%;
  outline: none;
  border: none;
  text-align: center;
  display: flex;
  flex-direction: column; /* Ensure content stacks vertically */
  justify-content: center; /* Vertically center content */
  align-items: center; /* Horizontally center content */
  box-shadow: 0 80px 100px rgba(0, 0, 0, 0.2); /* Add shadow to card */
  transition: box-shadow 0.3s ease; /* Smooth transition for shadow change */
  margin: auto; /* Center card horizontally */
  padding: 1rem; /* Add padding for better spacing */
}

.cardcontent {
  width: 200%; /* Ensure content takes full width */
  padding: 1rem; /* Add padding for better spacing */
}

.btn {
  margin-top: 2%;
  border-radius: 15px;
  padding: 10px 20px;
  border: none;
  background-color: $primary-purple;
  transition: transform 0.3s ease, background-color 0.3s ease; /* Add transition for background-color and transform */
}

.btn:hover {
  background-color: lighten($primary-green, 10%);
  transform: translateY(-5px); /* Move button up on hover */
}

@media (max-width: 768px) {
  h1 {
    font-size: 10vw; /* Adjust font size for medium screens */
  }

  .card {
    height: auto;
    padding: 2rem; /* Adjust padding for medium screens */
  }
}

@media (max-width: 450px) {
  h1 {
    font-size: 8vw; /* Adjust font size for small screens */
  }

  .card {
    height: auto;
    padding: 0.5rem; /* Adjust padding for small screens */
  }
}
</style>
