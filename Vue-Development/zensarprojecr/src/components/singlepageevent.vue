<template lang="html">

  <section class="singlepageevent">
    <h1>singlepageevent Component</h1>
    <!-- <h2> {{firstname}}</h2>
    <h2> {{lastname}}</h2>
    <h2> {{address}}</h2> -->
      <h1>{{mydetails()}}</h1>
    <button @click="mycompleteDetails">Click Me</button>
  </section>

</template>

<script lang="js">
 var _obj = { fname: "Raj", lname: "Singh", address: "Mumbai"}  
 export default  {
    name: 'singlepageevent',
    props: [],
    mounted () {

    },
    data () {
      // return {
      //   firstname : "amit",
      //    lastname  : "kumar",
      //    address    : "Mumbai"

      // }
      return _obj;
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
  .singlepageevent {

  }
</style>
