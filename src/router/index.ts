import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage.vue"
import ExamplePage from "@/views/ExamplePage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: "/", component: HomePage},
        {path: "/example-page", component: ExamplePage}
    ]
})

export default router
