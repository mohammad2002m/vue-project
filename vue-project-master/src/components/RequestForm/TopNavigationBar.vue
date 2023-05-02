<template>
    <nav class="navbar navbar-dark bg-dark" dir="rtl">
        <div class="container-fluid">
            <div class="d-flex" style="justify-content: center; align-items: center;">
                <button class="navbar-brand navButton font-weight-bold text-white">جامعة الخليل</button>
                <button :class="number == 0 ? 'navbar-item navButton navText' : 'navbar-item navButton'">الصفحة الرئيسية</button>
                <button v-if="!this.Database.isCurrentUserManager()" @click="goToRequestForm()" :class="number == 1 ? 'navbar-item navButton navText' : 'navbar-item navButton'">طلب إجازة</button>
                <button @click="goToList()" :class="number == 2 ? 'navbar-item navButton navText' : 'navbar-item navButton'">سجلي</button>
                <button :class="number == 3 ? 'navbar-item navButton navText' : 'navbar-item navButton'">تقويم الجامعة</button>
                <button v-if="this.Database.isCurrentUserManager()" @click="GoToSignUp()" :class="number == 4 ? 'navbar-item navButton navText' : 'navbar-item navButton'"> إنشاء حساب موظف </button>
            </div>
            <div class="d-flex" style="justify-content: center; align-items: center;">
                <span class="navbar-item" style="color:white;">{{ this.Database.getCurrentUser().name }} </span>
                <button @click="signOut()" class="btn btn-outline-success" style="margin-right: 10px;"> تسجيل الخروج
                </button>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'TopNavigationBar',
    props: {
        number: Number,
    },
    methods: {
        goToList() {
            this.$router.push({ name: 'List' });
        },
        GoToSignUp() {
            this.$router.push({ name: 'SignUp' });
        },
        goToRequestForm() {
            this.$router.push({ name: 'RequestForm' });
        },
        signOut() {
            this.$router.push({ name: 'Login' });
        }
    }
}

</script>


<style scoped>
.navButton {
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.712);
}
.navButton:hover {
    color: rgba(255, 255, 255, 0.918);
}


.navText {
    color: white;
}</style>