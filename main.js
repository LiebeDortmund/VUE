import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; // 引入 store

const app = createApp(App);
app.use(router).use(store); // 添加路由和 store

app.mount('#app');