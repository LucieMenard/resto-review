import { createRouter, createWebHistory } from "vue-router";
import RestaurantListView from "@/views/RestaurantListView.vue";
import RestaurantDetailsView from "@/views/RestaurantDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "restaurant-list",
      component: RestaurantListView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/restaurant/:id",
      name: "restaurant-details",
      component: RestaurantDetailsView,
    },
  ],
});

export default router;
