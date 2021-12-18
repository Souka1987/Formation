import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    // children: [{
    //   path: "",
    //   component: () => import("../components/Footer.vue")
    // }]
  },
  {
    path: "/products",
    name: "products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Products.vue")
  },
  {
    path: "/energetix",
    name: "Energetix",
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Energetix.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue"),
    // children: [{
    //   path: 'products',
    //   component: () => import('../components/admin/ProductsList.vue'),
    //   props: {
    //     title: 'Products'
    //   }
    // }]
  },
  {
    path: "*",
    component: () => import("../views/Error404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;