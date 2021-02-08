import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
      path: "/",
      redirect: "/home",
      component: () => import("@/views/Layout.vue"),
      children: [
          {
              path: "/home",
              name: "Home",
              component: () => import("../views/Home.vue")
          },
          {
              path: "/about",
              name: "About",
              component: () => import("../views/About.vue")
          },
          {
              path: "/posts",
              name: "posts",
              component: () => import("../views/PostsPage.vue")
          },
          {
              path: "/post",
              name: "post",
              component: () => import("../views/About.vue")
          },
          {
              path: "/new_post",
              name: "new_post",
              component: () => import("../views/About.vue")
          },
      ]
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
