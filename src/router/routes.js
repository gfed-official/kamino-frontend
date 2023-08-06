import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import HomeLayout from "@/layout/home/HomeLayout.vue";

// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue"
import Register from "@/pages/Register.vue"

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";

const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/register",
        name: "register",
        component: Register,
      }
    ]
  },
  {
    path: "/dashboard",
    redirect: "/dashboard/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {
          authRequired: true
        }
      },
      {
        path: "profile",
        name: "profile",
        component: UserProfile,
        meta: {
          authRequired: true
        }
      }
    ]
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
