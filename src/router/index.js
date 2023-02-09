import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Member from '../views/Member.vue'
import Papers from '../views/Papers.vue'
import Patents from '../views/Patents.vue'
import Writings from '../views/Writings.vue'
import Soft from '../views/Soft.vue'
import Standards from '../views/Standards.vue'
import Prize from '../views/Prize.vue'
import DataCode from '../views/DataCode.vue'
import Photo from '../views/Photo.vue'
import Recruitment from '../views/Recruitment.vue'
import Main from '../views/Main.vue'
Vue.use(VueRouter)
//1.创建路由组件
//2.路由与组件映射

const routes = [
    //主路由
    {
        path: '/',
        component: Main,
        redirect: '/home',//重定向
        children: [
            //子路由
            { path: 'home', component: Home},
            { path: 'member', component: Member},
            { path: 'papers', component: Papers},
            { path: 'patents', component: Patents},
            { path: 'writings', component: Writings},
            { path: 'soft', component: Soft},
            { path: 'standards', component: Standards},
            { path: 'prize', component: Prize},
            { path: 'datacode', component: DataCode},
            { path: 'photo', component: Photo},
            { path: 'recruitment', component: Recruitment},
        ]
    }
]

//3.创建router实例
const router = new VueRouter({
    routes
})

export default router
