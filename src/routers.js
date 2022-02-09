import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()


  //  Импортируем страницы
import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import Item from '@/pages/_itemAlias'
import NotFoundPage from '@/pages/notFound'


// настраиваем роутер
const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      // children: [
      //   {
      //     path: '/:itemAlias',
      //     name: 'itemAlias',
      //     component: Item
      //   },
      // ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },

    // Отрефакторить пути, чтобы заработала 404 страница
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item
    },

    {
      path: '/:CatchAll(.*)',
      // path:'/:pathMatch(.*)*',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default routers