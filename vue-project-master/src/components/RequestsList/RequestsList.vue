<!-- eslint-disable -->
<template>
    <div class="container p-3">
      <div class="row">
        <div class="col fw-bold"> تسجيل الخروج </div>
        <div class="col fw-bold">قائمة طلبات الإجازات</div>
        <div class="col fw-bold" style="display:flex; justify-content: flex-end;">
          <span class="title"> جامعة الخليل </span>
          <img style="width: 23%;padding-left: 1rem;" src="https://cdn.localized.world/organizations/190/0fbfe698-e32e-44fc-bd9b-01bfc256d8b3.png" alt="">
        </div>
      </div>
        <hr >
      <table>
        <tr>
          <th>تفاصيل</th>
          <th>الحالة</th>
          <th>إلى تاريخ</th>
          <th>من تاريخ</th>
          <th>الدائرة الإدارية</th>
          <th>نوع الإجازاة</th>
        </tr>
          <tr class="row-data" v-if="this.Database.getUserWithId(this.Database.getCurrentUser()).role == 'employee'" v-for="(request, index) in this.Database.getRequestArrayWithUserId(this.Database.getCurrentUser())" :key="index">
            <td> <button @click="ViewDetails(index)" class="see-more"> &#x2B9C; اقرأ المزيد </button> </td>
            <td> {{ request.type }} </td>
            <td> {{ request.management }} </td>
            <td> {{ request.fromDate }} </td>
            <td> {{ request.toDate }} </td>
            <td> {{ request.holidayType }} </td>
          </tr>
          <tr class="row-data" v-if="this.Database.getUserWithId(this.Database.getCurrentUser()).role == 'manager'" v-for="(request, index) in this.Database.getRequestArrayWithUserId(this.Database.getCurrentUser())" :key="index">
            <td> <button @click="ViewDetails(index)" class="see-more"> &#x2B9C; اقرأ المزيد </button> </td>
            <td> {{ request.type }} </td>
            <td> {{ request.management }} </td>
            <td> {{ request.fromDate }} </td>
            <td> {{ request.toDate }} </td>
            <td> {{ request.holidayType }} </td>
          </tr>
      </table>

      <div v-if="userType == 'employee'" style="display:block; text-align: center; margin-top: 50px;">
        <button @click="NewRequest" class="btn btn-success px-5 py-3"> تقديم طلب جديد </button>
      </div>
    </div>


</template>
 
<script>

export default {
  name: 'List',
  methods: {
    NewRequest(){
      this.$router.push('RequestForm')
    },
    ViewDetails(index){ // id
      console.log(index)
      this.$router.push({name: 'RequestForm' , query: {info: JSON.stringify(this.requestsArray[index])}}) // should send different information
      console.log(this.requestsArray[index]);
    },
  },
  data() {
    return {
      requestsArray: JSON.parse(localStorage.requests).requestsArray,
      userType: localStorage.userType,
    }
  },
}
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
 
td,
th {
  border: 1px solid rgba(147, 139, 139, 0.593);
  padding: 20px;
  text-align: center;
}

 
.see-more:hover {
  cursor: pointer;
}
 
@media (max-width: 850px) {
  td:nth-child(5),
  th:nth-child(5) {
    display: none;
  }
}
 
@media (max-width: 576px) {
  td:nth-child(3),
  th:nth-child(3) {
    display: none;
  }
  td:nth-child(4),
  th:nth-child(4) {
    display: none;
  }
  .title {
    display: none;
  }
}
 
@media (min-width: 760px) {
  td, th{
    padding: 1rem;
  }
}


.see-more {
  background-color: transparent;
  color: #2581DD;
  border: none;
}

.row-data td:hover {
  background: rgba(62, 58, 58, 0.0542);
}

 
</style>