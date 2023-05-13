<template>
  <TopNavigationBar number="3" />
  <!-- Alert -->
  <div id="success-alert" class="alert alert-success alert-dismissible fade show hide-alert" role="alert">
    تم إرسال طلب الإجازة بنجاح
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div class="container col-xl-9 p-5 gx-5  rounded box">
    <span class="form-title"> نموذج طلب إجازة </span>

    <div v-if="this.Database.isCurrentUserManager() || formReadOnly">
      <FormSectionTitle title="المعلومات الشخصية" />

      <FormComponent type="text" v-model="v$.fullName.$model" :classValue="classValue(v$.fullName.$dirty , v$.fullName.$error)" title="الاسم الكامل" :isReadOnly="formReadOnly" />

      <div class="row gx-5">
        <FormComponent type="text"   v-model="v$.department.$model" :classValue="classValue(v$.department.$dirty , v$.department.$error)" title="الدائرة الإدارية" :isReadOnly="formReadOnly" />
        <FormComponent type="number" v-model="v$.phoneNumber.$model" :classValue="classValue(v$.phoneNumber.$dirty , v$.phoneNumber.$error)" title="رقم الهاتف" :isReadOnly="formReadOnly" />
      </div>
    </div>

    <FormSectionTitle title="تفاصيل الإجازة" />

    <div class="row gx-5">
      <InputSelect v-model="v$.vacationType.$model" :classValue="classValue(v$.vacationType.$dirty , v$.vacationType.$error)" title="نوع الإجازة" :optionsList="vacationTypesArray" :isReadOnly="formReadOnly" />
      <InputSelect v-model="v$.inOrOut.$model" :classValue="classValue(v$.inOrOut.$dirty , v$.inOrOut.$error)" title="داخل/خارج البلاد" :optionsList="inOrOutArray" :isReadOnly="formReadOnly" />
    </div>

    <div class="row gx-5">
      <FormComponent type="date" v-model="v$.fromDate.$model" :classValue="classValue(v$.fromDate.$dirty , v$.fromDate.$error)" title="من تاريخ" :isReadOnly="formReadOnly" />
      <FormComponent type="date" v-model="v$.toDate.$model" :classValue="classValue(v$.toDate.$dirty, v$.toDate.$error)" title="إلى تاريخ" :isReadOnly="formReadOnly" />
    </div>

    <InputTextarea v-model="v$.excuse.$model" :classValue="classValue(v$.excuse.$dirty , v$.excuse.$error)" inputType="textarea" title="سبب الإجازة" :isReadOnly="formReadOnly" />
    <InputTextarea v-if="this.$route.query.requestId && this.Database.isRequestRejected(parseInt(this.$route.query.requestId))" v-model="rejectReason" inputType="textarea" title="سبب الرفض" :isReadOnly="formReadOnly" />

    <div v-if="this.Database.isCurrentUserManager() && !this.Database.isActionTaken(parseInt(this.$route.query.requestId))" style="text-align: center">
      <button class="btn btn-danger px-4 py-2" @click="showRejectModal()"  > رفض </button>
      <button class="btn btn-success px-4 py-2" @click="showAcceptModal()" > قبول </button>
    </div>
    <div v-if="!this.Database.isCurrentUserManager() && !this.$route.query.requestId" style="text-align: center">
      <button class="btn btn-success px-4 py-2" @click="showSendModal()">إرسال</button>
    </div>
  </div>
  <Copyright title="حقوق الطبع والنشر محفوظة" />
  <button @click="test()"> test </button>
  <Modal v-model="v$.rejectReason.$model" :classValue="classValue(v$.rejectReason.$dirty , v$.rejectReason.$error)" id="confirm-reject" type="reject" modalTitle="سبب الرفض" :action="rejectRequest" modalSubTitle="الرجاء إدخال سبب الرفض" yesButton="رفض"   />
  <Modal id="confirm-accept" type="confirm"  modalTitle="تأكيد القبول" :action="acceptRequest" yesButton="نعم"   message="هل أنت متأكد من قبول طلب الإجازة"  />
  <Modal id="confirm-send" type="confirm" modalTitle="تأكيد الإرسال" :action="sendRequest" yesButton="نعم" message="هل أنت متأكد من تقديم طلب الإجازة"  />
</template>

<script>
import Copyright from "../utils/Copyright.vue";
import FormSectionTitle from "../FormComponents/FormSectionTitle.vue";
import InputSelect from "../FormComponents/InputSelect.vue";
import Modal from "../utils/Modal.vue";
import InputTextarea from "../FormComponents/InputTextarea.vue";
import FormComponent from "../FormComponents/FormComponent.vue";
import TopNavigationBar from "../utils/TopNavigationBar.vue";
import moment from 'moment';
import { inOrOutArray, vacationTypesArray, Status } from '../../../constants.js'
import { useVuelidate } from '@vuelidate/core'
import { required , maxLength , minLength , minValue } from '@vuelidate/validators'
import bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap.js';

