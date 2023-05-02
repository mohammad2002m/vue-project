<template>
      <div class="col-md">
        <label for=""> {{ title }} <span>*</span> </label>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :class="'form-control ' + classValue" :placeholder="title"  :disabled="isReadOnly"/>
        <label for=""> {{ validMsg }} </label>
      </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    placeholder: String,
    title: String,
    isReadOnly: Boolean,
    modelValue: String,
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
    direction: rtl;
  }
  input {
    margin-bottom: 5px;
  }
  span {
    color: red;
  }

</style>