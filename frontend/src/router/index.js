import { createRouter, createWebHistory } from 'vue-router'
import Login from "../Views/Auth/Login.vue";
import Register from "../Views/Auth/Register.vue";
import DashBoard from "../Views/DashBoard.vue";
import ResetPassword from "../Views/Auth/ResetPassword.vue";

const guest = (to, from, next) => {
  if (!localStorage.getItem("token")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("token")) {
    return next();
  } else {
    return next("/login");
  }
};
const routes = [
  {
    path: "/login",
    name: "Login",
    beforeEnter: guest,
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: guest,
    component: Register,
  },
  {
    path: "/resetPassword/:token",
    name: "ResetPassword",
    component: ResetPassword,
    beforeEnter: guest,
    props: true
  },
  {
    path: "/",
    name: "DashBoard",
    beforeEnter: auth,
    component: DashBoard,
  }

  ]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
