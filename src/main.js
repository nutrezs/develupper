import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
// ici on créer l'instance de l'application ,la configure et la monte c'est la voi à suivre et est indépendante de l'outil de regroupement-->