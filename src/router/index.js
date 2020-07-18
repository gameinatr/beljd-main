import Vue from "vue";
import VueRouter from "vue-router";
import EnterPassword from "../views/EnterPassword";
import PasswordChangedPopUp from "../views/PasswordChangedPopUp";
// import Recovery from '../views/Recovery'

Vue.use(VueRouter);
const routes = [
  {
    path: "/recovery",
    name: "EmailRecovery",
    meta: { layout: "empty" },
    component: () => import("../views/EmailRecovery.vue")
  },
  {
    path: "/menu",
    name: "Menu",
    meta: { layout: "empty" },
    component: () => import("../views/Menu.vue")
  },
  {
    path:"/menuform",
    name:"MenuForm",
    // meta:{layout: "main"},
    component:()=>import("../views/MenuForm.vue")
  },
  {
path: "/createform",
name:"CreateForm",
// meta:{layout:"main"},
component: ()=>import("../views/CreateForm.vue")
  },
  {
    path: "/createtable",
    name:"CreateTablePU2a",
    // meta:{layout:"main"},
    component: ()=>import("../views/CreateTablePU2a.vue")
      },
  {
    path: "/",
    name: "Login",
    meta: { layout: "empty" },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/enterpassword",
    name: "EnterPassword",
    component: EnterPassword
  },
  {
    path: "/passwordchangedpopup",
    name: "PasswordChangedPopUp",
    component: PasswordChangedPopUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
export default router;
