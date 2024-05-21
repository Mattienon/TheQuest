<template>
  <div class="countdown-container">
    <h1 class="countdown-title">Countdown Timer</h1>
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
    // Calculate the target date (14th of September)
    const targetDate = new Date('2024-09-14T20:30:00');
    // Get the current date
    const currentDate = new Date();

    // Ensure the target date is in the future
    if (targetDate <= currentDate) {
      console.error('Target date must be in the future.');
      return;
    }

    // Calculate the time remaining in seconds
    let timeLeft = ref(Math.floor((targetDate - currentDate) / 1000));

    // Method to calculate remaining time in days, hours, minutes, and seconds
    const days = computed(() => Math.floor(timeLeft.value / 86400));
    const hours = computed(() => Math.floor((timeLeft.value % 86400) / 3600));
    const minutes = computed(() => Math.floor((timeLeft.value % 3600) / 60));
    const seconds = computed(() => timeLeft.value % 60);

    // Method to start the countdown
    const startTimer = () => {
      const timerInterval = setInterval(() => {
        timeLeft.value--;
        if (timeLeft.value <= 0) {
          clearInterval(timerInterval);
          // Optionally, you can perform some action when the timer ends
          console.log('Timer ended!');
        }
      }, 1000);
    };

    // Start the timer when the component is mounted
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
  background-color: $secondary-purple;
  // background: linear-gradient(to bottom, $secondary-purple 80%, $primary-purple 0%);

}

.countdown-title {
  font-size: 36px;
  color: $primary-yellow; /* Ensure this matches the variable name in your SCSS file */
}

.countdown-segment {
  margin-right: 10px;
  font-size: xx-large;
  font-weight: bolder;
  color: $primary-green; /* Ensure this matches the variable name in your SCSS file */
}
</style>
