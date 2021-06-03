<template>

<div>
  <watchcomponent> </watchcomponent>

</div>

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
import watchcomponent from './components/watchcomponent.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,singlepageapp,singlepageevent,EmployeeList
    //validation,PluginValidateComponent
   // jsoncommunication
    // ,employeewithbootstrap
    watchcomponent
    
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
