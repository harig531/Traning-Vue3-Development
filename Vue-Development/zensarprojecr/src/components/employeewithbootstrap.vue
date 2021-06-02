<template lang="html">







<div class="">
  <h1 class="title has-text-centered">Employee Detais</h1>
<form>
    <div class="p-fluid p-grid">
    <label  for="firstname" style=" :10px">Name</label>
    <div class="col-sm-10">
      <InputText type="text"  class="p-mb-2 p-d-block" placeholder="Name" v-model="newUser.name"  />
    </div>
  </div>
  <div class="p-fluid p-grid">
    <label class="col-sm-2 col-form-label font-weight-bold">Age</label>
    <div class="col-sm-10">
      <InputText type="text"  class="p-mb-2 p-d-block" placeholder="Age" v-model="newUser.age" />
    </div>
  </div>
  <div class="p-fluid p-grid">
    <label class="p-d-block">Location</label>
    <div class="col-sm-10">
      <InputText type="text"  icon="pi pi-search" class="p-button-rounded p-button-success p-d-none p-d-md-inline-flex"  placeholder="Location" v-model="newUser.location" />
    </div>
  </div>  
 <div class="p-fluid p-grid">
  <span class="p-buttonset">
    <Button  type="submit"  label="Save" icon="pi pi-check"  @click.prevent="addUser" />
    <Button  type="submit"  label="Clear" icon="pi pi-times" @click.prevent="clearForm" />
</span>
</div>

</form>

<br />
<br />
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Location</th>
      <th scope="col" class="col-sm-2">Edit</th>
      <th scope="col" class="col-sm-2">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(user, index) in users" :key="index">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.name }}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.location }}</td>
      <td><button type="submit" class="btn btn-warning" @click.prevent="editUser(user)">Edit</button></td>
      <td><button type="submit" class="btn btn-danger" @click.prevent="deleteUser(user.id)">Delete</button></td>
    </tr>
  </tbody>
</table>
</div>

</template>

<script lang="js">

  export default  {
    name: 'employeewithbootstrap',
    props: [],
    mounted () {

    },
    data () {
      return {
        users: [],
        newUser: {id: "", name: "", age: "", location: ""}
      }
    },
    methods: {
      addUser(){
        if ( this.newUser.name.trim() !="" &&
        this.newUser.age.trim() !="" &&
        this.newUser.location.trim() !="")     
        {
          const elementIndex = this.users.findIndex(element => element.id == this.newUser.id )
          if(elementIndex >= 0)
          {
            let userAdd = 
            {
              id: this.newUser.id,
              name: this.newUser.name,
              age: this.newUser.age,
              location: this.newUser.location
            }
              this.users[elementIndex] = userAdd;
          }
          else{

          let userAdd = {
          id: this.getMaxId(),
          name: this.newUser.name,
          age: this.newUser.age,
          location: this.newUser.location
          }
          this.users.push(userAdd);
          }
        }
        this.clearForm();    
      },
      editUser(user){
        this.newUser.id = user.id;
        this.newUser.name = user.name;
        this.newUser.age = user.age;
        this.newUser.location = user.location;
      },
      deleteUser(id){
        let userPostDelete = this.users.filter(x => {
            return x.id != id;
        })
        this.users = userPostDelete;
      },
      clearForm(){
        this.newUser.id = "";
        this.newUser.name ="";
        this.newUser.age ="";
        this.newUser.location ="";
        this.getMaxId();
      },
      getMaxId(){
        let max = 0;
        this.users.forEach(user => {
        if (user.id > max) {
        max = user.id;
         }
          });
        return parseInt(max) + 1;

      }

    },

    computed: {

    }
}


</script>

<style scoped>
  .employeewithbootstrap {

  }
</style>
