class Database {
  static currenUserId = null;
  static initDatabase() {
    let userTable = [];
    let requestTable = [];
    userTable.push(
      {
        userId: 1,
        name: "Luffy G5",
        username: "Gear5",
        password: "password1",
        role: "employee",
        email: "luffy@gmail.com",
      },
      {
        userId: 2,
        name: "ali express",
        username: "aliEx",
        password: "password2",
        role: "manager",
        email: "aliExpress@gmail.com",
      },
      {
        userId: 3,
        name: "Zongli Tendo",
        username: "test",
        password: "test",
        role: "manager",
        email: "test@gmail.com",
      }
    );

    requestTable.push(
      {
        reason: "Vacation",
        fromDate: "2023-05-01",
        toDate: "2023-05-05",
        type: "accept",
        userId: 1,
      },
      {
        reason: "Sick Leave",
        fromDate: "2023-06-01",
        toDate: "2023-06-02",
        type: "reject",
        userId: 2,
      },
      {
        reason: "Personal Day",
        fromDate: "2023-07-01",
        toDate: "2023-07-01",
        type: "in progress",
        userId: 3,
      }
    );

    localStorage.setItem("userTable", JSON.stringify(userTable));
    localStorage.setItem("requestTable", JSON.stringify(requestTable));
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  static setCurrentUser(userId) {
    localStorage.setItem("currentUser", JSON.stringify(userId));
  }

  static getUsersArray() {
    return JSON.parse(localStorage.getItem("userTable"));
  }

  static getUserWithId(userId){
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

  static addRequest(request) {
    const requestTableFromLocalStorage = Database.getRequestArray();
    requestTableFromLocalStorage.push(request);
    localStorage.setItem(
      "requestTabel",
      JSON.stringify(requestTableFromLocalStorage)
    );
  }
}

export default Database;
