<template>
  <div class="landing-page">

    <nav>
        <div class="logo">Celebrate<span>.</span></div>
        <div class="nav-links">
          <router-link to="#features" class="me-3 lin">Features</router-link>
            <router-link to="#how-it-works" class="me-3 lin">How It Works</router-link>
            <router-link to="#example" class="lin">Example</router-link>
        </div>
        <div class="nav-buttons">
          <button v-if="!isAuthenticated" class="btn-secondary" @click="showAuthModal = true">
            Admin Login
          </button>
          <button v-if="isAuthenticated" class="btn-secondary" @click="logout">
            Logout
          </button>
        </div>
    </nav>


    <section class="hero">
        <div class="hero-content">
            <h1>Make Every <span>Birthday</span> Special</h1>
            <p>Create personalized birthday celebrations that friends and family can join from anywhere. Set up your birthday page, share your link, and collect heartfelt wishes from loved ones.</p>
            <button class="btn btn-primary" id="hero-signup-btn">Get Started</button>
        </div>
        <div class="hero-image">
            <img src="" alt="Birthday celebration preview">
        </div>
  
        <div class="hero-buttons">
          <button v-if="isAuthenticated" class="btn-primary" @click="goToDashboard">
            View Dashboard
          </button>
        </div>
    </section>

    <!-- <section class="hero">
      <div class="">
        <div class="d-flex">
            <div class="hero-content">
              <h1>Make Every <span>Birthday</span> Special</h1>
              <p>Create personalized birthday celebrations that friends and family can join from anywhere. Set up your birthday page, share your link, and collect heartfelt wishes from loved ones.</p>
            </div>

        <div class="hero-image">
            <img src="" alt="Birthday celebration preview">
        </div>

        </div>

        <div class="hero-buttons">
          <button v-if="isAuthenticated" class="btn-primary" @click="goToDashboard">
            View Dashboard
          </button>
        </div>
      </div>
    </section> -->

    <!-- Features Section -->
    <section class="features1" id="features">
        <div class="section-title">
            <h2>Amazing Features</h2>
            <p>Everything you need to create memorable birthday celebrations</p>
        </div>
        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h3>Countdown Timer</h3>
                <p>Build excitement with a customizable countdown timer showing days, hours, minutes and seconds until the big day.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-images"></i>
                </div>
                <h3>Photo Carousel</h3>
                <p>Upload your favorite photos to create a beautiful slideshow of memories for your birthday page.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-music"></i>
                </div>
                <h3>Birthday Music</h3>
                <p>Add a personal touch with birthday music that plays when visitors open your celebration page.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-comment-dots"></i>
                </div>
                <h3>Birthday Wishes</h3>
                <p>Friends can leave heartfelt birthday messages that you'll cherish forever.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-share-alt"></i>
                </div>
                <h3>Easy Sharing</h3>
                <p>Generate a unique link to share with friends and family across social media and messaging apps.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-paint-brush"></i>
                </div>
                <h3>Customizable Themes</h3>
                <p>Choose from light or dark mode and personalize colors to match your style.</p>
            </div>
        </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Admin Features</h2>
        <div class="feature-grid">
          <div class="feature-card Admin">
            <div class="icon">📝</div>
            <h3>View Wishes</h3>
            <p>Access and manage all birthday wishes sent to Esther.</p>
          </div>
          <div class="feature-card Admin">
            <div class="icon">📊</div>
            <h3>Analytics</h3>
            <p>View statistics and insights about the celebrations.</p>
          </div>
          <div class="feature-card Admin">
            <div class="icon">⚙️</div>
            <h3>Settings</h3>
            <p>Manage celebration settings and preferences.</p>
          </div>
          <div class="feature-card Admin">
            <div class="icon">🔒</div>
            <h3>Security</h3>
            <p>Secure access to all administrative features.</p>
          </div>
        </div>
      </div>
    </section>

        <!-- How It Works Section -->
        <section class="how-it-works" id="how-it-works">
        <div class="section-title">
            <h2>How It Works</h2>
            <p>Create your birthday celebration in just a few simple steps</p>
        </div>
        <div class="steps">
            <div class="step">
                <div class="step-number">1</div>
                <h3>Sign Up</h3>
                <p>Create an account and set your birthday date.</p>
            </div>
            <div class="step">
                <div class="step-number">2</div>
                <h3>Customize</h3>
                <p>Upload photos, choose your theme, and personalize your page.</p>
            </div>
            <div class="step">
                <div class="step-number">3</div>
                <h3>Share</h3>
                <p>Copy your unique link and share it with friends and family.</p>
            </div>
            <div class="step">
                <div class="step-number">4</div>
                <h3>Celebrate</h3>
                <p>Receive birthday wishes and enjoy your special day!</p>
            </div>
        </div>
    </section>

    <section class="example" id="example">
        <div class="section-title">
            <h2>See It In Action</h2>
            <p>Preview what your birthday celebration page could look like</p>
        </div>
        <div class="example-preview">
            <div class="example-card">
                <div class="example-header">
                    <h3>Happy Birthday Emma!</h3>
                    <div class="example-countdown">
                        <div class="countdown-item">
                            <span>05</span>
                            <p>Days</p>
                        </div>
                        <div class="countdown-item">
                            <span>12</span>
                            <p>Hours</p>
                        </div>
                        <div class="countdown-item">
                            <span>34</span>
                            <p>Minutes</p>
                        </div>
                        <div class="countdown-item">
                            <span>22</span>
                            <p>Seconds</p>
                        </div>
                    </div>
                </div>
                <div class="example-body">
                    <div class="example-carousel">
                        <i class="fas fa-images fa-3x"></i>
                    </div>
                    <div class="wishes-form">
                        <h4>Leave a Birthday Wish</h4>
                        <div class="form-group">
                            <label for="name">Your Name</label>
                            <input type="text" id="name" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <label for="message">Your Message</label>
                            <textarea id="message" placeholder="Write your birthday wish here..."></textarea>
                        </div>
                        <button class="btn btn-primary">Send Wish</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="cta">
        <h2>Ready to Make Birthday Memories?</h2>
        <p>Sign up today and create your personalized birthday celebration page in minutes.</p>
        <button class="btn" id="cta-signup-btn">Create Your Birthday Page</button>
    </section>

    <footer class="footer">
      <div class="container">
        <p>Admin Portal - Esther's Birthday Celebration</p>
      </div>
    </footer>

    <!-- Auth Modal -->
    <div v-if="showAuthModal" class="modal-overlay" @click="showAuthModal = false">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="showAuthModal = false">&times;</button>
        <h3>Admin Login</h3>
        <AuthForms 
          @login="handleLogin"
          @register="handleRegister"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AuthForms from '../components/AuthForms.vue'
