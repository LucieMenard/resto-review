<script setup>
import { ref, onMounted } from "vue";
import RestaurantCard from "@/components/RestaurantCard.vue";
import RestaurantService from "@/services/RestaurantService.js";

const restaurants = ref(null);

onMounted(() => {
  RestaurantService.getRestaurants()
    .then((response) => {
      restaurants.value = response.data;
      // console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <h1>Le temple du palais</h1>

  <div class="restaurants-list">
    <RestaurantCard
      v-for="r in restaurant"
      :key="restaurant.id"
      :restaurant="r" />
  </div>
</template>

<style scoped>
.restaurants-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
