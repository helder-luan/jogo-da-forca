import { createApp } from 'vue'
import '@/css/global.css';
import App from './App.vue'
import { Vuex } from './store';

export const Vue = createApp(App).use(Vuex);
Vue.mount('#app')
