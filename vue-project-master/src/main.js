import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Database from '../database';
import { Status } from '../constants.js';
const app = createApp(App);
app.config.globalProperties.Database = Database
app.config.globalProperties.Status = Status
app.use(router).use().mount('#app');



