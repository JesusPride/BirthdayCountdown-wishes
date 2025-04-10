<template>
  <div class="photo-gallery">
    <div class="gallery-container">
      <div 
        v-for="(image, index) in images" 
        :key="index"
        class="gallery-item"
        :class="{ active: currentIndex === index }"
      >
        <img :src="image.src" :alt="image.alt" @click="showImage(index)">
      </div>
    </div>
    
    <div v-if="showFullscreen" class="fullscreen-view" @click="closeFullscreen">
      <img :src="images[currentIndex].src" :alt="images[currentIndex].alt">
      <button class="close-btn" @click.stop="closeFullscreen">×</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoGallery',
  props: {
    images: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0,
      showFullscreen: false
    }
  },
  methods: {
    showImage(index) {
      this.currentIndex = index;
      this.showFullscreen = true;
    },
    closeFullscreen() {
      this.showFullscreen = false;
    }
  }
}
</script>

<style scoped>
.photo-gallery {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.gallery-item {
  cursor: pointer;
  transition: transform 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item:hover {
  transform: scale(1.05);
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}

.fullscreen-view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.fullscreen-view img {
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
}

.close-btn:hover {
  color: #ff6b6b;
}
</style> 