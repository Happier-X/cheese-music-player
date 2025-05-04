import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/song",
  },
  {
    path: "/song",
    component: () => import("../views/song/index.vue"),
  },
  {
    path: "/album",
    component: () => import("../views/album/index.vue"),
  },
  {
    path: "/artist",
    component: () => import("../views/artist/index.vue"),
  },
  {
    path: "/songList",
    component: () => import("../views/songList/index.vue"),
  },
  {
    path: "/setting",
    component: () => import("../views/setting/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
