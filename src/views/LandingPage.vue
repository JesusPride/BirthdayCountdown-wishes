<template>
  <div class="landing-page">
    <nav class="navbar">
      <div class="container">
        <div class="logo">Esther's Birthday</div>
        <button class="btn-primary" @click="goToBirthday">View Birthday Page</button>
      </div>
    </nav>

    <section class="hero">
      <div class="container">
        <h1>Celebrate Esther's Special Day</h1>
        <p class="subtitle">Join us in making this birthday unforgettable</p>
        <button class="btn-primary" @click="goToBirthday">Send Your Wishes</button>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>What's Special About This Day?</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="icon">🎉</div>
            <h3>Countdown to Celebration</h3>
            <p>Watch the countdown to Esther's special day and join the excitement!</p>
          </div>
          <div class="feature-card">
            <div class="icon">💌</div>
            <h3>Send Your Wishes</h3>
            <p>Share your heartfelt birthday messages and make this day even more special.</p>
          </div>
          <div class="feature-card">
            <div class="icon">📸</div>
            <h3>Photo Gallery</h3>
            <p>View and share beautiful moments from Esther's journey.</p>
          </div>
          <div class="feature-card">
            <div class="icon">🎵</div>
            <h3>Birthday Music</h3>
            <p>Enjoy a curated playlist of birthday songs and celebrations.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Ready to Celebrate?</h2>
        <p>Join us in making Esther's birthday a memorable one!</p>
        <button class="btn-primary" @click="goToBirthday">Start Celebrating</button>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>Made with ❤️ for Esther's Birthday</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    goToBirthday() {
      this.$router.push('/birthday');
    }
  }
}
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: white;
}

.navbar {
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4a90e2;
}

.hero {
  padding: 8rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url('/images/hero-bg.jpg') center/cover;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.features {
  padding: 4rem 2rem;
}

.features h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4a90e2;
}

.feature-card p {
  opacity: 0.8;
  line-height: 1.6;
}

.cta {
  padding: 4rem 2rem;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
}

.cta h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn-primary {
  background: #4a90e2;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 1.1rem;
}

.btn-primary:hover {
  background: #357abd;
  transform: translateY(-2px);
}

.footer {
  padding: 2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style> 