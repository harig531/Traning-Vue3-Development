import { createApp } from 'vue'
import App from './App.vue'
import ConfirmationService from 'primevue/confirmationservice';

import router from './router/router'

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
import InputNumber from 'primevue/inputnumber';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Toolbar from 'primevue/toolbar';
import DataView from 'primevue/dataview';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import TabMenu from 'primevue/tabmenu';
import Textarea from 'primevue/textarea';
import Dialog from 'primevue/dialog';
import Chart from 'primevue/chart';
import AutoComplete from 'primevue/autocomplete';
//createApp(App).mount('#app')

const app = createApp(App)
app.use(PrimeVue, { inputStyle: 'filled' });

app.use(ToastService);
app.use(router);
app.use(ConfirmationService);
app.component('AutoComplete', AutoComplete);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('InputNumber', InputNumber);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('Toolbar', Toolbar);
app.component('DataView', DataView);
app.component('Toast', Toast)
app.component('Chart', Chart);
app.component('TabMenu', TabMenu);
app.component('Dialog', Dialog);
app.component('Textarea', Textarea);
app.directive("highlight", { //highlight is the name of directive
    beforeMount(el, binding) { //it is a component lifecycle function which is called implicitely whenever rendered or mounted on the container
        console.log('in highlight')
        el.style.background = binding
    }
});

app.directive("fontchange", { //highlight is the name of directive
    beforeMount(el) { //it is a component lifecycle function which is called implicitely whenever rendered or mounted on the container
        console.log('in fontchange')
        el.style = 'font-family:georgia,garamond,serif;font-size:16px;font-style:italic;';
    }
});


app.directive("tableBg", { //highlight is the name of directive
    beforeMount(el) { //it is a component lifecycle function which is called implicitely whenever rendered or mounted on the container
        console.log('in tableBg')
        el.style = 'background-color:#FFFFE0;';
    }
});

app.config.globalProperties.$filters = {
    currencyUSD(value) {
        return '$' + value
    },

    toUpper(value) {
        return value.toUpperCase();
    },

    CamleCase(value) {
        return value.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
    },

    Genderfilter(value) {
        if (!value)
            return "-";
        var isGender = value;
        if (isGender == 'M')
            return "Male";
        else
            return "FeMale";

    }



}


app.mount('#app');

