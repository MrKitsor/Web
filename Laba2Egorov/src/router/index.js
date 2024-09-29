import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/types',
    name: 'Types',
    component: () => import('@/views/TypesPage.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('@/views/CategoriesPage.vue'),
  },
  {
    path: '/type-edit/:id?',
    name: 'TypeEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/TypeEdit.vue'),
  },
  {
    path: '/category-edit/:id?',
    name: 'CategoryEdit',
    props: (route) => {
      return {
        id: route.params.id,
      }
    },
    component: () => import('@/views/CategoryEdit.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('@/views/TypesPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
