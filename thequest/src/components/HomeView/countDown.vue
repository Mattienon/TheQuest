<template>
  <div class="countdown-container">
    <h1 class="countdown-title"></h1>
    <div class="countdown-time">
      <span v-if="days" class="countdown-segment">{{ days }}d </span>
      <span class="countdown-segment">{{ hours }}h </span>
      <span class="countdown-segment">{{ minutes }}m </span>
      <span class="countdown-segment">{{ seconds }}s</span>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';

export default {
  setup() {
    const targetDate = new Date('2024-09-14T20:30:00');
    const currentDate = new Date();

    if (targetDate <= currentDate) {
      console.error('Target date must be in the future.');
      return;
    }

    let timeLeft = ref(Math.floor((targetDate - currentDate) / 1000));

    const days = computed(() => Math.floor(timeLeft.value / 86400));
    const hours = computed(() => Math.floor((timeLeft.value % 86400) / 3600));
    const minutes = computed(() => Math.floor((timeLeft.value % 3600) / 60));
    const seconds = computed(() => timeLeft.value % 60);

    const startTimer = () => {
      const timerInterval = setInterval(() => {
        timeLeft.value--;
        if (timeLeft.value <= 0) {
          clearInterval(timerInterval);
          console.log('Timer ended!');
        }
      }, 1000);
    };

    onMounted(startTimer);

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

.countdown-container {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $secondary-purple;
  border: solid 6px $primary-yellow;
  width: 100%;
  margin: auto;
  
}

.countdown-time {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px 60px;
}

.countdown-segment {
  margin: 5px;
  font-size: 70px;
  color: $primary-green;
}

@media (max-width: 700px) {
  .countdown-container {
    padding: 0;
    margin: 0;
  }
  .countdown-segment {
  margin: 0.5;
  font-size: 13px;
  color: $primary-green;
}

}
</style>
