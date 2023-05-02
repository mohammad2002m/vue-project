class Database {
  static currentUserId = null;
  static initDatabase() {
    let userTable = [];
    let requestTable = [];
    userTable.push(
      {
        userId: 1,
        name: "قصي أبو سوط",
        username: "qusay",
        password: "pass1",
        role: "employee",
        email: "q2016@gmail.com",
        phoneNumber: "0599382984",
      },
      {
        userId: 2,
        name: "محمد بن بلال",
        username: "abusager",
        password: "moz",
        role: "employee",
        email: "moh2020@gmail.com",
        phoneNumber: "0569581089",
      },
      {
        userId: 3,
        name: "أبو شريف",
        username: "test",
        password: "test",
        role: "manager",
        email: "test@gmail.com",
        phoneNumber: "0595118296",
      }
    );

    requestTable.push(
      {
        holidayType: "حج",
        management: "كلية التكنولوجيا",
        fromDate: "2023-05-01",
        toDate: "2023-05-05",
        status: "مقبول",
        inOrOut: "داخل البلاد",
        userId: 1,
        holidayReason: "طشة مع العائلة الكريمة",
        requestId: 1,
      },
      {
        holidayType: "زواج",
        management: "شؤون الطلبة",
        fromDate: "2023-06-01",
        toDate: "2023-06-02",
        status: "مرفوض",
        inOrOut: "خارج البلاد",
        userId: 2,
        holidayReason: "التعرض لاصابة بمرض السرطان",
        requestId: 2,
      },
      {
        holidayType: "رسمية",
        management: "كلية الطب",
        fromDate: "2023-07-01",
        toDate: "2023-07-01",
        status: "قيد المراجعة",
        inOrOut: "داخل البلاد",
        userId: 3,
        holidayReason: "لاسباب شخصية لا الإفصاح عنها",
        requestId: 3,
      }
    );

    localStorage.setItem("userTable", JSON.stringify(userTable));
    localStorage.setItem("requestTable", JSON.stringify(requestTable));

    let users = JSON.parse(localStorage.getItem("userTable"));
    let requests = JSON.parse(localStorage.getItem("requestTable"));

    localStorage.setItem("userTable", JSON.stringify(users));
    localStorage.setItem("requestTable", JSON.stringify(requests));
  }

  static getCurrentUserId() {
    return JSON.parse(localStorage.getItem("currentUserId"));
  }

  static getNameforRequestId(){
    return this.getUserWithId(this.getRequestArray().userId).name;
  }

  static setCurrentUserId(userId) {
    localStorage.setItem("currentUserId", JSON.stringify(userId));
  }

  static getAllUsersWithoutCurrentId(userId) {
    return this.getRequestArray().filter((request) => request.userId != userId);
  }

  static getCurrentUser() {
    return Database.getUserWithId(
      JSON.parse(localStorage.getItem("currentUserId"))
    );
  }

  static getUsersArray() {
    return JSON.parse(localStorage.getItem("userTable"));
  }

  static getUserWithId(userId) {
    return Database.getUsersArray().find((user) => user.userId === userId);
  }

  static getRequestArray() {
    return JSON.parse(localStorage.getItem("requestTable"));
  }

  static getRequestArrayWithUserId(userId) {
    return Database.getRequestArray().filter(
      (request) => request.userId === userId
    );
  }

  static getRequestWithId(requestId) {
    return Database.getRequestArray().filter(
      (request) => request.requestId === requestId
    )[0];
  }

  static isCurrentUserManager() {
    return Database.getCurrentUser().role == "manager";
  }

  static addRequest(request) {
    const requestTableFromLocalStorage = Database.getRequestArray();
    requestTableFromLocalStorage.push(request);
    localStorage.setItem(
      "requestTable",
      JSON.stringify(requestTableFromLocalStorage)
    );
  }
}

export default Database;
