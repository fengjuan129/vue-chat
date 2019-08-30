import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/view/login/Login'
const Register = ()=>import('@/view/login/Register')
const Home = () =>import ('@/view/Home')
const ChatList = ()=>import('@/view/ChatList/ChatList')
const MailList = ()=>import('@/view/MailList/MailList')
const Me = ()=>import('@/view/Me/Me')
const Find = ()=>import('@/view/Find')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
    ,
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/ChatList',
          name: 'ChatList',
          component: ChatList
        },
        {
          path: '/MailList',
          name: 'MailList',
          component: MailList
        }
        ,
        {
          path: '/Find',
          name: 'Find',
          component: Find
        },
        {
          path: '/Me',
          name: 'Me',
          component: Me
        }
      ]
    }

  ]
})
