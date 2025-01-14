import { createRouter, createWebHistory} from "vue-router";


const router = createRouter( {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'layout',
            component: () => import('../layout/Layout.vue'),
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: () => import('../view/HomeView.vue'),
                },
                {
                    path: 'database',
                    name: 'Database',
                    component: () => import('../view/DataBase.vue'),
                },
                {
                    path: 'forum',
                    name: 'Forum',
                    component: () => import('../view/Forum.vue'),
                },
                {
                    path: 'detail',
                    name: 'Detail',
                    component: () => import('../view/Detail.vue'),
                }
            ]
        }
    ]
})

export default router