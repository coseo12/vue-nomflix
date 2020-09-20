import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/tv",
    name: "tv",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TvView.vue")
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchView.vue")
  },
  {
    path: "/movie/:id",
    name: "movieDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailView.vue")
  },
  {
    path: "/show/:id",
    name: "showDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailView.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
