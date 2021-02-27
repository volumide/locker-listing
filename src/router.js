import { createRouter, createWebHistory } from 'vue-router'
import Hero from './components/Hero'
import Rent from './components/Rent'
const routes = [
    {
        path: '/',
        component: Hero,
    },
    {
        path: '/rent',
        component: Rent,
    },
]

const route = createRouter({
    history: createWebHistory(),
    routes,
})

export default route