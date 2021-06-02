<template lang="html">

  <section class="employee-list">
    <h1>employee-list Component</h1>


    <div class="container">
 
    <div id="visa">
    <h1>Vue Visa Application</h1>
    <form>
      <label for="firstName">First Name :</label>
      <input type="text" required>
      <br>
      <label for="lastName">Last Name :</label>
      <input type="text" required>
      <br>
      <label for="email">Email :</label>
      <input type="text"  required>
      <br>
      <label for="role">Role :</label>
      <input type="text"  required>

     <br><br>
      <button>Add Employee</button>
      <br>
  
    </form>
</div>

    </div>
    
     <div class="container">
        <h3 class="p-3 text-center">Vue 3 - Display a list of items with v-for</h3>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{user.firstName}} {{user.lastName}}</td>
                    <td>{{user.email}}</td>
                    <td>{{user.role}}</td>
                    <td> <button text='delete' > Delete </button></td>
                    <td> <button text='Update' >   Update </button></td>
                </tr>
            </tbody>
        </table>
    </div> 

  </section>

</template>

<script lang="js">

  export default  {
    name: 'employee-list',
    props: [],
    mounted () {

    },
    data () {
      return {

         users: [{ firstName: 'Hari', lastName : 'Guntu', email : 'hariguntu@gmail.com',role : 'Admin' },
                 { firstName: 'Guntu', lastName : 'ABC', email : 'ABC@gmail.com',role : 'CBS' },
                 { firstName: 'Giti', lastName : 'CBS', email : 'CBS@gmail.com',role : 'Giti' }
         
                ]

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .employee-list {

  }
</style>
