import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import CategoryContent from './components/category-content.vue';

const routes = [
    { name: 'category', path: '/category/:categoryId', component: CategoryContent, props: true }
];

Vue.use(VueRouter);

const router = new VueRouter({ routes });

let app = new Vue({ 
    router,
    render: h => h(App) 
});

app.$mount('#app');