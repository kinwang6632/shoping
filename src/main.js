import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

//Vue.prototype.$axios = axios

const app =  createApp(App);
app.config.globalProperties.isOK = false
//app.prototype.$OK = false
app.use(store);
app.use(router);
app.directive('quantity', {
    // When the bound element is mounted into the DOM...
    mounted(el,binding) {
      // Focus the element
      el.value = binding.value
    }
  })

app.mount('#app');
// createApp(App).use(store).use(router).mount('#app')
