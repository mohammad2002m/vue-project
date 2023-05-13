class Status {
    static NotSeen = new Status(0,"جديد", "غير مقروء");
    static Seen = new Status(1,"مقروء" , "قيد المراجعة");
    static Rejected = new Status(2,"تم الرفض" , "مرفوض");
    static Accepted = new Status(3,"تم القبول" , "مقبول");
    constructor(comp , ManagerMessage , EmployeeMessage){
        this.comp = comp;
        this.ManagerMessage = ManagerMessage;
        this.EmployeeMessage = EmployeeMessage;
    }
}
const inOrOutArray = ['داخل البلاد' , 'خارج البلاد']
const vacationTypesArray = ['سنوية' , 'رسمية' , 'مرضية' , 'زواج'  , 'أمومة' , 'بدون راتب' , 'حج' , 'وفاة قريب مباشر' , 'وفاة قريب غير مباشر']

export {
    Status, 
    inOrOutArray,
    vacationTypesArray,
}

