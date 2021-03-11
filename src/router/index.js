import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {
            path:'/',
            component:()=>import("@/views/home.vue")
        },{
            path:'/home',
            component:()=>import("@/views/home.vue")
        },{
            path:'/login',
            component:()=>import("@/views/Login.vue")
        },{
            path:'/register',
            component:()=>import("@/views/Register.vue")
        },{
            path:'/userInfo/:id',
            component:()=>import("@/views/userInfo.vue")
        }
    ]
})
export default router