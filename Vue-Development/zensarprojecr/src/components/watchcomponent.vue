<template lang="html">

  <section class="watchcomponent">
    <h1>watchcomponent Component</h1>

    <input type="text" v-model="search" />
    {{search}}

    <Button   @click=" confirm1()" icon="pi pi-check" label="Confirm" />

  </section>

</template>

<script lang="js">
import { ref,watch } from "vue";
//import { useConfirm } from "primevue/useconfirm";




  export default  {
    name: 'watchcomponent',
    props: [],
    setup()
     {

      //  const confirm = useConfirm();
      //   confirm.require({
      //       message: 'Are you sure you want to proceed?',
      //       header: 'Confirmation',
      //       icon: 'pi pi-exclamation-triangle',
      //       accept: () => {
      //           //callback to execute when user confirms the action
      //       },
      //       reject: () => {
      //           //callback to execute when user rejects the action
      //       }
      //   });

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
    methods: {
      deleteConfirm() {
        //const confirm = useConfirm();
            this.$confirm.require.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                console.log("d");
                },
                reject: () => {
                    console.log("d");
                }
            });
        },
        confirm1() {
            this.$confirm.require({
                message: 'Are you sure you want to proceed?',
                header: 'Confirmation',
                icon: 'pi pi-exclamation-triangle',
                accept: () => {
                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});
                },
                reject: () => {
                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});
                }
            });
        }

    },
    computed: {

    }
}


</script>

<style scoped>
  .watchcomponent {

  }
</style>
