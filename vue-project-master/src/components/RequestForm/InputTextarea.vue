<template>
      <div class="col-md">
        <label for=""> {{ title }} <span>*</span> </label>
        <textarea :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="form-control" :placeholder="title" :disabled="isReadOnly" rows="8"> </textarea>
        <label for=""> {{ validMsg }} </label>
      </div>
</template>

<script>
export default {
  name: 'InputTextarea',
  props: {
    placeholder: String,
    title: String,
    isReadOnly: Boolean,
    modelValue: String,
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
    margin-bottom: 3rem;
    direction: rtl;
  }
  input {
    margin-bottom: 5px;
  }
  span {
    color: red;
  }

</style>