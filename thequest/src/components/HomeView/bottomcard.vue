<template>
    <div>
      <div class="card">
        <div class="cardtitle">
          <h1>Questen er et uendeligt eventyr</h1>
          <div class="cardcontent">
            <h2>Hvert år er en ny oplevelse</h2>
            <p>Skriv dig op til opdateringer om kommende Quest nyheder og Events</p>
            <!-- Email sign-up form -->
            <form class="signup-form" @submit.prevent="submitForm">
              <input type="email" v-model="email" placeholder="Indtast din email" required>
              <button type="submit" class="btn btn-dark"><span>Tilmeld</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  
  const submitForm = () => {
    // Handle form submission logic here (e.g., sending data to a server)
    console.log('Email submitted:', email.value);
  };
  </script>
  
  <style lang="scss" scoped>
    @import '@/assets/hexcolors.scss';
  
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
    background-color: lighten($primary-purple, 10%);
  }
  </style>
  