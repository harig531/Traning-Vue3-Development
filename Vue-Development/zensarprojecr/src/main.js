import { createApp } from 'vue'
import App from './App.vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import 'primeflex/primeflex.css';

// import 'primeflex/src/_variables.css';
// import 'primeflex/src/_grid.css';
// import 'primeflex/src/_formlayour.css';
// import 'primeflex/src/_display.css';
// import 'primeflex/src/_text.css';
// import 'primeflex/src/flexbox/_flexbox.css';
// import 'primeflex/src/_spacing.css';
// import 'primeflex/src/_elevation.css';



import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';


//import Chart from 'primevue/chart';

//createApp(App).mount('#app')

const app = createApp(App)
app.use(PrimeVue,{inputStyle: 'filled'});
app.component('Button', Button);
app.component('InputText', InputText);
//app.component('Chart', Chart);

app.directive("highlight",{ //highlight is the name of directive
    beforeMount(el,binding){ //it is a component lifecycle function which is called implicitely whenever rendered or mounted on the container
        console.log('in highlight') 
        el.style.background = binding
    }
});

app.mount('#app');
