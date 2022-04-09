import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),// historique des routes
  routes: [
    {
      path: '/', /*chemin de la route*/
      name: 'home', /* nom de la route*/
      component:() => import('../components/Home.vue')
    },
    {
      path: '/posts', /*chemin de route*/
      name: 'posts',/*nom de la route*/
      component:() => import('../components/Posts.vue')
    },
    {
      path: '/user',
      name: 'user',
      component:() => import('../components/User.vue')
    },
    {
      path: '/post/:id', // parametre dynamique avec une variable que la library récupere ce parametre dans son code et correspondant à l'id d'une route d'une ressource particuliere pour etre utilisé( le routeur recupère la chaine de caractère associée à l'id)
      name: 'post',// static
      component:() => import('../components/Post.vue') // route paramètrique
    
      
    },
    {
      path: '/bitcoin', 
      name: 'bitcoin',
      component:() => import('../components/Bitcoin.vue') 
    
      
    },
  ]
})

export default router
