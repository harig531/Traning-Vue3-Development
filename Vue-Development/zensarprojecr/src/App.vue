<template>
<div>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Zensar" name="hari Guntu"/>
</div>
<div>
  <singlepageapp></singlepageapp>
  
</div>
<div>

    <singlepageevent></singlepageevent>
    
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import singlepageapp from './components/singlepageapp.vue'
import singlepageevent from './components/singlepageevent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,singlepageapp,singlepageevent
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
