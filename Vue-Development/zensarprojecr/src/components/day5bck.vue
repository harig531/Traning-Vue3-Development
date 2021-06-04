
<template lang="html">

<div>
 
 
 
</div>

</template>

<script lang="js">
import { ref,watch } from "vue";
import axios from 'axios';

  export default  {
    name: 'day-5-bck',
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
          deleteUser(event){
       // var pkid = this.selectedProducts.id
         axios.delete('http://localhost:7000/users/' + event.index)
        .then((response)=>{
        console.log(response.data);
         this.getUsers();
      })
          },

    },
    computed: {

    }
}


</script>

<style scoped>
  .day-4 {

  }
</style>
