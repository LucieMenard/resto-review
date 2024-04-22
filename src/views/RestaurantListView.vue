<script setup>
import { ref, onMounted } from "vue";
import RestaurantCard from "@/components/RestaurantCard.vue";
import RestaurantService from "@/services/RestaurantService.js";

const restaurants = ref(null);

const restoTest = ref({
  id: 123,
  category: "mexican",
  title: "Mexico",
  description: "A Mexican restaurant.",
  tag: [],
  location: "Baulieu",
  date: "January 28, 2022",
  time: "12:00",
  tried: false,
  recommended: "Flo",
});

onMounted(() => {
  RestaurantService.getRestaurants()
    .then((response) => {
      restaurants.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>

<template>
  <h1>Le temple du palais</h1>

  <div class="restaurants">
    <RestaurantCard
      v-for="resto in restaurant"
      :key="restaurant.id"
      :restaurant="resto" />
    <RestaurantCard :restaurant="restoTest" />
  </div>
</template>

<style scoped>
.restaurants {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
