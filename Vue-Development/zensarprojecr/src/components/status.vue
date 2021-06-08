<template lang="html">

  <section class="status">
    <h1>status Component</h1>
  </section>





  <div class="float-child">
  
  
 <div >
                <h5>Opposite Content</h5>
                <Timeline :value="events1">
                    <template #opposite="slotProps">
                        <small class="p-text-secondary">{{slotProps.item.date}}</small>
                    </template>
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </Timeline>
 </div>



  </div>
  
  <div class="float-child">
          <div class="card">
                <h5>Alternate Align</h5>
                <Timeline :value="events1" align="alternate">
                    <template #content="slotProps">
                        {{slotProps.item.status}}
                    </template>
                </Timeline>
            </div>

  </div>
  




</template>

<script lang="js">

  export default  {
    name: 'status',
    props: [],
    mounted () {

    },
    data () {
      return {
        events1: [
                {status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg'},
                {status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7'},
                {status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800'},
                {status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B'}
            ],
            events2: [
                "2020", "2021", "2022", "2023"
            ]

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped>
  .status {

  }
  .float-container {
    padding: 20px;
}

.float-child {
    width: 50%;
    float: left;
    padding: 20px;

}  

</style>
