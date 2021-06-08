<template lang="html">
<section class="userregistrationform">
    <h1>User Registration Form</h1>
</section>
<div>
<div class="content-section implementation">
    <div class="card">
        <div class="p-fluid p-formgrid">
            <div class="p-fluid p-formgrid p-grid">
                <div class="p-field p-col-12 p-md-6">
                    <label for="firstname6">Firstname</label>
                    <InputText id="firstname6" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="lastname6">Lastname</label>
                    <InputText id="lastname6" type="text" />
                </div>
                <div class="p-field p-col-12">
                    <label for="address">Address</label>
                    <Textarea id="address" rows="4" />
                    </div>
                <div class="p-field p-col-12 p-md-6">
                    <label for="city">City</label>
                    <InputText id="city" type="text" />
                </div>
                <div class="p-field p-col-12 p-md-3">
                    <label for="state">State</label>
                    <Dropdown inputId="state" v-model="selectedState" :options="states" optionLabel="name" placeholder="Select" />
                </div>
                <div class="p-field p-col-12 p-md-3">
                    <label for="zip">Zip</label>
                    <InputText id="zip" type="text" />
                </div>
        </div>
           </div>
          </div>
           </div>
              </div>
</template>

<script lang="js">
export default {
    name: 'userregistrationform',
    props: [],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped>
.userregistrationform {
}
.p-formgroup-inline {
        .p-field {
            margin-bottom: 1em !important;
        }
    }
.layout-content .content-section.implementation > h3 {
    font-weight: 600;
}
textarea {
    resize: none;
}
</style>