import { api } from '../services/api'

export default {
  name: 'LandingPage',
  components: {
    AuthForms
  },
  data() {
    return {
      showAuthModal: false,
      isAuthenticated: false,
      isLoading: false,
      authError: null
    }
  },
  methods: {
    goToDashboard() {
      this.$router.push('/admin');
    },
    async handleLogin(credentials) {
      this.isLoading = true;
      this.authError = null;
      try {
        const response = await api.login(credentials);
        localStorage.setItem('token', response.token);
        this.isAuthenticated = true;
        this.showAuthModal = false;
        this.$router.push('/admin');
      } catch (error) {
        this.authError = error.message;
        alert(this.authError);
      } finally {
        this.isLoading = false;
      }
    },
    async handleRegister(userData) {
      this.isLoading = true;
      this.authError = null;
      
      try {
        const response = await api.register(userData);
        if (response.success) {
          await this.handleLogin({
            email: userData.email,
            password: userData.password
          });
          alert('Registration successful!');
        } else {
          this.authError = response.message || 'Registration failed. Please try again.';
          alert(this.authError);
        }
      } catch (error) {
        console.error('Registration failed:', error);
        this.authError = error.message || 'An error occurred during registration. Please try again.';
        alert(this.authError);
      } finally {
        this.isLoading = false;
      }
    },
    logout() {
      this.isAuthenticated = false;
      localStorage.removeItem('token');
      alert('Logged out successfully!');
    }
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticated = true;
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

/* Navigation */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 5%;
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 100;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #FF4D6D;
        }

        .logo span {
            color: #7B2CBF;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links lin {
            text-decoration: none;
            color: black;
            font-weight: 500;
            transition: color 0.3s;
        }

        .nav-links a:hover {
            color: #FF4D6D;
        }

/* Hero Section */
.hero {
            height: 100vh;
            display: flex;
            align-items: center;
            background: #FFC6D3;
            padding: 0 5%;
            margin-top: 60px;
        }

        .hero-content {
            width: 50%;
            padding-right: 2rem;
        }

        .hero-image {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-image img {
            max-width: 100%;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            line-height: 1.2;
            color: var(--dark-color);
        }

        .hero-content h1 span {
            color: var(--primary-color);
        }

        .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: #555;
        }

/* Features Section */
.features1 {
            padding: 5rem 5%;
            background-color: white;
        }

        .section-title {
            text-align: center;
            margin-bottom: 3rem;
        }

        .section-title h2 {
            font-size: 2.5rem;
            color: var(--dark-color);
            margin-bottom: 1rem;
            color: black;
            font-weight: 900;
            font-size: 2.5rem
        }

        .section-title p {
            color: #666;
            max-width: 600px;
            margin: 0 auto;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
        }

        .feature-card {
            background-color: white;
            border-radius: 10px;
            padding: 2rem;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s;
            text-align: center;
        }

        .feature-card:hover {
            transform: translateY(-10px);
        }

        .feature-icon {
            font-size: 2.5rem;
            color: #FF4D6D;
            margin-bottom: 1.5rem;
        }

        .feature-card h3 {
            margin-bottom: 1rem;
            color: var(--dark-color);
        }

        .feature-card p {
          border: 1px solid red;
          color: black
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

.Admin {
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
  color: #FF4D6D;
}

.featurd p {
  opacity: 0.8;
  line-height: 1.6;
}

/* How It Works Section */
.how-it-works {
            padding: 5rem 5%;
            background-color: #F5F5F5;
        }

        .steps {
            display: flex;
            justify-content: space-between;
            margin-top: 3rem;
        }

        .step {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 25%;
        }

        .step-number {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #FF4D6D;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
        }

        .step h3 {
            margin-bottom: 1rem;
            color: #1E1E24;
        }

        .step p {
          color: black
        }

        /* Example Section */
        .example {
            padding: 5rem 5%;
            background-color: white;
            text-align: center;
        }

        .example-preview {
            margin-top: 3rem;
            display: flex;
            justify-content: center;
        }

        .example-card {
            width: 80%;
            max-width: 800px;
            background-color: var(--light-color);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .example-header {
            background:linear-gradient(to right, #FF4D6D, #7B2CBF);            ;
            padding: 2rem;
            color: white;
            text-align: center;
        }

        .example-header h3 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        .example-countdown {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 1rem 0;
        }

        .countdown-item {
            background-color: rgba(255, 255, 255, 0.2);
            padding: 0.5rem 1rem;
            border-radius: 5px;
            min-width: 70px;
        }

        .countdown-item span {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .example-body {
            padding: 2rem;
        }

        .example-carousel {
            background-color: #1E1E24;
            height: 200px;
            margin-bottom: 1.5rem;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }

        .wishes-form {
            margin-top: 1.5rem;
            padding: 1.5rem;
            background-color: white;
            border-radius: 5px;
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            text-align: left;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-family: var(--font-main);
        }

        .form-group textarea {
            min-height: 100px;
            resize: vertical;
        }

/* CTA Section */
.cta {
            padding: 5rem 5%;
            background: linear-gradient(to right, #FF4D6D, #7B2CBF);
            color: white;
            text-align: center;
        }

        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }

        .cta p {
            margin-bottom: 2rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta .btn {
            background-color: white;
            color: #FF4D6D;
            font-size: 1.2rem;
            padding: 0.75rem 2rem;
        }

        .cta .btn:hover {
            background-color: var(--light-color);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
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

.nav-buttons {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  background: #ff3399;
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

.btn-secondary {
  background: transparent;
  border: 1px solid #ff3399;
  color: #ff3399;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bolder;
}

.btn-secondary:hover {
  background: rgba(74, 144, 226, 0.1);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  position: relative;
  width: 90%;
  max-width: 500px;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #ff6b6b;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.modal-content h3 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
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