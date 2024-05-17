<template>
    <div class="body">
      <div class="outerim body">
          <p>Here the content compositions will be implimented</p>
      </div>
    </div>
  </template>

<script setup>


</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';
//body container styles
.body{

  padding-top: 3%;
  padding-left: 10%;
  padding-right: 10%;
  background-color: rgb(139, 139, 139);
  height: 200vh;
}
//Front page font adjustments
h1,h2{
 color: $primary-yellow;
 font-weight: 600;
 letter-spacing: 3px;
 font-size: 40px;
}

//the outerim is the border around the frontpage content.
.outerim{
  border-style: outset;
  border-width: 13px;
  border-color: $primary-yellow;
  background-color: $primary-purple;
  
  --notchSize: 15px; //this is the variable that controls the corners of the gold border
  clip-path: 
    polygon(
      0% var(--notchSize), 
      var(--notchSize) 0%, 
      calc(100% - var(--notchSize)) 0%, 
      100% var(--notchSize), 
      100% calc(100% - var(--notchSize)), 
      calc(100% - var(--notchSize)) 100%, 
      var(--notchSize) 100%, 
      0% calc(100% - var(--notchSize))
    );
}




</style>