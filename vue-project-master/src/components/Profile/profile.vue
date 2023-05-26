<template>
    <TopNavigationBar number="5" />

    <div class="container">
        <div class="row flex-row-reverse d-flex">
            <div class="col-lg d-flex justify-content-center align-items-center flex-column">
                <img src="../../assets/cute.jpg" id="profile-pic" class="img-fluid mt-4 mx-4"
                    style="width: 18rem;border-radius: 100%;" alt="">
                <label class="img-upload" for="input-file">تحديث الصورة</label>
                <input class="img-upload-inpt" type="file" accept="image/jpeg, image/png, image/jpg" id="input-file">
                <div style="text-align: center;width:100%;font-size: larger;font-weight: 500;">My heart</div>
            </div>
            <div class="mx-4 mt-5 col-lg row-">
                <form action="">
                    <div class="form-group">
                        <div class="right-form">
                            <h4 class="titles">الاسم الكامل</h4>
                            <input type="text" v-model="fullName" class="form-control inpt">
                            <h4 class="titles mt-5">البريد الإلكتروني</h4>
                            <input type="text" v-model="email" class="form-control inpt">
                        </div>
                        <div class="left-form">
                            <h4 class="titles mt-5">كلمة المرور</h4>
                            <input type="password" v-model="password" class="form-control inpt">
                            <h4 class="titles mt-5">الدائرة المالية</h4>
                            <input type="text" v-model="role" class="form-control inpt">
                        </div>
                            <h4 class="titles mt-5">رقم الهاتف</h4>
                            <input type="text" v-model="phoneNumber" class="form-control inpt custom">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import TopNavigationBar from "../utils/TopNavigationBar.vue"
export default {
    name: 'Profile',
    data() {
        return {
            fullName: this.Database.getCurrentUser().name,
            email: this.Database.getCurrentUser().email,
            password: this.Database.getCurrentUser().password,
            phoneNumber: this.Database.getCurrentUser().phoneNumber,
            role: this.Database.getUserRole(this.Database.getCurrentUser().role),
        }
    },
    components: {
        TopNavigationBar,
    },


}
// let profilePic = document.getElementById("profile-pic");
// let inputFile = document.getElementById("input-file");
//
// inputFile.onchange = function(){
//     profilePic.src = URL.createObjectURL(inputFile.files[0]);
// }

</script>


<style scoped>


@media(max-width: 991px){
    .right-form{
        display: inline-block;
        width: 50%;
        
    }
    .left-form{
        display: inline-block;
        width: 50%;
    }
    .inpt{
        width: 90%;
    }
    .custom{
        width: 45%;
    }
}

@media(max-width: 575px){
    .left-form{
        display: inline;
    }
    .right-form{
        display: inline;
    }
    .inpt{
        width: 45%;
    }
}

.titles {
    display: block;
    color: gray;
}

.info {
    color: gray;
}

.inpt {
    border: none;
    border-bottom: 2px solid gray;
    color: gray;
}

.inpt:focus {
    box-shadow: none;

}

.img-upload {
    display: block;
    width: 9rem;
    background: #37B878;
    color: white;
    padding: 0.3vw;
    margin: 10px auto;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}

.img-upload-inpt {
    display: none;
}
</style>