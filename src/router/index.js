import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditProject from "../views/EditProject.vue";
import AddProject from "../views/AddProject.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/editproject/:id",
    name: "EditProject",
    component: EditProject,
    props: true,
  },
  {
    path: "/addproject",
    name: "addProject",
    component: AddProject,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
