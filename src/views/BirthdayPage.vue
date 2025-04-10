<template>
    <div class="birthday-page">
      <ThemeToggle />
      <AudioPlayer />
      
      <div class="container-fluid">
        <div v-if="!isBirthday" class="main-content">
          <Countdown :birthday="birthday" @birthday-reached="onBirthdayReached" />
        </div>
  
        <div v-else class="birthday-content">
          <ConfettiAnimation />
          <PhotoGallery :images="birthdayImages" />
          
          <div class="birthday-message">
            <h2>Happy Birthday Esther! 🎂</h2>
            <p>Today is all about celebrating the amazing person you are! Wishing you joy, love, and exciting tech adventures in the coming year and always! 🚀💖</p>
          </div>
        </div>
  
        <BirthdayWishForm @wish-submitted="fetchWishes" />
        
        <div class="wishes-list" v-if="wishes.length > 0">
          <h3 class="text-center mb-4">Birthday Wishes</h3>
          <div v-for="(wish, index) in wishes" :key="index" class="wish-card">
            <h5>From: {{ wish.name }}</h5>
            <p>{{ wish.message }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useThemeStore } from '../stores/themeStore'
  import { api } from '../services/api'
  // import ThemeToggle from '../components/ThemeToggle.vue'
  // import AudioPlayer from '../components/AudioPlayer.vue'
  import Countdown from '../components/Countdown.vue'
  import PhotoGallery from '../components/PhotoGallery.vue'
  import BirthdayWishForm from '../components/BirthdayWishForm.vue'
  import ConfettiAnimation from '../components/ConfettiAnimation.vue'
  
  export default {
    name: 'BirthdayPage',
    components: {
      // ThemeToggle,
      // AudioPlayer,
      Countdown,
      PhotoGallery,
      BirthdayWishForm,
      ConfettiAnimation
    },
    setup() {
      const themeStore = useThemeStore()
      themeStore.initializeTheme()
      return { themeStore }
    },
    data() {
      const birthday = new Date("2025-04-14T15:54:00")
      const uniqueRoute = localStorage.getItem('uniqueRoute');
      const savedPhotos = localStorage.getItem(`photos_${uniqueRoute}`);
      const birthdayImages = savedPhotos ? JSON.parse(savedPhotos).map(photo => ({ src: photo, alt: 'Birthday photo' })) : [
        { src: '/images/birthday-1.jpg', alt: 'Happy Esther Day' },
        { src: '/images/birthday-2.jpg', alt: 'Birthday Smiles' },
        { src: '/images/birthday-3.jpg', alt: 'Best Moments' }
      ];
  
      return {
        birthday,
        isBirthday: false,
        wishes: [],
        birthdayImages
      }
    },
    methods: {
      onBirthdayReached() {
        this.isBirthday = true;
      },
      async fetchWishes() {
        try {
          const uniqueRoute = localStorage.getItem('uniqueRoute');
          if (!uniqueRoute) return;
          
          const response = await api.getWishes(uniqueRoute);
          if (response.success) {
            this.wishes = response.wishes || [];
          }
        } catch (error) {
          console.error('Error fetching wishes:', error);
        }
      }
    },
    mounted() {
      this.fetchWishes();
    }
  }
  </script>
  
  <style scoped>
  .birthday-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    color: white;
    padding: 2rem 0;
  }
  
  .main-content {
    text-align: center;
    padding: 2rem 0;
  }
  
  .birthday-content {
    text-align: center;
    padding: 2rem 0;
  }
  
  .birthday-message {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
  }
  
  .birthday-message h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  .birthday-message p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
  
  .wishes-list {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
  }
  
  .wish-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1rem;
  }
  
  .wish-card h5 {
    color: #4a90e2;
    margin-bottom: 0.5rem;
  }
  
  .wish-card p {
    margin-bottom: 0;
    line-height: 1.6;
  }
  </style>