<template lang="html">

  <section class="user">
    <h1>user Component</h1>
    <h1>The user id is {{ $route.params.id }} </h1>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'User',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped >
  .user {

  }
</style>
