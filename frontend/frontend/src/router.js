import Vue from "vue"
import Router from "vue-router"
import SearchView from "./components/SearchView.vue"
import SearchViewErr from "./components/SearchViewErr.vue"
import Hello from "./components/Hello.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/searchView",
      name: "SearchView",
      component: SearchView,
    },
    {
      path:'/',
      name: "Hello",
      component : Hello,
    },
    {
      path:'/searchViewErr',
      name: "SearchViewErr",
      component : SearchViewErr
    }
  ]
})
