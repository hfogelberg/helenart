import VueRouter from "vue-router";
import Index from "./components/Index";
import Login from "./components/Login";
import Callback from "./components/Callback.vue";
import Admin from "./components/Admin.vue";
import AddArtwork from "./components/AddArtwork.vue";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: "/callback/google", component: Callback },
    { path: "/admin", component: Admin },
    { path: "/admin/create", component: AddArtwork }
  ]
});

export default router;
