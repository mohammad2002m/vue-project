const Status = {
    0: {ManagerMessage: 'جديد' , EmployeeMessage: 'غير مقروء'},
    1: {ManagerMessage: 'مقروء' , EmployeeMessage: 'قيد المراجعة'},
    2: {ManagerMessage: 'تم الرفض' , EmployeeMessage: 'مرفوض'},
    3: {ManagerMessage: 'تم القبول' , EmployeeMessage: 'مقبول'},
    NotSeen: 0,
    Seen: 1,
    Rejected: 2,
    Accepted: 3,
}
const inOrOutArray = ['داخل البلاد' , 'خارج البلاد']
const vacationTypesArray = ['سنوية' , 'رسمية' , 'مرضية' , 'زواج'  , 'أمومة' , 'بدون راتب' , 'حج' , 'وفاة قريب مباشر' , 'وفاة قريب غير مباشر']

export {
    Status, 
    inOrOutArray,
    vacationTypesArray,
}

