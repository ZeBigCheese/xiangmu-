import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axios from './utils/request'
import Vant from 'vant';
import '../node_modules/vant/lib/index.css';



import './index.css'
var app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(Vant);
app.use(router).use(store).mount('#app')
