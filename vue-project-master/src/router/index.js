import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login/Login.vue";
import SignUp from "../components/SignUp/SignUp.vue";
import List from "../components/RequestsList/RequestsList.vue";
import RequestForm from "../components/RequestForm/RequestForm.vue";
import Notifications from "../components/RequestsList/Notifications.vue";
import ResetCheck from "../components/Login/emailCheck.vue";
import changePass from "../components/Login/changePassword.vue";
import Profile from "../components/Profile/profile.vue";

const routes = [
  {
    name: "Login",
    path: "/",
    params: true,
    component: Login,
  },
  {
    name: "Profile",
    path: "/Profile",
    params: true,
    component: Profile,
  },
  {
    name: "List",
    path: "/List",
    params: true,
    component: List,
  },
  {
    name: "changePass",
    path: "/changePass",
    params: true,
    component: changePass,
  },
  {
    name: "ResetCheck",
    path: "/ResetCheck",
    params: true,
    component: ResetCheck,
  },
  {
    name: "SignUp",
    path: "/SignUp",
    params: true,
    component: SignUp,
  },
  {
    name: "Notifications",
    path: "/Notifications",
    params: true,
    component: Notifications,
  },
  {
    name: "RequestForm",
    path: "/RequestForm",
    params: true,
    component: RequestForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
