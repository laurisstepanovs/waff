import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
      path: "/",
      redirect: "/home",
      component: () => import("@/views/Layout.vue"),
      children: [
          {
              path: "/home",
              name: "home",
              component: () => import("../views/Home.vue")
          },
          {
              path: "/home/:sec1",
              name: "sec1",
              component: () => import("../views/Home.vue")
          },
          {
              path: "/home/:sec1/:sec2",
              name: "sec2",
              component: () => import("../views/Home.vue")
          },
          {
              path: "/home/:sec1/:sec2/:sec3",
              name: "sec3",
              component: () => import("../views/Home.vue")
          },
          {
              path: "/home/:sec1/:sec2/:sec3/:sec4",
              name: "sec4",
              component: () => import("../views/Home.vue")
          },
          {
              path: "/about",
              name: "About",
              component: () => import("../views/About.vue")
          },
          {
              path: "/posts/:section",
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
              component: () => import("../views/NewPost.vue")
          },
          {
              path: "/posts/:section/:post_id",
              name: "post_page",
              component: () => import("../views/PostPage.vue")
          },
      ]
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue")
  },
    {
        path: "/landing",
        name: "landing",
        component: () => import("../views/test/Landing.vue")
    },
    {
        path: "/landing2",
        name: "landing2",
        component: () => import("../views/test/Landing2.vue")
    },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
