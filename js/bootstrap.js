import Vue from 'vue';
import Sidebar from '../components/sidebar.vue';

const app = new Vue({
    el: '#app',
    components: {
        sidebar: Sidebar
    }
});