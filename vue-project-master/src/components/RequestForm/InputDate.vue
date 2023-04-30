<template>
      <div class="col-md">
        <label for=""> {{ title }} <span>*</span> </label>
        <input type="date" v-model="userInput" class="form-control" :placeholder="title"  :disabled="isReadOnly"/>
        <label for=""> {{ validMsg }} </label>
      </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'InputDate',
  props: {
    placeholder: String,
    title: String,
    isReadOnly: Boolean
  },
  data() {
    return {
      userInput: moment(new Date()).format('YYYY-MM-DD'),
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