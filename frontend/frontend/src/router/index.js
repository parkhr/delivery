import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/hihi',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
