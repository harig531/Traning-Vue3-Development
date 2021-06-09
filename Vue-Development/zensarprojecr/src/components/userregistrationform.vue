<template lang="html">
<div>
    <section class="userregistrationform">
        <h1 style=" text-align: center;">User Registration Form</h1>
    </section>

    <div class="content-section implementation">
        <div class="card p-p-6">
            <div class="p-fluid p-grid">

                <div class="p-col-12 p-md-4">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-envelope"></i>
                        </span>
                        <InputText id="Fulllname" placeholder="Full Name" type="text" />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-user"></i>
                        </span>
                        <InputText placeholder="Username" />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-eye-slash"></i>
                        </span>
                        <Password id="password" placeholder="Password" v-model="city" toggleMask />
                    </div>
                </div>
                <div class="p-col-12 p-md-4">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-envelope"></i>
                        </span>
                        <InputText id="EmailID" placeholder="Email Id" type="text" />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-calendar"></i>
                        </span>
                        <Calendar id="dateformat" placeholder="Date of birth" v-model="date2" dateFormat="dd-mm-yy" :monthNavigator="true" :yearNavigator="true" :yearRange="yearRange" />
                    </div>
                </div>

                <div class="p-col-12 p-md-4">
                    <div class="p-inputgroup">
                        <label for="city1">Gender : </label>
                        <div class="p-field-radiobutton">
                            <RadioButton id="male" name="gender" value="M" v-model="city" />
                            <label for="city1">Male</label>
                        </div>
                        <div class="p-field-radiobutton">
                            <RadioButton id="female" name="gender" value="F" v-model="city" />
                            <label for="city2">FeMale</label>
                        </div>
                        <div class="p-field-radiobutton">
                            <RadioButton id="others" name="gender" value="O" v-model="city" />
                            <label for="city2">Others</label>
                        </div>
                    </div>
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <label for="city">Country</label>
                    <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" :filter="true" placeholder="Select a Country" :showClear="true">
                        <template #value="slotProps">
                            <div class="country-item country-item-value" v-if="slotProps.value">
                                <!-- <img src="@/assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" width="17" /> -->
                                <div>{{slotProps.value.name}}</div>
                            </div>
                            <span v-else>
                                {{slotProps.placeholder}}
                            </span>
                        </template>
                        <template #option="slotProps">
                            <div class="country-item">
                               <!-- <img src="@/assets/images/flag_placeholder.png" :class="'flag flag-' + slotProps.option.code.toLowerCase()" width="17" /> -->
                                <div>{{slotProps.option.name}}</div>
                            </div>
                        </template>
                    </Dropdown>

                </div>
                <div class="p-field p-col-12 p-md-4">
                    <label for="city">City</label>
                    <InputText id="city" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <label for="state">State</label>
                    <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
                </div>
                <div class="p-field p-col-12 p-md-4">
                    <label for="zip">Zip</label>
                    <InputText id="zip" type="text" />
                </div>

                <div class="p-field p-col-12 p-md-8">
                    <label for="remaks">Remarks</label>
                    <Textarea id="remaks" rows="4" />
                    </div>
           </div>
          </div>
            <div class="p-field p-col-12 p-md-2 p-mx-auto ">
               <Button label="Save" class="p-button-success p-mr-2 p-mb-2"  />
               <Button label="Clear" class="p-button-help p-mr-2 p-mb-2" />
                </div>

 </div>
</div>
</template>

<script lang="js">
import axios from 'axios'
export default {
    name: 'userregistrationform',
    props: [],
    mounted() {

    

  this.getlistofcountry();

    },
    data() {

        return {
            date2: null,
            yearRange: (new Date().getFullYear() - 125) + ':' + (new Date().getFullYear()),
            city: null,
            selectedCountry:null,
            countries:[],
        }
    },
    methods: {

        getlistofcountry()
        {
            axios.get('data/countries.json')
            .then((response)=>{
        console.log(response.data.data);
        this.countries = response.data.data;

  
      })
            
            
           
        }

    },
    computed: {

    }
}
</script>

<style scoped >
.userregistrationform {}

.p-field {
    margin-bottom: 1em !important;
}

.layout-content .content-section.implementation>h3 {
    font-weight: 600;
}

textarea {
    resize: none;
}


</style>
