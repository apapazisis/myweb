import Vue from 'vue';

const app = new Vue({
    el: '#app',
    router,
    components: {
        sidebar: SidebarComponent,
        topbar: TopbarComponent
    }
});