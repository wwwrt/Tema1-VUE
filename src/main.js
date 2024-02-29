import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "./pages/HomePage.vue"

const routes = [
    { path: '/', component: HomePage }
]

const router = createRouter({ 
    history: createWebHistory(), 
    routes 
});

const app = createApp(App);

app.use(createPinia());

app.use(router);

app.mount('#app');
