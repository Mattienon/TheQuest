<template>
  <div>
    <div class="card" @mouseover="cardHover(true)" @mouseleave="cardHover(false)">
      <div class="cardtitle">
        <h1>Velkommen til Questen</h1>
      </div>
      <div class="cardcontent">
        <h2>Kan du løse gåderne?</h2>
        <p>Fantasy Festival Quest i samabejde med Dystopia</p>
        <div class="btn btn-dark" @mouseover="buttonHover(true)" @mouseleave="buttonHover(false)">
          <a href="#" role="button" @click.prevent="buyTicket"><span>Køb billet</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const buyTicket = () => {
  // Implement logic to handle ticket purchase
  console.log("Ticket purchase logic goes here");
};

</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

h2 {
  padding-bottom: 1rem;
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
  height: 350px;
  outline: none;
  border: none;
  text-align: center;
  display: flex;
  flex-direction: column; /* Ensure content stacks vertically */
  justify-content: center; /* Vertically center content */
  align-items: center; /* Horizontally center content */
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
</style>
