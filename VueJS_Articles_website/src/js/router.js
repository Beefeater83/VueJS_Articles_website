import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from './MainPage.vue'
import Contacts from './Contacts.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/home', component: MainPage, alias: '/' },
        { path: '/contacts', component: Contacts },
    ]
});