<template>
  <img src="../../assets/hebron.png" class="mx-auto d-block responsive-img" alt="Responsive image"
    style="width: 200px;" />
  <div class="container col-xl-9 p-5 gx-5 shadow-sm rounded box">
    <span class="form-title"> نموذج طلب إجازة </span>

    <FormSectionTitle title="المعلومات الشخصية" />

    <InputText v-model="name" title="الاسم الكامل" :isReadOnly="formReadOnly" />

    <div class="row gx-5">
      <InputText v-model="department" title="الدائرة الإدارية" :isReadOnly="formReadOnly" />
      <InputNumber v-model="phoneNumber" title="رقم الهاتف" :isReadOnly="formReadOnly" />
    </div>

    <FormSectionTitle title="تفاصيل الإجازة" />

    <div class="row gx-5">
      <InputSelect v-model="vacationType" title="نوع الإجازة" :optionsList="vacationTypesArray"
        :isReadOnly="formReadOnly" />
      <InputSelect v-model="inOrOut" title="داخل/خارج البلاد" :optionsList="inOrOutArray" :isReadOnly="formReadOnly" />
    </div>

    <div class="row gx-5">
      <InputDate v-model="fromDate" title="من تاريخ" :isReadOnly="formReadOnly" />
      <InputDate v-model="toDate" title="إلى تاريخ" :isReadOnly="formReadOnly" />
    </div>

    <InputTextarea v-model="excuse" inputType="textarea" title="سبب الإجازة" :isReadOnly="formReadOnly" />

    <div style="text-align: center">
      <button class="btn btn-success px-4 py-2" @click="SubmitButton">إرسال</button>
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
import { inOrOutArray, vacationTypesArray } from '../../../constants.js'
import moment from 'moment';
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
  data() {
    return {
      inOrOutArray: inOrOutArray,
      vacationTypesArray: vacationTypesArray,
      formReadOnly: false,
      name: '',
      phoneNumber: '',
      fromDate: moment().format('YYYY-MM-DD').toString(),
      toDate: moment().format('YYYY-MM-DD').toString(),
      excuse: '',
      vacationType: 'سنوية',
      department: '',
      inOrOut: 'داخل البلاد',
    };
  },
  mounted() {
    if (this.$route.query.userId) {
      console.log(this.$route.query.userId);
      
    }
    else {
      console.log('shanap');
    }
  },
  methods: {
    doSomething() {
      console.log(this.name)
      console.log(this.phoneNumber)
      console.log(this.fromDate)
      console.log(this.toDate)
      console.log(this.excuse)
      console.log(this.vacationType)
      console.log(this.department)
      console.log(this.inOrOut)
      console.log('')
    },
    SubmitButton() {

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