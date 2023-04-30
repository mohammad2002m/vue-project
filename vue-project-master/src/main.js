import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Database from '../database';

const app = createApp(App);
app.config.globalProperties.Database = Database
app.use(router).use().mount('#app');



