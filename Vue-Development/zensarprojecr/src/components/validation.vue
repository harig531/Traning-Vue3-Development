<template lang="html">

 <form id="app" @submit="checkForm" action="/something" method="post">

  
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>
  </p>
  
  <p>
    <label for="name" v-highlight='Red'>Name</label>
    <input type="text" name="name" id="name" v-model="name">
  </p>

  <p>
    <label for="age" v-highlight='Red'>Age</label>
    <input type="number" name="age" id="age" v-model="age" min="0">
  </p>

  <p>
    <label for="movie" v-highlight='Red'>Favorite Movie</label>
    <select name="movie" id="movie" v-model="movie">
      <option>Star Wars</option>
      <option>Vanilla Sky</option>
      <option>Atomic Blonde</option>
    </select>
  </p>
<p>
  <input type="submit" value="Submit">
</p>
</form>

</template>

<script lang="js">

  export default  {
    name: 'validation',
    props: [],
    mounted () {

    },
    data () {
       return {
        errors:[],
        name:null,
        age:null,
        movie:null
      }
    },
    methods: {
       checkForm:function(e) 
      {
      if(this.name && this.age) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.age) this.errors.push("Age required.");
      e.preventDefault();
      }

    },
    computed: {

    }
}


</script>

<style scoped >
  .validation {

  }
</style>
