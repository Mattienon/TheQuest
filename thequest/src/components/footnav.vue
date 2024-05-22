<template> 
<div class="position">
  <footer class="footer">
    <div class="greenfoot">
      <p class="title">Fantasy Festival Quest</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque sint natus, libero.</p>
      <div class="btn btn-dark"><span>Til fantasy festival</span></div>
    </div>
    
    <div class="whiteframe">
      <div class="navigation-links">
        <span class="copyright">@Copyright Quest 2024</span>
        <RouterLink
          v-for="(link, index) in navigationLinks"
          :key="index"
          :to="link.path"
          class="footer-link"
        >{{ link.text }}</RouterLink>
      </div>
    </div>
    
    <div class="footerimg">
      <img src="@/assets/Images/raven.svg" alt="Raven Image">
    </div>
  </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const navigationLinks = ref([
  { path: '/', text: 'Privacy Policy' },
  { path: '/About', text: 'Terms of Service' }
]);
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';
.position {
  display: flex;
  flex-direction: column;
  min-height: 150vh; /* Ensure it takes the full viewport height */
}

.footer {
  margin-top: auto; /* Pushes the footer to the bottom */
  display: flex;
  flex-direction: column;
  background-color: $primary-green;
  position: relative;
  /* Clip only the bottom 20px */
  clip-path: inset(-100% 0px 0px 0px);
  z-index: 3;
  
}
p{
  color: black;
  font-weight: 600;
}

.greenfoot {
  width: 90%;
  padding-left: 5%;
  margin-top: 3%;
}

// copyright & privacy policy footer element
.whiteframe {
  background-color: white;
  text-align: center;
  margin: 1rem;
}

.navigation-links {
  display: flex;
  justify-content: space-evenly;
  padding: 8px 0;
}

.footer-link {
  color: $primary-yellow;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
}

.title {
  font-size: larger;
}

.btn {
  border-radius: 50px;
  width: 10%;
  display: flex;
  justify-content: center;
  margin-bottom: 1%;
  background-color: $primary-yellow;
  border: none;
  color: black;
  font-weight: 900;
}

// footer image with raven
.footerimg {
  width: 380px;
  position: absolute;
  right: 5%;
  bottom: 0%;
  z-index: 1;
  pointer-events: none;
}


@media (max-width: 800px) {
  .footerimg{
    width: 250px;
    position: absolute;
    right: 0%;
    bottom: 0%;
  }

.btn {
  display: flex;
  align-items: flex-start;
  border-radius: 50px;
  width: 40%;
  margin-bottom: 1%;
}
.greenfoot {
  width: 90%;
  padding-left: 3%;
  margin-top: 10%;
}

.whiteframe {
  background-color: white;
  text-align: center;
  margin: 1rem;
  justify-content: flex-start;
}

p{
  display: none;
}

}

</style>
<!-- once again if i plop this into th All folder the raven disapears -->