<template>
  <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="card text-center">
      <div class="card-body" style="width: 800px;">
        <form>
          <div class="form-group">
            <label for="inputField">يرجى إدخال بريدك الإلكتروني للمتابعة</label>
            <input type="text" v-model="emailcheck" class="form-control mt-4" id="inputField"
              placeholder="البريد الإلكتروني">
          </div>
          <button @click="changePass()" type="submit" class="mt-4 btn btn-success">تأكيد</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Reset",
  data() {
    return {
      emailcheck: '',
    }
  },
  methods: {
    changePass() {
      let isFound = false;
      let id = '0';
      const users = this.Database.getUsersArray();
      for (let i = 0; i < users.length; i++) {
        if (users[i].email == this.emailcheck) {
          id = users[i].userId;
          isFound = true;
        }
      }
      if (isFound) {
        console.log('11111111111111111');
        this.$router.push({ name: 'changePass', query: { id } });
      }
      else {
        alert('عذرا هذا البريد الإلكترني غير موجود');
        console.log('22222222222222222222');
      }
    }
  },
}


</script>


<style scoped></style>