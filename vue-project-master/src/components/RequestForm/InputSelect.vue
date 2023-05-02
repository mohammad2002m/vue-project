<template>
      <div class="col-md">
        <label for=""> {{ title }} <span>*</span> </label>
        <select :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :class="'form-control ' + classValue" :disabled="isReadOnly">
          <option  v-for="(option, index) in optionsList" :key="index" :value="option"> {{ option }} </option>
        </select>
        <label for=""> {{ validMsg }} </label>
      </div>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    placeholder: String,
    title: String,
    optionsList: Array,
    modelValue: String,
    isReadOnly: Boolean,
    classValue: String,
  },
  data() {
    return {
      validMsg: '',
      msgStyle: ''
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
  select {
    background-position: left 0.75rem center;
    padding-right: 0.57rem;
  }
  select:not(:focus) {
    color: #595c5f;
  }
  
  span {
    color: red;
  }


</style>