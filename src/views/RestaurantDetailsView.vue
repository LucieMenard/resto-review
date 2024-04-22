<script setup>
import { ref, onMounted } from "vue";
import RestaurantService from "@/services/RestaurantService.js";

const restaurant = ref(null);
const props = defineProps({
  id: {
    required: true,
  },
});

onMounted(() => {
  RestaurantService.getRestaurant(props.id)
    .then((response) => {
      restaurant.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <div v-if="restaurant">
    <h2>{{ restaurant.title }}</h2>
    <p>{{ restaurant.description }}</p>
    <p>{{ restaurant.location }}</p>
    <span>
      Recommended : {{ restaurant.recommended }} | ever tried :
      {{ restaurant.tried }}</span
    >
  </div>
</template>

<style scoped></style>
