import { Status } from "./constants.js";
class Database {
  static currentUserId = null;
  static getFlow() {
    return JSON.parse(localStorage.getItem("businessFlow"));
  }
  static getFlowForRequestId(requestId) {
    const requestType = Database.getRequestWithId(requestId).requestType;
    const businessFlow = Database.getFlow();
    return businessFlow[requestType];
  }
  static isRequestMine(userId, requestId) {
    const request = Database.getRequestWithId(requestId);
    return (request.userId = userId);
  }
  static isRoleManager(role) {
    return role != 4;
  }
  static isCurrentUserManager() {
    const user = Database.getCurrentUser();
    return user.role != 4;
  }
  static isShowRejectAccpetForUserRequest(userId, requestId) {
    const flow = Database.getFlowForRequestId(requestId);
    const request = Database.getRequestWithId(requestId);
    const user = Database.getUserWithId(userId);
    const index = flow.indexOf(user.role);
    if (index != request.step) return false;
    return (
      request.status != Status.Accepted && request.status != Status.Rejected
    );
  }
  static getTypeForRoleToSend(role, requestId) {
    console.log(role);
    console.log(requestId);
    return 0;
  }
  static isShowUserIdRequest(userId, requestId) {
    const user = Database.getUserWithId(userId);
    const flow = Database.getFlowForRequestId(requestId);
    const request = Database.getRequestWithId(requestId);
    const index = flow.indexOf(user.role);
    if (index == -1) {
      return request.userId == userId;
    }
    if (index <= request.step) return true;
    return false;
  }
  static isShowAsNotificationUserIdRequest(userId, requestId) {
    const user = Database.getUserWithId(userId);
    const flow = Database.getFlowForRequestId(requestId);
    const request = Database.getRequestWithId(requestId);
    const index = flow.indexOf(user.role);
    if (index == -1) {
      return request.userId == userId;
    }
    if (index <= request.step) return false;
    if (request.status == Status.Rejected) return true;
    return false;
  }
  static getStatusForRoleRequest(role, requestId) {
    const flow = Database.getFlowForRequestId(requestId);
    const request = Database.getRequestWithId(requestId);
    const index = flow.indexOf(role);
    if (index == -1) {
      // if I am not in the flow then it must be my request
      return request.status;
    } else if (index < request.step) {
      return Status.Accepted;
    } else if (index == request.step) {
      return request.status;
    }
  }

  static getRoles() {
    return JSON.parse(localStorage.getItem("roles"));
  }
  static getAtRoleNameForRequest(requestId) {
    const roles = Database.getRoles();
    const request = Database.getRequestWithId(requestId);
    const flow = Database.getFlowForRequestId(requestId);
    return roles[flow[request.step]];
  }
  static IsRequestStepAtUserId(userId, requestId) {
    const user = Database.getUserWithId(userId);
    const request = Database.getRequestWithId(requestId);
    const flow = Database.getFlowForRequestId(requestId);
    return flow[request.step] == user.role;
  }
  static getStatusMessageForUserIdRequest(userId, requestId) {
    const user = this.getUserWithId(userId);
    const status = this.getStatusForRoleRequest(user.role, requestId);
    const request = Database.getRequestWithId(requestId);
    const flow = Database.getFlowForRequestId(requestId);
    if (request.userId == userId) {
      // meaning it's my request
      if (
        request.step == flow.length - 1 &&
        (request.status == Status.Accepted || request.status == Status.Rejected)
      ) {
        return Status[status].EmployeeMessage.toString();
      } else {
        return (
          Status[status].EmployeeMessage.toString() +
          " عند " +
          Database.getAtRoleNameForRequest(requestId)
        ); // complete
      }
    } else {
      return Status[status].ManagerMessage;
    }
  }
  static initDatabase() {
    let requestTable = [];
    let roles = {
      0: "رئيس الجامعة",
      1: "نائب إداري",
      2: "شؤون الموظفين",
      3: "مدير الدائرة الإدارية",
      4: "موظف",
    };
    let businessFlow = {
      0: [3, 2, 1, 0],
      1: [3, 2, 1],
      2: [1, 0],
      3: [2, 1, 0],
    };
    let notifications = [];
    let userTable = [
      {
        userId: 0,
        name: "قصي أبو سوط",
        username: "a",
        password: "a",
        role: 0,
        email: "q2016@gmail.com",
        phoneNumber: "0599382984",
        management: "كلية الطب",
      },
      {
        userId: 1,
        name: "قصي أبو سوط",
        username: "b",
        password: "b",
        role: 1,
        email: "q2016@gmail.com",
        phoneNumber: "0599382984",
        management: "كلية الطب",
      },
      {
        userId: 2,
        name: "محمد بن بلال",
        username: "c",
        password: "c",
        role: 2,
        email: "moh2020@gmail.com",
        phoneNumber: "0569581089",
        management: "كلية الطب",
      },
      {
        userId: 3,
        name: "أبو شريف",
        username: "d",
        password: "d",
        role: 3,
        email: "test@gmail.com",
        phoneNumber: "0595118296",
        management: "شؤون الطلبة",
      },
      {
        userId: 4,
        name: "محمد بلال",
        username: "e",
        password: "e",
        role: 4,
        email: "test@gmail.com",
        phoneNumber: "0595118296",
        management: "كلية التكنولوجيا",
      },
    ];

    localStorage.setItem("userTable", JSON.stringify(userTable));
    localStorage.setItem("requestTable", JSON.stringify(requestTable));
    localStorage.setItem("businessFlow", JSON.stringify(businessFlow));
    localStorage.setItem("roles", JSON.stringify(roles));
    localStorage.setItem("notificationsSeen", JSON.stringify(notifications));

    let users = JSON.parse(localStorage.getItem("userTable"));
    let requests = JSON.parse(localStorage.getItem("requestTable"));

    localStorage.setItem("userTable", JSON.stringify(users));
    localStorage.setItem("requestTable", JSON.stringify(requests));
  }

