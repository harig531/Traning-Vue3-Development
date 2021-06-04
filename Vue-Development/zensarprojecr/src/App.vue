<template>

<div>

 <router-link :to="{name:'Home'}">Home</router-link> ||
  <router-link :to="{name:'Day4'}">Employee List</router-link> ||
  <router-link :to="{name:'About'}">Json Employee List</router-link>
  ||  <router-link :to="{name:'PluginValidateComponent'}">Plugin Validate Component</router-link>
  ||  <router-link :to="{name:'watchcomponent'}">watch logger Componenet</router-link>
  ||  <router-link :to="{name:'chartcomponent'}">chart Componenet</router-link>

  
  <router-view></router-view>
</div>
   <Toast/>
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

export default {
  name: 'App',
  components: {
    // HelloWorld,singlepageapp,singlepageevent,EmployeeList
    //validation,PluginValidateComponent
   // jsoncommunication
    // ,employeewithbootstrap
    //watchcomponent
  //  day4
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
