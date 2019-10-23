import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import store from './store/index'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


