<script setup>
import { ref } from "vue";
import RestaurantCard from "@/components/RestaurantCard.vue";

const restaurant = ref([
  {
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
  },
  {
    id: 456,
    category: "europeen",
    title: "Satio",
    description: "Triple S.",
    tag: [],
    location: "Vasselot",
    date: "January 91, 2022",
    time: "12:00",
    tried: true,
    recommended: "Instagram",
  },
  {
    id: 789,
    category: "asian",
    title: "Table Rouge",
    description: "To have yakitori at home.",
    tag: [],
    location: "Online & ?",
    date: "February 28, 2022",
    time: "12:00",
    tried: true,
    recommended: "Audrey",
  },
]);
</script>

<template>
  <h1>Le temple du palais</h1>

  <div class="restaurants">
    <RestaurantCard
      v-for="resto in restaurant"
      :key="restaurant.id"
      :restaurant="resto" />
  </div>
</template>

<style scoped>
.restaurants {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
