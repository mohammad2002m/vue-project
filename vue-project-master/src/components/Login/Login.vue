<template>
  <img src="../../assets/hebron.png" class="mx-auto d-block responsive-img" alt="Responsive image"
    style="width: 200px;" />
  <div class="box">

    <div class="rounded-top box-header"> تسجيل الدخول </div>

    <div class="line"> </div>

    <div style="padding-left: 30px; padding-right: 30px; padding-bottom: 30px; padding-top: 20px;">


      <div class="input-with-label" dir="rtl">
        <label for="" style="font-size: 14px;"> اسم المستخدم</label>
        <input dir="rtl" v-model="username" type="text" class="form-control username" placeholder="اسم المستخدم"
          style="margin-bottom: 35px; font-size: 14px;" />
      </div>

      <div class="input-with-label" dir="rtl">
        <label for="" style="font-size: 14px;"> كلمة المرور </label>
        <input dir="rtl" v-model="password" type="password" class="form-control password" placeholder="كلمة المرور"
          style="margin-bottom: 35px; font-size: 14px;" />
      </div>

      <div dir="rtl" style="margin-bottom: 30px; margin-right: 4px;">
        <a href=""> هل نسيت كلمة المرور ؟</a>
      </div>

      <button @click="Login()" class="btn btn-success" style="width: 100%; margin-bottom: 20px;"> تسجيل الدخول </button>
    </div>
  </div>
</template>


<script>

export default {
  name: 'Login',
  data() {
    return {
      username: "",
      password: "",
    }
  },
  methods: {
    Login() {
      let isFound = false;
      // this.Database.initDatabase();
      const users = this.Database.getUsersArray();
      for (let i = 0; i < users.length; i++) {
        if (users[i].username == this.username && users[i].password == this.password) {
          this.$router.push('List');
          isFound = true;
          this.Database.setCurrentUserId(users[i].userId);
          break;
        }
      }
      if (!isFound) {
        alert("Sorry the user not found");
      }
    }
  }
}

</script>

<style scoped>
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