import Vue from 'vue';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Sidebar from '../components/sidebar.vue';
import Contents from '../components/contents.vue';

const app = new Vue({
    el: '#app',
    components: {
        sidebar: Sidebar,
        contents: Contents
    }
});