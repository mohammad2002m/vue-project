<!-- eslint-disable -->
<template>
  <TopNavigationBar number="2" />
  <div class="container py-5">
<table>
      <tr>
        <th>تفاصيل</th>
        <th>الحالة</th>
        <th>إلى تاريخ</th>
        <th>من تاريخ</th>
        <th>الدائرة الإدارية</th>
        <th>نوع الإجازاة</th>
        <th v-if="this.Database.isCurrentUserManager()">اسم الموظف</th>
      </tr>
      <tr class="row-data" v-if="this.Database.isCurrentUserManager()"
        v-for="(request, index) in this.Database.getRequestArray()" :key="index">
        <td> <button @click="viewDetails(request.userId)" class="see-more"> &#x2B9C; اقرأ المزيد </button> </td>
        <td> {{ request.status}} </td>
        <td> {{ request.fromDate }} </td>
        <td> {{ request.toDate }} </td>
        <td> {{ request.management }} </td>
        <td>{{ request.holidayType }}</td>
        <td> {{ this.Database.getUserWithId(request.userId).name }} </td>

      </tr>
      <tr class="row-data" v-if="!this.Database.isCurrentUserManager()"
        v-for="(request, index) in this.Database.getRequestArrayWithUserId(this.Database.getCurrentUserId())"
        :key="index">
        <td> <button @click="viewDetails(request.requestId)" class="see-more"> &#x2B9C; اقرأ المزيد </button> </td>
        <td>{{ request.status}}</td>
        <td> {{ request.toDate }} </td>
        <td> {{ request.fromDate }} </td>
        <td> {{ request.management }} </td>
        <td> {{ request.holidayType }} </td>
      </tr>
    </table>

    <div v-if="!this.Database.isCurrentUserManager()" style="display:block; text-align: center; margin-top: 50px;">
      <button @click="newRequest" class="btn btn-success px-5 py-3"> تقديم طلب جديد </button>
    </div>
  </div>
</template>
 
<script>
import TopNavigationBar from '../RequestForm/TopNavigationBar.vue'
export default {
  name: 'List',
  mounted() {
      // console.log(this.Database.getCurrentUser())
      // console.log(!this.Database.isCurrentUserManager())
  },
  components: {
    TopNavigationBar,
  },
  methods: {
    newRequest() {
      this.$router.push('RequestForm')
    },
    viewDetails(requestId) {
      this.$router.push({ name: 'RequestForm', query: { requestId: JSON.stringify(requestId) } })
    },
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

  td,
  th {
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