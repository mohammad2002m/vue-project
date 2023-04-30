<template>
      <!--
        :value="inputType == 'date' ? '2023-01-01' : ''"
      -->
      <div class="col-md">
        <label for=""> {{ title }} <span>*</span> </label>
        <select class="form-control" :disabled="isReadOnly">
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
    isReadOnly: Boolean
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
    margin-bottom: 3rem;
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