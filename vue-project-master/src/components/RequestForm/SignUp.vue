<template>
  <TopNavigationBar number="4" />
  <div class="container col-xl-9 p-5 gx-5  rounded box">
    <span class="form-title"> إنشاء حساب </span>

    <InputText v-model="v$.fullName.$model" :classValue="classValue(v$.fullName.$dirty , v$.fullName.$error)" title="الاسم الكامل" :isReadOnly="formReadOnly" />
    <InputText v-model="v$.fullName.$model" :classValue="classValue(v$.fullName.$dirty , v$.fullName.$error)" title="اسم المستخدم" :isReadOnly="formReadOnly" />
    <InputText v-model="v$.fullName.$model" :classValue="classValue(v$.fullName.$dirty , v$.fullName.$error)" title="البريد الإلكتروني" :isReadOnly="formReadOnly" />

    <div class="row gx-5">
      <InputText v-model="v$.fullName.$model" :classValue="classValue(v$.fullName.$dirty , v$.fullName.$error)" title="كلمة المرور" :isReadOnly="formReadOnly" />
      <InputText v-model="v$.fullName.$model" :classValue="classValue(v$.fullName.$dirty , v$.fullName.$error)" title="تأكيد كلمة المرور" :isReadOnly="formReadOnly" />
    </div>

    <div style="text-align: left">
      <button class="btn btn-success px-4 py-2 my-4" @click="sendRequest">إرسال</button>
    </div>
  </div>

  <Copyright title="حقوق الطبع والنشر محفوظة" />
</template>

<script>
import Copyright from "./Copyright.vue";
import InputText from "./InputText.vue";
import TopNavigationBar from "./TopNavigationBar.vue";
import { inOrOutArray, vacationTypesArray } from '../../../constants.js'
import moment from 'moment';
import { useVuelidate } from '@vuelidate/core'
import { required , maxLength , minLength , minValue , between } from '@vuelidate/validators'
export default {
  name: "RequestForm",
  components: {
    Copyright,
    InputText,
    TopNavigationBar,
  },
  setup() {
    return { v$: useVuelidate()}
  },


  data() {
    return {
      fullName: '',
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
    };
  },
  validations() {
    return {
      fullName: {required , maxLengthValue: maxLength(30)},
      department: {required},
      phoneNumber: {required , minLengthValue: minLength(10), minValueValue: minValue(1)},
      fromDate: {required , between: between(moment().format('YYYY-MM-DD').toString() , this.toDate.toString())},
      toDate: {required , between: between(this.fromDate.toString() , '4000-01-01')},
      excuse: {required},
      vacationType: {required},
      inOrOut: {required},
    }
  },
  mounted() {
    if (this.$route.query.requestId) {
        console.log(this.$route.query.requestId + "YES");
      
        let requestId = parseInt(this.$route.query.requestId);
        console.log(this.Database.getRequestWithId(requestId))
        let userId = this.Database.getRequestWithId(requestId).userId;

        this.formReadOnly = true;

        this.fullName = this.Database.getUserWithId(userId).name;
        this.phoneNumber = this.Database.getUserWithId(userId).phoneNumber;

        this.department = this.Database.getRequestWithId(requestId).management;
        this.vacationType = this.Database.getRequestWithId(requestId).holidayType;
        this.inOrOut = this.Database.getRequestWithId(requestId).inOrOut;
        this.excuse = this.Database.getRequestWithId(requestId).holidayReason;
        this.fromDate = this.Database.getRequestWithId(requestId).fromDate;
        this.toDate = this.Database.getRequestWithId(requestId).toDate;

      }
    else {
      console.log('No');
    }
  },
  methods: {
    sendRequest() {
      const newVacation = this.vacationType;
      const newToDate = this.toDate;
      const newFromDate = this.fromDate;
      const newExcuse = this.excuse;
      const newInOrOut = this.inOrOut;

      let newRequest = {
        holidayType: newVacation,
        management: this.Database.getRequestWithId(this.Database.getCurrentUserId()).management,
        fromDate: newFromDate,
        toDate: newToDate,
        status: 'جديد',
        inOrOut: newInOrOut,
        userId: this.Database.getCurrentUserId(),
        holidayReason: newExcuse,
        requestId: Math.floor(Math.random() * 10000),
      };
      this.Database.addRequest(newRequest);

      // console.log(newRequest),
      // console.log(this.Database.getRequestArray())
    },
    classValue(dirty , invalid){
      // console.log(this.fromDate , this.toDate)
      // console.log(dirty , invalid)
      if (!dirty){
        return '';
      } else if (invalid){
        return 'is-invalid';
      } else return 'is-valid';
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

button {
  margin-right: 5px;
  margin-left: 5px;
}
</style>
