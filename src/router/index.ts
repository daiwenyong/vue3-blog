import Category from '@views/category/index.vue'
import CategoryInfo from '@views/categoryInfo/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const Home = { template: '<div>Home</div>' }
const routes = [
    { path: '/', component: Home },
    { path: '/category', name: 'category', component: Category },
    { path: '/category/info', name: 'categoryInfo', component: CategoryInfo, props: true },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})
export default router
