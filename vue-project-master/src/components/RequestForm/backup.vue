<template>
  <img src="../../assets/hebron.png" class="mx-auto d-block responsive-img" alt="Responsive image"
    style="width: 200px;" />
  <div class="container col-xl-9 p-5 gx-5 shadow-sm rounded box">
    <span class="form-title"> نموذج طلب إجازة </span>

    <FormSectionTitle title="المعلومات الشخصية" />

    <InputText v-model="v$.fullName.$model" title="الاسم الكامل" :isReadOnly="formReadOnly" />

    <div class="row gx-5">
      <InputText v-model="department" title="الدائرة الإدارية" :isReadOnly="formReadOnly" />
      <InputNumber v-model="phoneNumber" title="رقم الهاتف" :isReadOnly="formReadOnly" />
    </div>

    <FormSectionTitle title="تفاصيل الإجازة" />

    <div class="row gx-5">
      <InputSelect v-model="vacationType" title="نوع الإجازة" :optionsList="vacationTypesArray" :isReadOnly="formReadOnly" />
      <InputSelect v-model="inOrOut" title="داخل/خارج البلاد" :optionsList="inOrOutArray" :isReadOnly="formReadOnly" />
    </div>

    <div class="row gx-5">
      <InputDate v-model="fromDate" title="من تاريخ" :isReadOnly="formReadOnly" />
      <InputDate v-model="toDate" title="إلى تاريخ" :isReadOnly="formReadOnly" />
    </div>

    <InputTextarea v-model="excuse" inputType="textarea" title="سبب الإجازة" :isReadOnly="formReadOnly" />

    <div style="text-align: center">
      <button class="btn btn-success px-4 py-2" @click="sendRequest">إرسال</button>
    </div>
  </div>
  <Copyright title="حقوق الطبع والنشر محفوظة" />
</template>

<script>
import Copyright from "./Copyright.vue";
import FormSectionTitle from "./FormSectionTitle.vue";
import InputText from "./InputText.vue";
import InputNumber from "./InputNumber.vue";
import InputSelect from "./InputSelect.vue";
import InputDate from "./InputDate.vue";
import InputTextarea from "./InputTextarea.vue";
// import { inOrOutArray, vacationTypesArray } from '../../../constants.js'
// import moment from 'moment';
import { useVuelidate } from '@vuelidate/core'
import { required , email } from '@vuelidate/validators'
export default {
  name: "RequestForm",
  components: {
    Copyright,
    FormSectionTitle,
    InputText,
    InputTextarea,
    InputNumber,
    InputSelect,
    InputDate,
  },
  setup() {
    return { v$: useVuelidate()}
  },
  data() {
    return {
      fullName: '',
      /*
      phoneNumber: '',
      fromDate: moment().format('YYYY-MM-DD').toString(),
      toDate: moment().format('YYYY-MM-DD').toString(),
      excuse: '',
      vacationType: 'سنوية',
      department: '',
      inOrOut: 'داخل البلاد',
      inOrOutArray: inOrOutArray,
      vacationTypesArray: vacationTypesArray,
      formReadOnly: false,
      */
    };
  },
  validations() {
    return {
      fullName: {required , email},
    }
  },
  mounted() {
    /*
    if (this.$route.query.userId) {
      console.log(this.$route.query.userId);
    } else {
      console.log('shanap');
    }
    */
  },
  methods: {
    sendRequest() {
      console.log(this.fullName)
      console.log(this.v$.fullName.$errors);
      console.log(this.v$.fullName.$dirty);
    },
  },
};
</script>

<style scoped>
div {
  direction: rtl;
}

.form-title {
  display: block;
  text-align: center;
  font-size: 22px;
  margin-bottom: 3rem;
}

.box {
  background-color: white;
  margin-bottom: 50px;
}
</style>
