import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import First from "@/components/First"
import A from "@/components/A"
import B from "@/components/B"
import A1 from "@/components/A1"
import B1 from "@/components/B1"

Vue.use(Router)

export default new Router({
  //history模式
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'First',
      component: First,
      //children: [{}]
    }, {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: "/home",
      name: "Home",
      component: Home
    },{
      path: '/a',
      name: 'A',
      component: A,
      children: [{
        path: '/a1',
        name: 'A1',
        component: A1
      }]
    },{
       path: '/b',
       name: 'B',
       component: B
    },{
       path: '/b1',
       name: 'B1',
       component: B1
    }
  ]
})
