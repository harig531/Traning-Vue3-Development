
<template lang="html">





<div class="p-card">
  <h2  v-fontchange> Employee Form</h2>
    <form>
<div class="p-field p-grid">
    <label for="firstname" v-fontchange class="p-col-fixed" style="width:100px">First Name</label>
    <div class="p-col">
        <InputText  v-model="newUser.first_name"  id="firstname" type="text" />
    </div>
</div>
<div class="p-field p-grid" >
    <label for="lastname" class="p-col-fixed" style="width:100px">Last Name</label>
    <div class="p-col">
        <InputText  v-model="newUser.last_name" id="lastname" type="text" />
         <label for="lastname" v-if="islabeShow" class="p-col-fixed" style="width:100px">{{ newUser.last_name }}</label>
 </div> 
</div>

<div class="p-field p-grid">
    <label for="Email Id" class="p-col-fixed" style="width:100px">Email Id</label>
    <div class="p-col">
        <InputText  v-model="newUser.email" id="email" type="text" />
 </div>
</div>

<div style="align:'center'">
  <Button label="Create/Update" type="submit" icon="pi pi-check" iconPos="left" @click="addUser" style=" margin-right: 15px;" />
  <Button  type="submit"  label="Clear" class="p-button-help" icon="pi pi-times" @click="clearForm" />
</div>

</form>



  



  <div>
            <DataTable :value="users" responsiveLayout="scroll" breakpoint="960px" >
                <template #header>
                    Employee List
                </template>
                <Column field="id" header="id"></Column>   
                <Column  header="First Name">
                    <template #body="slotProps">
                        <span>{{$filters.CamleCase(slotProps.data.first_name)}}</span>
                    </template>
                </Column>
                 <Column  header="Last Name">
                    <template #body="slotProps">
                        <span>{{$filters.CamleCase(slotProps.data.last_name)}}</span>
                    </template>
                </Column>
                <Column field="email" header="EMail-Id"></Column>
                <Column>
                 <template #body="slotProps">
                <Button icon="pi pi-check" class="p-button-rounded p-button-text" type="submit" @click.prevent="editUser(slotProps.data)" tooltip="Edit" />
                <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" type="Delete" @click="deleteUser(slotProps.data.id)" tooltip="Delete" />
               </template>
               </Column>                
            </DataTable>
        </div>
</div>

</template>

<script lang="js">
import { ref,watch } from "vue";
import axios from 'axios';

  export default  {
    name: 'Day4',
    props: [],
    setup()
     {
       const search = ref("");
       watch(search,(newSearch,previousSearch)=>
       {
         console.log("old the value :  " + previousSearch  );
         console.log("Search the value :  " + newSearch );
       })
       return {
         search,
       }
    
     },
      created() {
      this.getUsers();
    },

    mounted () {

    },
    data () {
      return {
        users: null,
        editingRows: [],
        errorMsg: '',
        isShow:false,
        islabeShow:false,
        newUser: {id: "", first_name: "", last_name: "", email: ""}

      }
    },
    methods: {
       getUsers(){
      // get all data
      axios.get('http://localhost:7000/users/list')
      .then((response)=>{
        console.log(response.data);
        this.users = response.data;
        this.isShow=true;
  
      })
      .catch((error)=>{
        console.log(error);
        this.errorMsg = 'Error retriving data';
      })
      },
          deleteUser(id){
       // var pkid = this.selectedProducts.id
         axios.delete('http://localhost:7000/users/' + id)
        .then((response)=>{
            this.$toast.add({severity: 'error', summary:'Delete user!'});
        console.log(response.data);
         this.getUsers();
      })
          },
            clearForm(){
                //this.$toast.add({severity: 'info', summary:'clear'});
        this.newUser.id = "";
        this.newUser.first_name ="";
        this.newUser.last_name ="";
        this.newUser.email ="";
         this.getMaxId();
      
        
      },
       addUser(){
        if (this.newUser.first_name.trim()!='')     
        {
      
          const elementIndex = this.users.findIndex(element => element.id == this.newUser.id )
          if(elementIndex >= 0)
          {
            let userAdd = 
            {
              id: this.newUser.id,
              first_name: this.newUser.first_name,
              last_name: this.newUser.last_name,
              email: this.newUser.email
            }
             axios.put('http://localhost:7000/users/'+this.newUser.id,userAdd)
        .then((response)=>{
        console.log(response.data);
         this.$toast.add({severity: 'success', summary:'User Added!'});
      })

              //this.users[elementIndex] = userAdd;
          }
          else{

          let userAdd = {
          id: this.getMaxId(),
          first_name: this.newUser.first_name,
          last_name: this.newUser.last_name,
          email: this.newUser.email
          }
          console.log(userAdd);
           axios.post('http://localhost:7000/users',userAdd)
        .then((response)=>{
        console.log(response.data);
         this.$toast.add({severity: 'success', summary:'User Added!'});
      })

        
       
          }
          this.getUsers();
        }
        this.clearForm();    
       },
          getMaxId(){
        let max = 0;
        this.users.forEach(user => {
        if (user.id > max) {
        max = user.id;
         }
          });
        return parseInt(max) + 1;

      },
      editUser(user){
        this.islabeShow=true
        this.newUser.id = user.id;
        this.newUser.first_name = user.first_name;
        this.newUser.last_name = user.last_name;
        this.newUser.email = user.email;
      }


    },
    computed: {

    }
}


</script>

<style scoped>
table {
  border: 1px solid blue;
}
  .day-4 {

  }
</style>
