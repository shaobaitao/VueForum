import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../views/home'
import Login from '../views/Login'
import Register from "@/views/Register";
let router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },{
            path:'/home',
            component:Home
        },{
            path:'/login',
            component:Login
        },{
            path:'/register',
            component:Register
        }
    ]
})
export default router