import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '../views/home'
import Login from '../views/Login'
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
        }
    ]
})
export default router