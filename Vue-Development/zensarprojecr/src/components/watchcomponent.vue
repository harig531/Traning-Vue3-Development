<template lang="html">

  <section class="watchcomponent">
    <h1>watchcomponent Component</h1>

    <input type="text" v-model="search" />
    {{search}}
  </section>

</template>

<script lang="js">
import { ref,watch } from "vue";

  export default  {
    name: 'watchcomponent',
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
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .watchcomponent {

  }
</style>
