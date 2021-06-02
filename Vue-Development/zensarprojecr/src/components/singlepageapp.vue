<template lang="html">

  <section class="singlepageapp">
    <h1>singlepageapp Component</h1>
    <h2>  {{ firstname }}  </h2>
    <div v-html='vmessage'></div>
    <div v-html='hack'></div>
  </section>
  <!-- attribute binding -->

<div id="app">
  <p>
    <label for='terms'>
      <input id='terms' type='checkbox' v-model='terms'/> I accept terms!!!
    </label>
  </p>
  <button :disabled='isDisabled'>Send Form</button>
</div>

</template>

<script lang="js">

  export default  {
    name: 'singlepageapp',
    props: [],
    mounted () {

    },
    data () {
      return {
        firstname : " this is first value singlePA in one way binding",
        vmessage: '<b>love this session</b>',
        hack:`<a href='#' onClick="alert('hello vue')"> click on me</a>`,
        terms : true

      }
    },
    methods: {


    },
    computed: {
     

    }
}


</script>

<style scoped >
/* // <style scoped lang="scss"> */
  .singlepageapp {

  }
</style>
