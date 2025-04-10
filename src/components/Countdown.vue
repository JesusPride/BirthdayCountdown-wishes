<template>
  <div class="countdown-container">
    <div class="headline">
      <span class="birthday-emoji">✨</span>
      Get Ready for Esther's Big Day!
      <span class="birthday-emoji">✨</span>
    </div>

    <div id="birthdayDate">
      April 14<span class="blinking-dot">.....</span>
    </div>

    <div class="countdown-timer">
      <div class="time-block">
        <span class="number">{{ days }}</span>
        <span class="label">Days</span>
      </div>
      <div class="time-block">
        <span class="number">{{ hours }}</span>
        <span class="label">Hours</span>
      </div>
      <div class="time-block">
        <span class="number">{{ minutes }}</span>
        <span class="label">Minutes</span>
      </div>
      <div class="time-block">
        <span class="number">{{ seconds }}</span>
        <span class="label">Seconds</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Countdown',
  props: {
    birthday: {
      type: Date,
      required: true
    }
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: null
    }
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const diff = this.birthday - now;

      if (diff <= 0) {
        clearInterval(this.timer);
        this.$emit('birthday-reached');
        return;
      }

      this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }
  },
  mounted() {
    this.updateCountdown();
    this.timer = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
</script>

<style scoped>
.countdown-container {
  text-align: center;
  padding: 2rem 0;
}

.headline {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
}

.birthday-emoji {
  margin: 0 0.5rem;
}

#birthdayDate {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: white;
}

.countdown-timer {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.time-block {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  min-width: 100px;
}

.number {
  font-size: 2.5rem;
  font-weight: bold;
  display: block;
  color: white;
}

.label {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.blinking-dot {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style> 