<template>
    <img
      src="../../assets/hebron.png"
      class="mx-auto d-block responsive-img"
      alt="Responsive image"
      style="width: 200px;"
    />
    <div class="container col-xl-9 p-5 gx-5 shadow-sm rounded box">
      <span class="form-title"> نموذج طلب إجازة </span>

      <FormSectionTitle title="المعلومات الشخصية" />

      <InputText title="الاسم الكامل"  :isReadOnly="formReadOnly" />

      <div class="row gx-5">
        <InputText title="الدائرة الإدارية"   :isReadOnly="formReadOnly" />
        <InputNumber  title="رقم الهاتف"   :isReadOnly="formReadOnly" />
      </div>

      <FormSectionTitle title="تفاصيل الإجازة"   :isReadOnly="formReadOnly" />

      <div class="row gx-5">
        <InputSelect   title="نوع الإجازة" :optionsList="holidayTypes" :isReadOnly="formReadOnly" />
        <InputSelect title="داخل/خارج البلاد" :optionsList="outOrIn" :isReadOnly="formReadOnly" />
      </div>

      <div class="row gx-5">
        <InputDate title="من تاريخ" :isReadOnly="formReadOnly"/>
        <InputDate title="إلى تاريخ" :isReadOnly="formReadOnly"/>
      </div>

      <InputTextarea  inputType="textarea" title="سبب الإجازة" :isReadOnly="formReadOnly"/>

      <div style="text-align: center">
        <button class="btn btn-success px-4 py-2"  @click="SubmitButton">إرسال</button>
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
// import moment from 'moment';
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
      outOrIn: ["داخل البلاد", "خارج البلاد"],
      holidayTypes: [ "سنوية", "رسمية", "مرضية", "زواج", "أمومة", "بدون راتب", "حج", "وفاة قريب مباشر", "وفاة قريب غير مباشر", ],
      formReadOnly: false,

    };
  },
  mounted(){
  },
  methods: {
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