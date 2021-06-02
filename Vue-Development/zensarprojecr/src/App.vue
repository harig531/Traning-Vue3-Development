<template>
<div>
  <validation></validation>
  </div>
  <div>
    <PluginValidateComponent></PluginValidateComponent>
  
  </div>
  <div>
    <employeewithbootstrap></employeewithbootstrap>
     <!-- <chartcomponent></chartcomponent> -->
  </div>
<!-- <div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Zensar" name="hari Guntu"/>
</div>

<div>

    <validation></validation>
</div>
<div>
      <EmployeeList></EmployeeList>
</div>
<div>
  <singlepageapp></singlepageapp>
  
</div>
<div>

    <singlepageevent></singlepageevent>
    
</div> -->


</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import singlepageapp from './components/singlepageapp.vue'
// import singlepageevent from './components/singlepageevent.vue'
// import EmployeeList from './components/EmployeeList.vue'

// import validation from './components/validation.vue'
// import PluginValidateComponent from './components/PluginValidateComponent.vue'
//import chartcomponent from './components/chartcomponent.vue'

import employeewithbootstrap from './components/employeewithbootstrap.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,singlepageapp,singlepageevent,EmployeeList
    //validation,PluginValidateComponent
    employeewithbootstrap
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
