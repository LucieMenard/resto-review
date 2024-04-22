<script setup>
// EventCard

import { ref } from "vue";

defineProps({
  restaurant: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="restaurant-card">
    <h2>{{ restaurant.title }}</h2>
    <p>{{ restaurant.description }}</p>
    <p>{{ restaurant.location }}</p>
    <span>
      Recommended : {{ restaurant.recommended }} | ever tried :
      {{ restaurant.tried }}</span
    >
  </div>
</template>

<style scoped>
.restaurant-card {
  padding: 20px;
  width: 350px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.restaurant-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
