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
                            <!-- <img src="../assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.item.code.toLowerCase()" width="8" /> -->
                            <div>{{slotProps.item.name}}</div>
                        </div>
                    </template>
        </AutoComplete>
    </div>

    <br/>
    



</section>
</template>

<script lang="js">
import { ref, watch,onMounted  } from "vue";
// /import axios from 'axios';
import CountryService from '@/service/CountryService';

//import { useConfirm } from "primevue/useconfirm";

export default {
    name: 'watchcomponent',
    props: [],
    setup() {

  onMounted(() => {
            countryService.value.getCountries().then(data => countries.value = data);
        })
        const countries=  ref();
        const filteredCountries=ref();
        const selectedCountry1= ref();
        const countryService = ref(new CountryService());
        const search = ref("");
        watch(search, (newSearch, previousSearch) => {
            console.log("old the value :  " + previousSearch);
            console.log("Search the value :  " + newSearch);
        })
        return {
            search,countryService,countries,filteredCountries,selectedCountry1
        }

    },
    data() {
        return {
 
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

        //    this.countryService.value.getCountries()
        //         .then((response) => {
        //             console.log(response.data);
        //             this.countries = response.data;

        //         })

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
