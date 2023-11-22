import { h, resolveComponent } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

import DefaultLayout from "@/layouts/DefaultLayout";

const routes = [
  {
    path: "/",
    name: "خانه",
    component: DefaultLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "داشبورد",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue")
      },
      {
        path: "/user",
        name: "سامانه کارگزینی",
        component: {
          render() {
            return h(resolveComponent("router-view"));
          }
        },
        redirect: "#",
        children: [
          {
            path: "/user/create-user",
            name: "افزودن کاربر جدید",
            component: () => import("@/views/user/CreateUser.vue")
          },
          {
            path: "/user/user-list",
            name: "لیست کاربران",
            component: () => import("@/views/user/UserList.vue")
          }
        ]
      },
      {
        path: "/access",
        name: "دسترسی ها",
        component: {
          render() {
            return h(resolveComponent("router-view"));
          }
        },
        redirect: "#",
        children: [
          {
            path: "/access/create-access",
            name: "ایجاد دسترسی",
            component: () => import("@/views/access/CreateAccess.vue")
          },
          {
            path: "/access/access-list",
            name: "لیست دسترسی ها",
            component: () => import("@/views/access/AccessList.vue")
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  }
});

export default router;
