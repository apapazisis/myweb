import Vue from 'vue';
import Sidebar from '../components/sidebar.vue';
import Main from '../components/main.vue';

const app = new Vue({
    el: '#app',
    components: {
        sidebar: Sidebar,
        main: Main
    }
});