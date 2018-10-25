import Vue from 'vue';
import router from './router';
import Menu from '../components/menu.vue';

const app = new Vue({
    el: '#app',
    router,
    components: {
        headerMenu: Menu
    }
});