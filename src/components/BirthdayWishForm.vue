<template>
  <div class="wish-form">
    <h3 class="mb-4">Leave a Birthday Wish for Esther</h3>
    
    <div class="form-group">
      <input 
        type="text" 
        class="form-control mb-3" 
        v-model="wish.name" 
        placeholder="Your Name"
        :disabled="isSubmitting"
      >
      <textarea 
        class="form-control mb-3" 
        v-model="wish.message" 
        rows="3" 
        placeholder="Your Birthday Message"
        :disabled="isSubmitting"
      ></textarea>
      
      <button 
        class="btn btn-primary" 
        @click="submitWish" 
        :disabled="isSubmitting || !isFormValid"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Wish' }}
      </button>
    </div>

    <div v-if="errorMessage" class="alert alert-danger mt-3">
      {{ errorMessage }}
    </div>
    
    <div v-if="successMessage" class="alert alert-success mt-3">
      {{ successMessage }}
    </div>
  </div>
</template>

<script>
import { api } from '../services/api'

export default {
  name: 'BirthdayWishForm',
  data() {
    return {
      wish: {
        name: '',
        message: ''
      },
      isSubmitting: false,
      errorMessage: '',
      successMessage: ''
    }
  },
  computed: {
    isFormValid() {
      return this.wish.message.trim().length > 0
    }
  },
  methods: {
    async submitWish() {
      if (!this.isFormValid) return
      
      this.isSubmitting = true
      this.errorMessage = ''
      this.successMessage = ''
      
      try {
        const uniqueRoute = localStorage.getItem('uniqueRoute')
        if (!uniqueRoute) {
          throw new Error('Unique route not found')
        }

        const response = await api.submitWish(uniqueRoute, {
          name: this.wish.name.trim() || 'Anonymous',
          message: this.wish.message.trim()
        })

        if (response.success) {
          this.successMessage = 'Your wish has been sent successfully!'
          this.wish.name = ''
          this.wish.message = ''
          this.$emit('wish-submitted')
        } else {
          this.errorMessage = response.message || 'Failed to send wish. Please try again.'
        }
      } catch (error) {
        console.error('Error submitting wish:', error)
        this.errorMessage = error.message === 'Failed to fetch' 
          ? 'Unable to connect to the server. Please check your internet connection.'
          : 'An error occurred while sending your wish. Please try again.'
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.wish-form {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
}

.form-control {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.75rem;
  border-radius: 8px;
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.form-control:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  color: white;
  box-shadow: none;
}

.btn-primary {
  background: #4a90e2;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #357abd;
  transform: translateY(-2px);
}

.btn-primary:disabled {
  background: #6c757d;
  cursor: not-allowed;
  transform: none;
}

.alert {
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.alert-danger {
  background-color: rgba(220, 53, 69, 0.1);
  border: 1px solid rgba(220, 53, 69, 0.2);
  color: #dc3545;
}

.alert-success {
  background-color: rgba(40, 167, 69, 0.1);
  border: 1px solid rgba(40, 167, 69, 0.2);
  color: #28a745;
}
</style> 