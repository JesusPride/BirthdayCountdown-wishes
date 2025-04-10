<template>
  <canvas ref="confettiCanvas" class="confetti-canvas"></canvas>
</template>

<script>
import confetti from 'canvas-confetti';

export default {
  name: 'ConfettiAnimation',
  mounted() {
    this.initializeConfetti();
  },
  methods: {
    initializeConfetti() {
      const canvas = this.$refs.confettiCanvas;
      const myConfetti = confetti.create(canvas, {
        resize: true,
        useWorker: true
      });

      // Create a confetti burst
      myConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Create a continuous confetti shower
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        myConfetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        myConfetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
    }
  }
}
</script>

<style scoped>
.confetti-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}
</style> 