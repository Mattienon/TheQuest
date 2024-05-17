<template>
  <footer class="footer">
    <div class="greenfoot">
    <p class="title">Fantasy Festival Quest</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam itaque sint natus, libero.</p>
    <div class="btn btn-dark"><Span>Til fantasy festival</Span></div>
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
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const navigationLinks = ref([
  { path: '/', text: 'Privacy Policy' },
  { path: '/About', text: 'Terms of service' }
]);
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.footer {
  display: flex;
  flex-direction: column;
  background-color: $primary-green;
  padding: 2%;
  position: fixed;
  width: 100%;
  bottom: 0%;
}
.greenfoot{
  background-color: aliceblue;
  width: 90%;
  margin: auto;
}


.whiteframe{
  background-color: white;
  width: 90%;
  display: flex;
  margin: auto;
  padding: 12px;
}
.navigation-links{  
  width: 100%;
  text-align: center;
  display: flex;
  justify-content:space-evenly;

  .copyright{
    margin-left: -15%;
  }
}
.footer-link {
  color: $primary-yellow;
  text-decoration: none;
}
.title{
  font-size: larger;
}
.btn{
  border-radius: 50px;
  padding: auto;
  width: 10%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
}

</style>
