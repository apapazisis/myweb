import Vue from 'vue'
import Router from 'vue-router';
import Routes from './routes';

Vue.use(Router);

export default new Router({
    // mode: 'history', // Fix the urls by removing sharp symbol
    routes: Routes
});
