<template lang="html">

  <section class="test-component-1">
    <h1>{{firstname}}</h1>
    <h1>{{lastname}}</h1>
    <h1>{{address}}</h1>
    <h1>{{mydetails()}}</h1>
    <button @click="mycompleteDetails">Click Me</button>


     <div class="container">
        <h3 class="p-3 text-center">Vue 3 - Display a list of items with v-for</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.firstName}} {{user.lastName}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                </tr>
            </tbody>
        </table>
    </div>    

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
