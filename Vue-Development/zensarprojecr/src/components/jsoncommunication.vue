<template lang="html">

   <section class="fetch-component">
     <h1> Employee Json Result </h1>

      <p>{{ $filters.currencyUSD(20) }}</p>
     <p>  {{$filters.toUpper('hari')}} </p>
    <Button @click.prevent="getUsers">Fetch user details</Button>
  </section>
 <div v-if='isShow'>
  <div class="card">
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
      <td>{{$filters.toUpper(user.first_name)}}</td>
      <td>{{ user.last_name }}</td>
      <td>{{ user.email }}</td>
    </tr>
  </tbody>
</div>
</table>
</div>
    <!-- <Toolbar class="p-mb-4">
                <template #left>
                    <Button label="New" icon="pi pi-plus" class="p-button-success p-mr-2"  />
                    <Button label="Delete" icon="pi pi-trash" class="p-button-danger" />
                </template>

    </Toolbar> -->

    <DataTable :value="users"  stripedRows responsiveLayout="scroll" v-model:selection="selectedProducts" dataKey="id"  >
      <template #header>
                    <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
						<h5 class="p-mb-2 p-m-md-0 p-as-md-center">Employee List</h5>
						<span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText  placeholder="Search..." />
                        </span>
					</div>
                </template>
            <Column field="id" header="First Name" style="min-width:1rem"></Column>
            <Column field="first_name" header="First Name"></Column>
            <Column field="last_name" header="Last Name"></Column>
           <Column  field="email" header="Email"></Column>
           
           <Column  field="id" style="min-width:1rem">
                    <template #body>
                     <Button icon="pi pi-check" class="p-button-rounded p-button-text" type="submit" tooltip="Edit" />
                     <Button icon="pi pi-times" class="p-button-rounded p-button-danger p-button-text" type="Delete" @click.prevent="deleteUser(id)" tooltip="Delete" />
                    </template>
                </Column>


        </DataTable>



        

</div>
</div>
</template>

<script lang="js">
import axios from 'axios';
// import { ref } from 'vue';

  export default  {
    name: 'jsoncommunication',
    props: [],
   originalRows: null,
    //  setup() {


    //     const products = ref();

    //      axios.get('http://localhost:7000/users/list')
    //   .then((response)=>{
    //     console.log(response.data);
    //     this.products = response.data;
    //     this.isShow=true;
    //   })


    //     return { products }
    // },

    mounted () {

    },
    data () {
      return {
        users: null,
        editingRows: [],
        errorMsg: '',
        isShow:false,
        selectedProducts : null
      }
    },
    methods: {
      //Implement all axios methods
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
        console.log(response.data);
         this.getUsers();
      })
      .catch((error)=>{
        console.log(error);
        this.errorMsg = 'Error retriving data';
      })
      },

      onRowEditInit(event) {
        axios.delete('http://localhost:7000/users' ,{...this.users[event.index]})
            //this.originalRows[event.index] = {...this.users[event.index]};
            //  axios.delete('http://localhost:7000/users/' + event.index)
        },
        onRowEditCancel(event) {
            this.users[event.index] = this.originalRows[event.index];
             
        },
        

    },
    computed: {

    }
   
}


</script>

<style scoped>
  .jsoncommunication {

  }
</style>