  static getUserRole(rool) {
    let roles = {
      0: "رئيس الجامعة",
      1: "نائب إداري",
      2: "شؤون الموظفين",
      3: "مدير الدائرة الإدارية",
      4: "موظف",
    };
    if (rool == 0) {
      return roles[0];
    } else if (rool == 1) {
      return roles[1];
    } else if (rool == 2) {
      return roles[2];
    } else if (rool == 3) {
      return roles[3];
    } else if (rool == 4) {
      return roles[4];
    } else {
      return "No Role";
    }
  }

  static getNotificationsSeen() {
    return JSON.parse(localStorage.getItem("notificationsSeen"));
  }
  static getCurrentUserId() {
    return JSON.parse(localStorage.getItem("currentUserId"));
  }

  static getNameforRequestId() {
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

  static getRequestArrayToShowForUserId(userId) {
    let requests = Database.getRequestArray();
    requests = requests.filter((request) => {
      return this.isShowUserIdRequest(userId, request.requestId);
    });
    return requests;
  }

  static addNotificationSeen(userId, requestId) {
    let notificationsSeen = Database.getNotificationsSeen();
    if (!Database.IsSeenNotification(userId, requestId)) {
      notificationsSeen.push({ userId: userId, requestId: requestId });
      localStorage.setItem(
        "notificationsSeen",
        JSON.stringify(notificationsSeen)
      );
    }
  }
  static getNotificationMessageUserIdRequest(userId, requestId) {
    if (Database.IsSeenNotification(userId, requestId)) {
      return "مقروء";
    } else {
      return "غير مقروء";
    }
  }
  static IsSeenNotification(userId, requestId) {
    const notificationsSeenArray = Database.getNotificationsSeen();
    let seen = false;
    notificationsSeenArray.forEach((notificationSeen) => {
      if (
        notificationSeen.userId == userId &&
        notificationSeen.requestId == requestId
      ) {
        seen = true;
      }
    });
    return seen;
  }
  static getNotificationCountForUserId(userId) {
    let requests = Database.getRequestArray();
    let count = 0;
    requests.map((request) => {
      if (
        Database.isShowAsNotificationUserIdRequest(userId, request.requestId) &&
        !Database.IsSeenNotification(userId, request.requestId)
      ) {
        count += 1;
      }
    });
    return count;
  }
  static getRequestArrayToShowAsNotificationForUserId(userId) {
    let requests = Database.getRequestArray();
    requests = requests.filter((request) => {
      return this.isShowAsNotificationUserIdRequest(userId, request.requestId);
    });
    return requests;
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

  static getCurrentUserRole() {
    return Database.getCurrentUser().role;
  }

  static addRequest(request) {
    const requestTableFromLocalStorage = Database.getRequestArray();
    requestTableFromLocalStorage.push(request);
    localStorage.setItem(
      "requestTable",
      JSON.stringify(requestTableFromLocalStorage)
    );
  }
  static isActionTaken(requestId) {
    let request = Database.getRequestWithId(requestId);
    return (
      request.status == Status.Accepted || request.status == Status.Rejected
    );
  }
  static isRequestRejected(requestId) {
    let request = Database.getRequestWithId(requestId);
    return request.status == Status.Rejected;
  }

  static rejectRequest(requestId, rejectReason) {
    const requests = Database.getRequestArray();
    requests.filter((request) => {
      if (request.requestId == requestId) {
        request.status = Status.Rejected;
        request.rejectReason = rejectReason;
      }
    });
    localStorage.setItem("requestTable", JSON.stringify(requests));
  }
  static acceptRequest(requestId) {
    const requests = Database.getRequestArray();
    const flow = Database.getFlowForRequestId(requestId);
    requests.filter((request) => {
      if (request.requestId == requestId) {
        if (request.step == flow.length - 1) {
          request.status = Status.Accepted;
        } else {
          request.status = Status.NotSeen;
          request.step += 1;
        }
      }
    });
    localStorage.setItem("requestTable", JSON.stringify(requests));
  }
  static makeRequestSeen(requestId) {
    const requests = Database.getRequestArray();
    requests.filter((request) => {
      if (request.requestId == requestId) {
        request.status = Status.Seen;
      }
    });
    localStorage.setItem("requestTable", JSON.stringify(requests));
  }
  static getUniqueId() {
    return Database.getRequestArray().length;
  }
}

export default Database;
