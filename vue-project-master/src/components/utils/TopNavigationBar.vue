<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> جامعة الخليل </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item"> <a :class="number == '2' ? 'nav-link active' : 'nav-link'" @click="goToList()">
                            طلبات الإجازة </a> </li>

                    <li class="nav-item"> <a :class="number == '5' ? 'nav-link active' : 'nav-link'" @click="goToProfile()"> سجلي </a>
                    </li>
                    <li class="nav-item"> <a :class="number == '1' ? 'nav-link active' : 'nav-link'"> الصفحة الرئيسية </a>
                    </li>
                    <li v-if="!this.Database.isCurrentUserManager()" class="nav-item"> <a
                            :class="number == 3 ? 'nav-link active' : 'nav-link'" @click="goToRequestForm()"> تقديم طلب
                            إجازة </a> </li>
                    <li class="nav-item"> <a :class="number == '4' ? 'nav-link active' : 'nav-link'"> تقويم الجامعة </a>
                    </li>
                </ul>
                <div class="d-flex align-items-center">

                    <button v-if="this.Database.isCurrentUserManager()" class="nav-item position-relative test">
                        <a style="inline-block" :class="number == 6 ? 'nav-link active' : 'nav-link'"
                            @click="GoToNotifcations()">
                            <span v-if="this.Database.getNotificationCountForUserId(this.Database.getCurrentUserId()) != 0"
                                class="position-absolute start-100 translate-middle badge rounded-pill bg-danger">
                                {{ this.Database.getNotificationCountForUserId(this.Database.getCurrentUserId()) }} </span>
                             <img src="../../assets/bell.svg" class="mx-auto d-block responsive-img" alt="Responsive image"
                                 style="width: 30px">
                             </a>
                    </button>

                    <div class="dropstart">
                        <button class="btn btn-secondary test" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <img src="../../assets/person-circle.svg" class="mx-auto d-block responsive-img"
                                alt="Responsive image" style="width: 30px">
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" @click="signOut()" href="#">تسجيل خروج</a></li>
                            <li><a class="dropdown-item" href="#">الاعدادات</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'TopNavigationBar',
    expose: ['refresh'],
    props: {
        number: String
    },
    methods: {
        goToList() { this.$router.push({ name: 'List' }); },
        GoToSignUp() { this.$router.push({ name: 'SignUp' }); },
        goToRequestForm() { this.$router.push({ name: 'RequestForm' }); },
        signOut() { this.$router.push({ name: 'Login' }); },
        GoToNotifcations() { this.$router.push({ name: 'Notifications' }); },
        refresh() { this.$forceUpdate(); console.log('found') },
        goToProfile(){
            this.$router.push({name: 'Profile'});
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
}

a:hover {
    cursor: pointer;
}

.test {
    border: none;
    background-color: rgba(255, 255, 255, 0);
}
</style>