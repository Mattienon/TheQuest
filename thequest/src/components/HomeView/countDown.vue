<template>
  <div class="countdown-container">
    <h1 class="countdown-title"></h1>
    <div class="countdown-time">
      <p v-if="days" class="countdown-segment">{{ days }}D</p>
      <p class="countdown-segment">{{ hours }}T</p>
      <p class="countdown-segment">{{ minutes }}M</p>
      <p class="countdown-segment">{{ seconds }}S</p>
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
  width: 100%;
  margin: auto;
}

.countdown-time {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 30px 50px;
}

.countdown-segment {
  margin: 5px;
  padding: 40px 20px; /* Add padding inside each segment */
  font-size: 60px;
  color: $primary-green;
  background-color: $light-purple; /* Background color for each segment */
  border: solid 5px $primary-yellow; /* Border around each segment */
  border-radius: 10px; /* Optional: Add border-radius for rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow to each segment */
  transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease; /* Add transition for smooth hover effect */
}

.countdown-segment:hover {
  transform: scale(1.1); /* Slightly increase size on hover */
  color: $primary-yellow; /* Change text color on hover */
  background-color: lighten($light-purple, 10%); /* Lighten background color on hover */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Intensify shadow on hover */
}

@media (max-width: 560px) {
  .countdown-container {
    padding: 0;
    margin: 0;
  }
  .countdown-segment {
    font-size: 35px;
    padding: 20px 8px; /* Adjust padding for smaller screens */
  }
}
</style>
