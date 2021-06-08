<template>
<div class="p-shadow-9">

    <div>

        <TabMenu :model="items" />
       
       
    <div class="divpading">
        <router-view />
    </div>

    </div>
    <ConfirmDialog />

</div>

<Toast />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import singlepageapp from './components/singlepageapp.vue'
// import singlepageevent from './components/singlepageevent.vue'
// import EmployeeList from './components/EmployeeList.vue'

// import validation from './components/validation.vue'
// import PluginValidateComponent from './components/PluginValidateComponent.vue'
//import chartcomponent from './components/chartcomponent.vue'

// /import employeewithbootstrap from './components/employeewithbootstrap.vue'

//import jsoncommunication from './components/jsoncommunication.vue'
//import watchcomponent from './components/watchcomponent.vue'
//import day4 from './components/day4.vue'

import ConfirmDialog from 'primevue/confirmdialog';

export default {
    name: 'App',
    components: {
        // HelloWorld,singlepageapp,singlepageevent,EmployeeList
        //validation,PluginValidateComponent
        // jsoncommunication
        // ,employeewithbootstrap
        //watchcomponent
        //  day4
        ConfirmDialog

    },
    data() {
        return {
            items: [{
                    label: 'Home',
                    icon: 'pi pi-fw pi-home',
                    to: '/'
                },
                {
                    label: 'User',
                    icon: 'pi pi-fw pi-users',
                    to: '/Day4'
                },
                {
                    label: 'Watch',
                    icon: 'pi pi-fw pi-video',
                    to: '/watchcomponent'
                },
                {
                    label: 'Chart',
                    icon: 'pi pi-fw pi-chart-bar',
                    to: '/chartcomponent'
                },
                {
                    label: 'Status (Time Lines)',
                    icon: 'pi pi-fw pi-sitemap',
                    to: '/status'
                },
                {
                    label: 'Registraion Form',
                    icon: 'pi pi-fw pi-user-plus',
                    to: '/userregistrationform'
                },
                {
                    label: 'Settings',
                    icon: 'pi pi-fw pi-cog',
                    to: '/settings'
                }
            ]
        }
    }

}
</script>

<style>
#app {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;    margin-top: 0px;
}
.divpading {
  padding-top: 5px;
  padding-right: 40px;
  padding-bottom: 20px;
  padding-left: 80px;
}

</style>
