
<template lang="html">





<div class="p-card">

  <h2  v-fontchange> Employee Form</h2>
    <!-- <form>
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

</form> -->



  


<div class="content-section introduction">
  <div  class="card">

    <Toolbar class="p-mb-4">
                    <template #left>
                        <Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2" @click="openNew " />
                        <Button label="Delete" icon="pi pi-trash" class="p-button-danger"  />
                    </template>

                </Toolbar>

            <DataTable :value="users" responsiveLayout="scroll" breakpoint="960px" >
                <template #header>
                    Employee List
                </template>
                <Column field="id" header="id"></Column>   
                <Column field="userId" header="User Name"></Column>
                <Column  header="Full Name">
                    <template #body="slotProps">
                        <span>{{$filters.CamleCase(slotProps.data.fullName)}}</span>
                    </template>
                </Column>
                <Column field="emailId" header="EMail-Id"></Column>
                <Column  header="Gender">
                    <template #body="slotProps">
                        <span>{{$filters.Genderfilter(slotProps.data.gender)}}</span>
                    </template>
                </Column>
                 <Column  header="Location">
                    <template #body="slotProps">
                        <span>{{$filters.CamleCase(slotProps.data.location)}}</span>
                    </template>
                </Column>                
                <Column>
                 <template #body="slotProps">
                <Button icon="pi pi-check" class="p-button-rounded p-button-text" type="submit" @click.prevent="editUser(slotProps.data)" tooltip="Edit" />
                <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" type="Delete" @click="deleteUser(slotProps.data.id)" tooltip="Delete" />
               </template>
               </Column>                
            </DataTable>
        </div>

         <Dialog v-model:visible="productDialog" :style="{width: '450px'}" header="User Registration Form" :modal="true" class="p-fluid">
            <div class="p-field">
                <label for="userId">User Name</label>
               <InputText  v-model="newUserAdd.userId" id="userId" type="text" />
            </div>
             <div class="p-field">
                <label for="name">Full Name</label>
                 <InputText  v-model="newUserAdd.fullName" id="name" type="text" />
            </div>
            <div class="p-field">
                <label for="emailId">Email Id</label>
                 <InputText  v-model="newUserAdd.emailId" id="emailId" type="text" />
            </div>
            <div class="p-field">
                <label for="password">Password</label>
                 <InputText  v-model="newUserAdd.password" type="password" id="password" />
            </div>
            <div class="p-field">
                <label for="Remarks">Remarks</label>
                <Textarea id="Remarks" v-model="newUserAdd.remarks" rows="3" cols="20" />
            </div>
            <template #footer>
                <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog"/>
                <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveUser" />
            </template>
            
        </Dialog>

      
 </div>
</div>


  

</template>

<script lang="js">
import { ref,watch } from "vue";
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
  export default  {
    name: 'Day4',
    props: [],
    setup()
     {
        

       const search = ref("");
        const submitted = ref(false);
        const products = ref();
        const productDialog = ref(false);
        const product = ref({});
         const toast = useToast();
        const newUserAdd= ref({id: "", userId: "", fullName: "",password:"", emailId: "",gender:"M",location:"",remarks:"",age:"", dateOfBirth:"2019-01-01"});
       watch(search,(newSearch,previousSearch)=>
       {
         console.log("old the value :  " + previousSearch  );
         console.log("Search the value :  " + newSearch );
       });
      const openNew = () => {
            product.value = {};
            submitted.value = false;
            productDialog.value = true;
        };
         const hideDialog = () => {
            productDialog.value = false;
            submitted.value = false;
        };
         const saveUser = () => {
           submitted.value = true;
           if (newUserAdd.value.fullName.trim()!='')     
        {
           console.log("enterrr");
              let userAdd = {  
                id:0,       
          userId: newUserAdd.value.userId,
          fullName: newUserAdd.value.fullName,
          password: newUserAdd.value.password,
           emailId: newUserAdd.value.emailId,
            gender: newUserAdd.value.gender,           
          remarks: newUserAdd.value.remarks,
          location: newUserAdd.value.location,
          age: 10,
         dateOfBirth: newUserAdd.value.dateOfBirth
          }
          
          console.log(userAdd);
           axios.post('http://localhost:9788/api/User',userAdd)
        .then((response)=>{
        console.log(response.data);
        productDialog.value = false;

        newUserAdd.value = {};
         
        toast.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        // this.$toast.add({severity: 'success', summary:'User Added!',life: 3000});
      })
          
         
        }
         };

         
       return {
         search,openNew,products, productDialog,product,hideDialog,saveUser,newUserAdd
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
        BaseURL:'http://localhost:9788/api/User/',
        newUser: {id: "", userId: "", fullName: "",password:"", emailId: "",gender:"M",location:"",remarks:"",age:"", dateOfBirth:"2019-01-01"}

      }
    },
    methods: {
       getUsers(){
      // get all data
      axios.get(this.BaseURL)
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

            
         


        this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    axios.delete(this.BaseURL + id)
                    .then((response)=>{
                   this.$toast.add({severity: 'error', summary:'Delete user!',life: 3000});
                   console.log(response.data);
                    this.getUsers();
                    });                   
                    this.getUsers();
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Cancelled', detail:'You have Cancelled', life: 3000});
                }
            });

          },
            clearForm(){
                //this.$toast.add({severity: 'info', summary:'clear'});
        // this.newUser.id = "";
        // this.newUser.first_name ="";
        // this.newUser.last_name ="";
        // this.newUser.email ="";
        //  this.getMaxId();
      
        
      },
       addUser(){
         
        if (this.newUser.fullName.trim()!='')     
        {
           console.log("enterrr");
              let userAdd = {  
                id:0,       
          userId: this.newUser.userId,
          fullName: this.newUser.fullName,
          password: this.newUser.password,
           emailId: this.newUser.emailId,
            gender: this.newUser.gender,           
          remarks: this.newUser.remarks,
          location: this.newUser.location,
          age: 10,
         dateOfBirth: this.newUser.dateOfBirth
          }
          
          console.log(userAdd);
           axios.post('http://localhost:9788/api/User',userAdd)
        .then((response)=>{
        console.log(response.data);
         this.$toast.add({severity: 'success', summary:'User Added!',life: 3000});
      })
      // this.productDialog.value = false;
          this.submitted.value = true;
          this.getUsers();
        }
          
       } ,
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
      },


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
