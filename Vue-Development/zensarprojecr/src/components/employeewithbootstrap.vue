<template lang="html">


<div class="">
  <h1>Employee Detais</h1>
<form>
    <div class="p-fluid p-grid">
    <label  for="firstname" style=" :10px" v-fontchange>Name</label>
    <div class="col-sm-10">
      <InputText type="text"  class="p-mb-2 p-d-block" placeholder="Name" v-model="newUser.name"  />
    </div>
  </div>
  <div class="p-fluid p-grid">
    <label class="col-sm-2 col-form-label font-weight-bold" v-fontchange>Age</label>
    <div class="col-sm-10">
      <InputNumber v-model="newUser.age" :max="150" />
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
<!-- v-tableBg -->
<div class="p-grid">
<table >
  

<div class="p-col-fixed" style="width:100px">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Location</th>
      <th scope="col" class="col-sm-2"></th>
      <th scope="col" class="col-sm-2"></th>
    </tr>
  </thead>
</div>
<div class="p-col">
  <tbody>
    <tr v-for="(user, index) in users" :key="index">
      
      <td scope="row">{{ user.id }}</td>
      <td>{{$filters.toUpper(user.name)}}</td>
      <td>{{ user.age }}</td>
      <td>{{ user.location }}</td>
      <td><Button icon="pi pi-check" class="p-button-rounded p-button-text" type="submit" @click.prevent="editUser(user)" /></td>
      <td><Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" type="submit"  @click.prevent="deleteUser(user.id)"></Button></td>
    </tr>
  </tbody>
</div>
</table>
</div>
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
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-image {
    width: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
}
  .employeewithbootstrap {

  }
</style>
