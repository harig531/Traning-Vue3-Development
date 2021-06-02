<template lang="html">

  <section class="test-component-1">
    <h1>{{firstname}}</h1>
    <h1>{{lastname}}</h1>
    <h1>{{address}}</h1>
    <h1>{{mydetails()}}</h1>
    <button @click="mycompleteDetails">Click Me</button>

   

  </section>

</template>

<script lang="js">
  var _obj = { fname: "Raj", lname: "Singh", address: "Mumbai"}
  export default  {
    name: 'TestEventComponent',
    props: [],
    mounted () {

    },
    data () {
      // return {
      //   // firstname : "amit",
      //   // lastname  : "kumar",
      //   // address    : "Mumbai"
      // }
      return _obj
    },
    methods: {
      mydetails : function() {
         return "I am "+this.$data.fname +" "+ this.$data.lname +" "+ this.$data.address;
      },
       mycompleteDetails() {
          alert('Hello ' + this.$data.fname + '!' +this.$data.lname +" "+ this.$data.address);
      }
    },
    computed: {

    }
}


</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
  .test-component-1 {

  }
</style>
