<template>
      <div class="col-md">
        <label for=""> {{ title }} <span>*</span> </label>
        <input :type="type"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
         :class="'form-control ' + classValue"
         :placeholder="title"
         :disabled="isReadOnly"/>
        <label for=""> {{ validMsg }} </label>
      </div>
</template>

<script>
export default {
  name: 'FormComponent',
  props: {
    type: String,
    placeholder: String,
    modelValue: Date,
    title: String,
    isReadOnly: Boolean,
    classValue: String,
  },
  data() {
    return {
      validMsg: '',
    }
  },
  
}
</script>

<style scoped>
  label {
    margin-right: 5px;
    margin-bottom: 5px;
  }
  
  div {
    margin-bottom: 1rem;
  }
  input {
    margin-bottom: 5px;
  }
  span {
    color: red;
  }

</style>