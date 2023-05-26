<!-- eslint-disable -->
<template>
  <TopNavigationBar number="2" />
  <div class="container py-5">
    <table class="table">
      <tr>
        <th v-if="this.Database.isCurrentUserManager()"> اسم الموظف </th>
        <th> من تاريخ  </th>
        <th> إلى تاريخ  </th>
        <th> نوع الإجازة  </th>
        <th> الحالة <i @click="sortRequests()" class="fa fa-sort"></i></th>
        <th> تفاصيل  </th>

      </tr>
      <tr class="row-data" v-for="(request, index) in requests" :key="index">
        <td v-if="this.Database.isCurrentUserManager()"> {{ this.Database.getUserWithId(request.userId).name }} </td>
        <td> {{ request.fromDate }} </td>
        <td> {{ request.toDate }} </td>
        <td> {{ request.holidayType }}</td>
        <td> {{ this.Database.getStatusMessageForUserIdRequest(this.Database.getCurrentUserRole(), request.requestId) }} </td>
        <td> <button @click="viewDetails(request.requestId)" class="see-more">  اقرأ المزيد &#x2B9C; </button> </td>
      </tr>
    </table>

    <div v-if="!this.Database.isCurrentUserManager()" style="text-align: center; margin-top: 50px;">
      <button @click="newRequest" class="btn btn-success px-5 py-3"> تقديم طلب جديد </button>
    </div>
  </div>
</template>
 
<script>
import TopNavigationBar from '../utils/TopNavigationBar.vue'
export default {
  name: 'List',
  data() {
    return {
      requests: this.Database.getRequestArrayToShowForUserId(this.Database.getCurrentUserId()),
    }
  },
  mounted() {
      this.requests.sort((r1 , r2) => {
        return r1.requestDate - r2.requestDate;
      })
      console.log('getMounted');
  },
  components: {
    TopNavigationBar,
  },
  methods: {
    newRequest() {
      this.$router.push('RequestForm')
    },
    sortRequests(){
      this.requests.sort((r1 , r2) => {
        return r1.status - r2.status;
      })
    },
    viewDetails(requestId) {
      this.$router.push({ name: 'RequestForm', query: { requestId: JSON.stringify(requestId) } })
      if (this.Database.IsRequestStepAtUserId(this.Database.getCurrentUserId() , requestId) && this.Database.getRequestWithId(requestId).status == this.Status.NotSeen){
        this.$forceUpdate() // temporary solution
        this.Database.makeRequestSeen(requestId);
      }
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