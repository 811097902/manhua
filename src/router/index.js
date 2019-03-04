import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'pages/Home'
import Rank from 'pages/rank/rank'
import Update from 'pages/update/update'
import Japan from 'pages/japan/japan'
import Search from 'pages/search/search'
import Login from 'pages/login/login'
import Err from 'pages/error/err'
import Register from 'pages/reg/register'
import First from 'pages/reg/first'
import Next from 'pages/reg/next'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/rank',
        component:Rank
    },
    {
        path:'/update',
        component:Update
    },
    {
        path:'/japan',
        component:Japan
    },
    {
        path:'/seek',
        component:Search
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register,
        redirect:'/register/first',
        children:[
            {
                path:'next',
                component:Next,
                name:'next'
            },
            {
                path:'first',
                component:First,
                name:'first'
            }
        ]
    },
    {
        path:'/error',
        component:Err
    },
    {
        path:'**',
        redirect:'/error'
    }
]

const router=new VueRouter({
    routes,
    mode:'history'
})

export default router