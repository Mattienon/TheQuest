<template> 
  <footer class="footer">
    <div class="greenfoot">
      <p class="title">Fantasy Festival Quest</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque sint natus, libero.</p>
      <div class="btn btn-dark"><span>Til fantasy festival</span></div>
    </div>
    
    <div class="whiteframe">
      <div class="navigation-links">
        <span class="copyright">@Copyright Fantasy Festival 2024</span>
        <RouterLink
          v-for="(link, index) in navigationLinks"
          :key="index"
          :to="link.path"
          class="footer-link"
        >{{ link.text }}</RouterLink>
      </div>
    </div>
    
    <div class="footerimg">
      <img src="../assets/Images/raven.svg" alt="Raven Image">
    </div>
  </footer>
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

.footer {
  display: flex;
  flex-direction: column;
  background-color: $primary-green;
  position: relative;
  margin-top: 5%;
  /* Clip only the bottom 20px */
  clip-path: inset(-100% 0px 20px 0px)
  
}

.greenfoot {
  width: 90%;
  padding-left: 5%;
  margin-top: 3%;
  padding-bottom: 1%;
  margin-bottom: 3%;
}

// copyright & privacy policy footer element
.whiteframe {
  background-color: white;
  width: 90%;
  display: flex;
  margin: auto;
  padding: 10px;
  margin-bottom: 2%;
}

.navigation-links {  
  width: 100%;
  display: flex;
  justify-content: center;
  
}

.footer-link {
  color: $primary-yellow;
  text-decoration: none;
  display: flex;
  justify-content: flex-end;
  padding-left: 8%;
}

.title {
  font-size: larger;
}

.btn {
  border-radius: 50px;
  padding: auto;
  width: 10%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
  background-color: $primary-yellow;
  border: none;
}

// footer image with raven
.footerimg {
  width: 400px;
  position: absolute;
  right: 10%;
  bottom: -10%; /* Adjusted to 0 to align with the bottom */
  z-index: 1000;
}

</style>
