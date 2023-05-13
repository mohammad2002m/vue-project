<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#"> جامعة الخليل </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"> <a :class="number == '1' ? 'nav-link active' : 'nav-link'"> الصفحة الرئيسية </a> </li>
            <li class="nav-item"> <a :class="number == '2' ? 'nav-link active' : 'nav-link'" @click="goToList()"> سجلي </a> </li>
            <li v-if="!this.Database.isCurrentUserManager()" class="nav-item"> <a :class="number == 3 ? 'nav-link active' : 'nav-link'" @click="goToRequestForm()"> تقديم طلب إجازة </a> </li>
            <li class="nav-item"> <a :class="number == '4' ? 'nav-link active' : 'nav-link'"> تقويم الجامعة </a> </li>
            <li v-if="this.Database.isCurrentUserManager()" class="nav-item"> <a :class="number == 5 ? 'nav-link active' : 'nav-link'" @click="GoToSignUp()"> إنشاء حساب موظف </a> </li>
        </ul>
        <div class="d-flex align-items-center">
            <span class="navbar-item" style="color:white;">{{ this.Database.getCurrentUser().name }} </span>
            <button @click="signOut()" class="btn btn-outline-success" style="margin-right: 10px;"> تسجيل الخروج </button>
        </div>
        </div>
    </div>
    </nav>
</template>

<script>

export default {
    name: 'TopNavigationBar',
    props: {
        number: String
    },
    methods: {
        goToList() { this.$router.push({ name: 'List' }); },
        GoToSignUp() { this.$router.push({ name: 'SignUp' }); },
        goToRequestForm() { this.$router.push({ name: 'RequestForm' }); },
        signOut() { this.$router.push({ name: 'Login' }); }
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
}
a:hover {
    cursor: pointer;
}
</style>