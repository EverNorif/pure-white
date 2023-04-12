import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue"
import ComplexPage from "@/views/ComplexPage.vue"
import SimplePage from "@/views/SimplePage.vue"
import PiniaTestPage from "@/views/PiniaTestPage.vue"
import MessagePage from "@/views/MessagePage.vue"
import AxiosTestPage from "@/views/AxiosTestPage.vue"
import UniFeaturePage from "@/views/UniFeaturePage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: "/", component: HomePage},
        {path: "/uniFeature", component: UniFeaturePage},
        {path: "/features/complex-page", component: ComplexPage},
        {path: "/features/simple-page", component: SimplePage},
        {path: "/features/status-management", component: PiniaTestPage},
        {path: "/features/message", component: MessagePage},
        {path: "/features/axios", component: AxiosTestPage},
    ]
})

export default router
