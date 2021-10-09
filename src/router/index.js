import Vue from 'vue'
import VueRouter from 'vue-router'
import dianyingRouter from "./dianying"
import yingyuanRouter from "./yingyuan"
import wodeRouter from "./wode"
import Error from "@/views/404"

Vue.use(VueRouter)

const routes = [
  dianyingRouter,
  yingyuanRouter,
  wodeRouter,
  {
    path:"/",//当上面所有的路由都匹配不上的时候，重定向到电影页面
    redirect:"/dianying"
  },
  {
    path:"*",//当用户随便输入一个地址的时候，会切换到404页面
    component:Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
