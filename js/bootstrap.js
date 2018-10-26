import Vue from 'vue';
import router from './router';
import Menu from '../components/menu.vue';
import Footer from '../components/footer.vue';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    router,
    components: {
        headerMenu: Menu,
        footerSection: Footer
    }
});