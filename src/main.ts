import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import elementPlugin from './plugins/element-plugin'
import './styles/index.scss'
createApp(App).use(router).use(store, key).use(elementPlugin).mount('#app')
