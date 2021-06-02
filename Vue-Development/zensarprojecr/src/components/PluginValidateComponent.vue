<template lang="html">

  <Form @submit="onSubmit" :validation-schema="schema">
    <Field name="email" type="email" />
    <ErrorMessage name="email" />

    <Field name="password" type="password" />
    <ErrorMessage name="password" />

    <Button type="submit"  label="Submit" class="p-button-help" /> 
  </Form>

</template>

<script>
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {

   name: 'PluginValidateComponent',
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    });

    return {
      schema,
    };
  },
  methods: {
    onSubmit(values) {
      // Submit values to API...
      alert(JSON.stringify(values, null, 2));
    },
  },
};
</script>


<style scoped >
  .plugin-validate-component {

  }
</style>
