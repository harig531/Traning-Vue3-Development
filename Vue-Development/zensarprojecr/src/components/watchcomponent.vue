<template lang="html">
<section class="watchcomponent">
    <h1>watchcomponent Component</h1>
    <div>
        <input type="text" v-model="search" />
        {{search}}
    </div>
    <!-- <AutoComplete v-model="selectedCountry1" @complete="searchCountry($event)" :suggestions="filteredCountries" field="name" /> -->
    <br />
    <div>
        <Button @click=" confirm1()" icon="pi pi-check" label="Confirm" />
    </div>

    <!-- <AutoComplete v-model="selectedCountry1" @complete="searchCountry($event)" :suggestions="filteredCountries" field="name" /> -->
    <br />
    <div>
        <AutoComplete v-model="selectedCountry1" :suggestions="filteredCountries" @complete="searchCountry($event)" :dropdown="true" field="name" forceSelection>
              <template #item="slotProps">
                        <div class="country-item">
                            <img src="../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.item.code.toLowerCase()" width="8" />
                            <div>{{slotProps.item.name}}</div>
                        </div>
                    </template>
        </AutoComplete>
    </div>

    <br/>
    



</section>
</template>

<script lang="js">
import { ref, watch } from "vue";
import axios from 'axios'
//import { useConfirm } from "primevue/useconfirm";

export default {
    name: 'watchcomponent',
    props: [],
    mounted() {
        this.getCountries();
    },
    setup() {

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
        watch(search, (newSearch, previousSearch) => {
            console.log("old the value :  " + previousSearch);
            console.log("Search the value :  " + newSearch);
        })
        return {
            search,
        }

    },
    data() {
        return {
            countries: null,
            filteredCountries: null,
            selectedCountry1: null
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
                    this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
                }
            });
        },

        getCountries() {

            axios.get('http://localhost:7000/countries/list')
                .then((response) => {
                    console.log(response.data);
                    this.countries = response.data;

                })

        },
        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.filteredCountries = [...this.countries];
                } else {
                    this.filteredCountries = this.countries.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },

    },
    computed: {

    }
}
</script>

<style scoped>
.watchcomponent {}
</style>
