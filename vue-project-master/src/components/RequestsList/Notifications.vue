<!-- eslint-disable -->
<template>
  <TopNavigationBar ref="topBar" number="6" />
  <div class="container py-5">
    <table class="table">
      <tr>
        <th> اسم الموظف </th>
        <th> من تاريخ  </th>
        <th> إلى تاريخ  </th>
        <th> نوع الإجازة  </th>
        <th> الإشعار </th>
        <th> الحالة  </th>
        <th> تفاصيل  </th>
      </tr>
      <tr class="row-data" v-for="(request, index) in requests" :key="index">
        <td> {{ this.Database.getUserWithId(request.userId).name }} </td>
        <td> {{ request.fromDate }} </td>
        <td> {{ request.toDate }} </td>
        <td> {{ request.holidayType }}</td>
        <td> {{ this.Database.getNotificationMessageUserIdRequest(this.Database.getCurrentUserId(), request.requestId) }} </td>
        <td> {{ this.Database.getStatusMessageForUserIdRequest(request.userId, request.requestId) }} </td>
        <td> <button @click="viewDetails(request.requestId)" class="see-more">  اقرأ المزيد &#x2B9C; </button> </td>
      </tr>
    </table>
  </div>
</template>
 
<script>
import TopNavigationBar from '../utils/TopNavigationBar.vue'
export default {
  name: 'Notifications',
  data() {
    return {
      requests: this.Database.getRequestArrayToShowAsNotificationForUserId(this.Database.getCurrentUserId()),
    }
  },
  mounted() {
  },
  components: {
    TopNavigationBar,
  },
  methods: {
    viewDetails(requestId) {
      this.$router.push({ name: 'RequestForm', query: { requestId: JSON.stringify(requestId) } })
      this.Database.addNotificationSeen(this.Database.getCurrentUserId(), requestId);
      this.$refs.topBar.refresh()
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

i {
  transition: 0.15s;
}
i:hover {
  cursor: pointer;
  color:grey;
}
</style>