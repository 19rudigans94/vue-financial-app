import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import '/src/style.css';

const app = createApp(App);

// Load state from localStorage if it exists
const savedState = JSON.parse(localStorage.getItem('financial_app_state'));
if (savedState) {
    store.replaceState(savedState);
}

// Save state to localStorage on every mutation
store.subscribe((mutation, state) => {
    localStorage.setItem('financial_app_state', JSON.stringify(state));
});

app.use(store);

app.mount('#app');
