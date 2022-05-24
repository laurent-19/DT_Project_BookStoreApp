import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import AdminIndex from "./views/AdminIndex.vue";
import CreateUser from "./views/CreateUser.vue";
import CreateBook from "./views/CreateBook.vue";
import CreateOrder from "./views/CreateOrder.vue";
import Profile from "./views/Profile.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/",
      name: "login",
      components: { default: Login },
      props: {
        //header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/register",
      name: "register",
      components: { default: Register },
      props: {
        //header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/adminIndex",
      name: "adminIndex",
      components: { default: AdminIndex },
      props: {
        //header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/createUser",
      name: "createUser",
      components: { default: CreateUser },
      props: {
        //header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/createBook",
      name: "createBook",
      components: { default: CreateBook },
      props: {
        //header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/createOrder",
      name: "createOrder",
      components: { default: CreateOrder },
      props: {
        //header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
