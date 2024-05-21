<template>
  <div>
    <div class="card">
      <div class="cardtitle">
        <h1>Questen er et uendeligt eventyr</h1>
        <div class="cardcontent">
          <h2>Hvert år er en ny oplevelse</h2>
          <p>Skriv dig op til opdateringer om kommende Quest nyheder og Events</p>
          <!-- Email sign-up form -->
          <form class="signup-form" @submit.prevent="submitForm" novalidate>
            <label for="email" class="visually-hidden">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Indtast din email" required aria-required="true">
            <button type="submit" class="btn btn-dark"><span>Tilmeld</span></button>
          </form>
          <!-- Success message -->
          <p v-if="submitted" class="success-message">Tak for din tilmelding!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const submitted = ref(false);

const submitForm = () => {
  // Simulate form submission (replace with actual submission logic)
  if (email.value) {
    console.log('Email submitted:', email.value);
    submitted.value = true;
    // Reset form after submission
    email.value = '';
    setTimeout(() => {
      submitted.value = false;
    }, 3000); // Hide success message after 3 seconds
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/hexcolors.scss';

/* Add visually hidden class for accessibility */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.card {
  background-color: $light-purple;
  height: 350px;
  outline: none;
  border: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center; /* Align items vertically */
}

.signup-form {
  display: flex; /* Use flexbox layout */
  justify-content: center; /* Align form elements horizontally */
  align-items: center; /* Align items vertically */
  flex-wrap: wrap; /* Allow wrapping */
  gap: 10px; /* Add gap between elements */
  margin-top: 20px;
}

.signup-form input[type="email"] {
  flex: 1; /* Take up remaining space */
  padding: 10px;
  border-radius: 5px;
  border: none;
}

.signup-form button {
  padding: 11px 20px;
  border: none;
  background-color: $primary-purple;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.signup-form button:hover {
  background-color: lighten($primary-yellow, 2%);
}

.success-message {
  color: black;
  margin-top: 10px;
}
</style>