const minDate1 = (minDateVal) => (dateVal) => {
  return !moment(minDateVal).isAfter(dateVal);
}
const minDate2 = () => (dateVal, vm) => {
  return !moment(vm.fromDate).isAfter(dateVal);
}

export default {
  name: "RequestForm",
  components: {
    Copyright,
    FormSectionTitle,
    InputTextarea,
    InputSelect,
    FormComponent,
    TopNavigationBar,
    Modal,
  },
  setup() {
    return { v$: useVuelidate()}
  },
  data() {
    return {
      fullName: '',
      phoneNumber: '',
      fromDate:  moment().format('YYYY-MM-DD'),
      toDate:  moment().format('YYYY-MM-DD'),
      excuse: '',
      vacationType: 'سنوية',
      department: '',
      inOrOut: 'داخل البلاد',
      inOrOutArray: inOrOutArray,
      vacationTypesArray: vacationTypesArray,
      formReadOnly: false,
      rejectReason: '',
    };
  },
  validations() {
    console.log('here: ' + this.fromDate)
    console.log('here: ' + this.toDate)
    return {
      fullName: {required , maxLengthValue: maxLength(30)},
      department: {required},
      phoneNumber: {required , minLengthValue: minLength(10), minValueValue: minValue(1)},
      fromDate: {required, minDateValue : minDate1(moment().format('YYYY-MM-DD'))},
      toDate: {required, minDateValue: minDate2() },
      excuse: {required},
      vacationType: {required},
      inOrOut: {required},
      rejectReason: {required},
    }
  },
  mounted() {
    if (this.$route.query.requestId) {
        let requestId = parseInt(this.$route.query.requestId);
        let request = this.Database.getRequestWithId(requestId);
        let userId = request.userId;

        this.formReadOnly = true;

        this.fullName = this.Database.getUserWithId(userId).name;
        this.phoneNumber = this.Database.getUserWithId(userId).phoneNumber;

        this.department = request.management;
        this.vacationType = request.holidayType;
        this.inOrOut = request.inOrOut;
        this.excuse = request.holidayReason;
        this.fromDate = request.fromDate;
        this.toDate = request.toDate;
        this.rejectReason = request.rejectReason;
        if (this.Database.isCurrentUserManager() && request.status.comp == Status.NotSeen.comp){
          this.$forceUpdate() // temporary solution
          this.Database.makeRequestSeen(requestId);
        }
      }
  },
  methods: {
    test() {console.log(this.fromDate)},
    showSendModal(){
        // console.log(this.v$.vacationType.$dirty , this.v$.vacationType.$error)
        // console.log(this.v$.fromDate.$dirty , this.v$.fromDate.$error)
        if ((!this.v$.vacationType.$dirty || !this.v$.vacationType.$error) &&
            (!this.v$.inOrOut.$dirty || !this.v$.inOrOut.$error) &&
            (!this.v$.fromDate.$dirty || !this.v$.fromDate.$error) &&
            (!this.v$.toDate.$dirty || !this.v$.toDate.$error) &&
            (this.v$.excuse.$dirty && !this.v$.excuse.$error)
        ) {
          var modal = new bootstrap.Modal('#confirm-send');
          modal.toggle()
        }
        this.v$.excuse.$touch()
        this.v$.inOrOut.$touch()
        this.v$.fromDate.$touch()
        this.v$.toDate.$touch()
        this.v$.vacationType.$touch()
    },
    showAcceptModal(){
        var modal = new bootstrap.Modal('#confirm-accept');
        modal.toggle()
        console.log(modal)
    },
    showRejectModal(){
        var modal = new bootstrap.Modal('#confirm-reject');
        modal.toggle()
    },
    showAlert() {
      const alert = document.getElementById('success-alert');
      alert.classList.toggle('show-alert')
    },
    rejectRequest() {
        this.v$.rejectReason.$touch()
        if (this.v$.rejectReason.$error){
          var modal = new bootstrap.Modal('#confirm-reject');
          modal.toggle()
        } else {
          let requestId = parseInt(this.$route.query.requestId);
          this.Database.rejectRequest(requestId , this.rejectReason)
          this.$forceUpdate()
        }


    },
    acceptRequest(){
      let requestId = parseInt(this.$route.query.requestId);
      this.Database.acceptRequest(requestId);
      this.$forceUpdate();
    },
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
        status: Status.NotSeen,
        inOrOut: newInOrOut,
        userId: this.Database.getCurrentUserId(),
        holidayReason: newExcuse,
        requestId: this.Database.getUniqueId(),
      };
      this.Database.addRequest(newRequest);
      this.showAlert();
    },
    classValue(dirty , invalid){
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
.hide-alert {
  display: none;
}
.show-alert {
  display: block;
}
</style>
