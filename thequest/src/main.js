import './assets/main.css'
import './assets/hexcolors.scss';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'



import VueLazyload from 'vue-lazyload';

const app = createApp(App);
app.use(VueLazyload, {
  preLoad: 1.1,
  error: 'path/to/error-image.png',
  loading: 'path/to/loading-spinner.gif',
  attempt: 1
});

app.use(router)

app.mount('#app')