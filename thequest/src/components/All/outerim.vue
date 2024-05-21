<template>
  <div class="outerim"></div>
</template>

<script setup>
// No need for any script in this component
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

// Customize notch size
$notchSize: 15px;

.outerim {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 75%;
  min-height: 270vh;
  z-index: -1;
  border: 10px outset $primary-yellow;
  background: linear-gradient(to bottom, $primary-purple 70%, $primary-green 95%);
  clip-path: polygon(
    0% $notchSize, 
    $notchSize 0%, 
    calc(100% - #{$notchSize}) 0%, 
    100% $notchSize, 
    100% calc(100% - #{$notchSize}), 
    calc(100% - #{$notchSize}) 100%, 
    $notchSize 100%, 
    0% calc(100% - #{$notchSize})
  );
}

@media (max-width: 700px) {
  .outerim {
    min-height: 425vh;
    width: 85%;
  }
}
</style>
