import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue"
import ComplexPage from "@/views/ComplexPage.vue"
import SimplePage from "@/views/SimplePage.vue"
import PiniaTest from "@/views/PiniaTest.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: "/", component: HomePage},
        {path: "/features/complex-page", component: ComplexPage},
        {path: "/features/simple-page", component: SimplePage},
        {path: "/features/status-management", component: PiniaTest},
    ]
})

export default router
