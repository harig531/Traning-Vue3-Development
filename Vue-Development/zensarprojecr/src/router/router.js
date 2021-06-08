import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/Home.vue";
//import About from "@/views/About.vue";
import User from "@/views/User.vue";
import NotFound from "@/views/NotFound.vue";
import Day4 from "@/components/day4.vue";
import employeewithbootstrap from "@/components/employeewithbootstrap.vue";
import PluginValidateComponent from "@/components/PluginValidateComponent.vue";
import watchcomponent from "@/components/watchcomponent.vue";
import chartcomponent from "@/components/ChartComponent/Chart.vue";
import status from "@/components/status.vue";
import userregistrationform from "@/components/userregistrationform.vue"

// define all the route rules here
const routes = [

                {
                    path : "/", 
                    name : "Home",
                    component: Home
                },
                {
                    path : "/Day4", 
                    name : "Day4",
                    component: Day4
                }
                ,
                {
                    path : "/About", 
                    name : "About",
                    component: employeewithbootstrap
                },
                {
                    path : "/PluginValidateComponent", 
                    name : "PluginValidateComponent",
                    component: PluginValidateComponent
                },
                {
                    path : "/watchcomponent", 
                    name : "watchcomponent",
                    component: watchcomponent
                },
                {
                    path : "/chartcomponent", 
                    name : "chartcomponent",
                    component: chartcomponent
                },
                {
                    path : "/User/:id", 
                    name : "User",
                    component: User
                },
                {
                    path : "/status", 
                    name : "status",
                    component: status
                },
                {
                    path : "/userregistrationform", 
                    name : "userregistrationform",
                    component: userregistrationform
                },
                {
                    path : "/:catchAll(.*)",  // This is basically Regex expresssion in vue which will map all unrealistic routes and route to not found component
                    component: NotFound
                },

];

// register all the routes in create router method
const router = createRouter({
    history : createWebHistory(), // will manage the browser history if we click back/forward button
    routes,
});

export default router;