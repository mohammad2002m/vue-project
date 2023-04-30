class Status {
    static Declined = new Status(0);
    static Accepted = new Status(1);
    static InProgress = new Status(2);
    static NotSeen = new Status(3);

    constructor(name){
        this.name = name;
    }
}

const inOrOutArray = ['داخل البلاد' , 'خارج البلاد']
const vacationTypesArray = ['سنوية' , 'رسمية' , 'مرضية' , 'زواج'  , 'أمومة' , 'بدون راتب' , 'حج' , 'وفاة قريب مباشر' , 'وفاة قريب غير مباشر']

export {
    Status, 
    inOrOutArray,
    vacationTypesArray,
}

