import Home from '../components/home.vue';
import Blog from '../components/blog.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    }
];

export default routes;