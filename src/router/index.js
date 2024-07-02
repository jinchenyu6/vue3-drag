import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/test',
        component: () => import('@/views/test.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router