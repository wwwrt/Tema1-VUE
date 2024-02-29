<script setup>

defineEmits(['topRated', 'popular', 'newest', 'price'])

defineProps({
  sortSens: String,
  sortActive: Number,
  required: true
})
</script>

<template>
  <div>
    Sort By:
    <div>
      <button @click="$emit('topRated')">Top Rated
        <span v-if="sortActive === 1">
          <i v-if="sortSens === 'ASC'" class="bi bi-arrow-up-right"></i>
        <i v-else class="bi bi-arrow-down-left"></i></span></button>
        
      <button @click="$emit('popular')">Popular
        <span v-if="sortActive === 2">
          <i v-if="sortSens === 'ASC'" class="bi bi-arrow-up-right"></i>
        <i v-else class="bi bi-arrow-down-left"></i></span></button>
        
      <button @click="$emit('newest')">Newest
        <span v-if="sortActive === 3">
          <i v-if="sortSens === 'ASC'" class="bi bi-arrow-up-right"></i>
        <i v-else class="bi bi-arrow-down-left"></i></span></button>
        
      <button @click="$emit('price')">Price
        <span v-if="sortActive === 4">
          <i v-if="sortSens === 'ASC'" class="bi bi-arrow-up-right"></i>
        <i v-else class="bi bi-arrow-down-left"></i></span></button>
        
    </div>
  </div>
</template>