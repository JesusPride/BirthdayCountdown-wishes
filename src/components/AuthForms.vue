<template>
  <div class="auth-forms">
    <div class="form-container">
      <div class="form-header">
        <button 
          :class="{ active: isLogin }" 
          @click="switchToLogin"
        >
          Login
        </button>
        <button 
          :class="{ active: !isLogin }" 
          @click="switchToRegister"
        >
          Register
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="auth-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="formData.email" 
            :class="{ 'error': errors.email }"
            @blur="validateEmail"
            placeholder="Enter your email"
          >
          <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="formData.password" 
              :class="{ 'error': errors.password }"
              @blur="validatePassword"
              placeholder="Enter your password"
            >
            <button 
              type="button" 
              class="toggle-password" 
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '👁️' : '👁️‍🗨️' }}
            </button>
          </div>
          <div v-if="!isLogin" class="password-strength">
            <div 
              v-for="(requirement, index) in passwordRequirements" 
              :key="index"
              :class="{ 'met': requirement.met }"
            >
              {{ requirement.text }}
            </div>
          </div>
          <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
        </div>

        <div v-if="!isLogin" class="form-group">
          <label for="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            v-model="formData.name" 
            :class="{ 'error': errors.name }"
            @blur="validateName"
            placeholder="Enter your full name"
          >
          <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
        </div>

        <div v-if="!isLogin" class="form-group">
          <label for="dob">Date of Birth</label>
          <input 
            type="date" 
            id="dob" 
            v-model="formData.dob" 
            :class="{ 'error': errors.dob }"
            @blur="validateDob"
            :max="maxDate"
          >
          <span v-if="errors.dob" class="error-message">{{ errors.dob }}</span>
        </div>

        <div v-if="errorMessage" class="error-message main-error">
          {{ errorMessage }}
        </div>

        <button 
          type="submit" 
          class="submit-btn"
          :disabled="isSubmitting || !isFormValid"
        >
          <span v-if="isSubmitting" class="spinner"></span>
          {{ isLogin ? 'Login' : 'Register' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthForms',
  data() {
    return {
      isLogin: true,
      showPassword: false,
      isSubmitting: false,
      errorMessage: '',
      formData: {
        email: '',
        password: '',
        name: '',
        dob: ''
      },
      errors: {
        email: '',
        password: '',
        name: '',
        dob: ''
      }
    }
  },
  computed: {
    maxDate() {
      const today = new Date();
      return today.toISOString().split('T')[0];
    },
    passwordRequirements() {
      if (this.isLogin) return [];
      
      const password = this.formData.password;
      return [
        { text: 'At least 8 characters', met: password.length >= 8 },
        { text: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
        { text: 'Contains lowercase letter', met: /[a-z]/.test(password) },
        { text: 'Contains number', met: /[0-9]/.test(password) },
        { text: 'Contains special character', met: /[!@#$%^&*]/.test(password) }
      ];
    },
    isFormValid() {
      if (this.isLogin) {
        return this.formData.email && this.formData.password && 
               !this.errors.email && !this.errors.password;
      } else {
        return this.formData.email && this.formData.password && 
               this.formData.name && this.formData.dob &&
               !this.errors.email && !this.errors.password &&
               !this.errors.name && !this.errors.dob &&
               this.passwordRequirements.every(req => req.met);
      }
    }
  },
  methods: {
    switchToLogin() {
      this.isLogin = true;
      this.clearErrors();
    },
    switchToRegister() {
      this.isLogin = false;
      this.clearErrors();
    },
    clearErrors() {
      this.errors = {
        email: '',
        password: '',
        name: '',
        dob: ''
      };
      this.errorMessage = '';
    },
    validateEmail() {
      const email = this.formData.email;
      if (!email) {
        this.errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.errors.email = 'Please enter a valid email address';
      } else {
        this.errors.email = '';
      }
    },
    validatePassword() {
      const password = this.formData.password;
      if (!password) {
        this.errors.password = 'Password is required';
      } else if (!this.isLogin && !this.passwordRequirements.every(req => req.met)) {
        this.errors.password = 'Password does not meet requirements';
      } else {
        this.errors.password = '';
      }
    },
    validateName() {
      const name = this.formData.name;
      if (!name) {
        this.errors.name = 'Name is required';
      } else if (name.length < 2) {
        this.errors.name = 'Name must be at least 2 characters';
      } else {
        this.errors.name = '';
      }
    },
    validateDob() {
      const dob = this.formData.dob;
      if (!dob) {
        this.errors.dob = 'Date of birth is required';
      } else {
        this.errors.dob = '';
      }
    },
    async handleSubmit() {
      if (!this.isFormValid) return;
      
      this.isSubmitting = true;
      this.errorMessage = '';
      
      try {
        if (this.isLogin) {
          this.$emit('login', this.formData);
        } else {
          this.$emit('register', this.formData);
        }
      } catch (error) {
        this.errorMessage = error.message || 'An error occurred. Please try again.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.auth-forms {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

.form-header {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.form-header button {
  flex: 1;
  padding: 0.75rem;
  border: none;
  background: transparent;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.form-header button.active {
  border-bottom-color: #4a90e2;
  color: #4a90e2;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: white;
  font-size: 0.9rem;
}

.form-group input {
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
}

.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-group input[type="date"] {
  padding: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

.form-group input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1);
  cursor: pointer;
}

.submit-btn {
  background: #4a90e2;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: #357abd;
}

.password-input {
  position: relative;
  width: 100%;
}

.password-input input {
  width: 100%;
  padding-right: 2.5rem; /* Make space for the eye icon */
}

.toggle-password {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
}

.toggle-password:hover {
  color: white;
}

.password-strength {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

.password-strength div {
  color: #ff6b6b;
  margin: 0.2rem 0;
}

.password-strength div.met {
  color: #4caf50;
}

.error-message {
  color: #ff6b6b;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

.main-error {
  text-align: center;
  margin: 1rem 0;
  font-size: 1rem;
}

.error {
  border-color: #ff6b6b !important;
}

.spinner {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border: 2px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style> 