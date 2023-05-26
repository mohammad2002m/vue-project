<template>
  <div class="box" style="margin-top: 10rem;">

    <div class="rounded-top box-header">تغيير كلمة المرور</div>

    <div class="line"> </div>

    <div style="padding-left: 30px; padding-right: 30px; padding-bottom: 30px; padding-top: 20px;">

      <div class="input-with-label" dir="rtl">
        <label for="" style="font-size: 14px;"> ادخل كلمة المرور الجديدة </label>
        <input dir="rtl" v-model="password" type="password" class="form-control password" placeholder="كلمة المرور"
          style="margin-bottom: 35px; font-size: 14px;" />
      </div>

      <div class="input-with-label" dir="rtl">
        <label for="" style="font-size: 14px;"> تأكيد كلمة المرور </label>
        <input dir="rtl" v-model="confirmPassword" type="password" class="form-control password" placeholder="كلمة المرور"
          style="margin-bottom: 35px; font-size: 14px;" />
      </div>


      <button @click="change()" class="btn btn-success" style="width: 100%; margin-bottom: 20px;">تغيير كلمة
        المرور</button>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    change() {
      let uid = this.$route.query.id;

      if (this.password != this.confirmPassword) {
        alert('Sorry, The new password must be like a confirm password');
        this.password = '';
        this.confirmPassword = '';
      }
      else {
        const users = this.Database.getUsersArray();
        for (let i = 0; i < users.length; i++) {
          if (users[i].userId == uid) {
            users[i].password = this.password;
            localStorage.setItem("userTable",JSON.stringify(users));
            alert('تم تغيير كلمة المرور بنجاح سيتم نقلك الى صفحة تسجيل الدخول');
            this.$router.push({ name: 'Login' });
          }
        }
      }
    }
  }
}

</script>

<style scoped>
.forgitStyle {
  border: none;
  background-color: rgba(255, 255, 255, 0);
}

.password {
  background: url('../../assets/lock.svg') no-repeat;
  background-position: right 5px bottom 50%;
  padding-right: 35px;
  background-size: 25px;
}

.username {
  background: url('../../assets/user.svg') no-repeat;
  background-position: right 10px bottom 50%;
  padding-right: 40px;
  background-size: 20px;
}

@media (min-width: 0px) {
  .box {
    width: 74%;
  }

  .line {
    display: none;
  }

  .box-header {
    color: black;
    background-color: none;
    text-align: center;
    margin-bottom: 10px;
  }
}

@media (min-width: 576px) {
  .box {
    width: 430px;
    border: 1px lightgray solid;
  }

  .line {
    display: block;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .box-header {
    text-align: center;
    color: black;
    padding: 20px;
  }
}

.box {
  border-color: lightgrey;
  padding-top: 1rem;
  margin: auto;
  border-radius: 3px;
}

img {
  margin: 10px;
}

.input-with-label input {
  color: #6C757D;
}

.input-with-label label {
  margin-right: 5px;
  margin-bottom: 8px;
}

.line {
  height: 1px;
  background-color: lightgrey;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 1.5rem;
}
</style>