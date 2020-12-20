const budgetStudents = [];
const students = [];
class Student {
    constructor(enrolle) {
        this.id = Student.id++;
        Object.assign(this, enrolle);
        if (this.ratingPoint <= 800) {
            this.isSelfPayment = true;
        } else {
            this.isSelfPayment = false;
            budgetStudents.push(this);
            budgetStudents.sort(
                function sortfunction(a, b) {
                    if (a.ratingPoint === b.ratingPoint) {
                        return a.schoolPoint - b.schoolPoint;
                    }
                    return a.ratingPoint > b.ratingPoint ? 1 : -1;
                });
            if (budgetStudents.length > 5) {
                for (let k = 0; k < students.length; k++) {
                    if (budgetStudents[0].id == students[k].id) {
                        students[k].isSelfPayment = true;
                    }
                }
                budgetStudents.splice(0, 1);
            }
        }
        students.push(this);
    }
    static id = 1;
    static listOfStudents() {
        return students;
    }
}
const enrolle1 = new Student(studentArr[0]);
const enrolle2 = new Student(studentArr[1]);
const enrolle3 = new Student(studentArr[2]);
const enrolle4 = new Student(studentArr[3]);
const enrolle5 = new Student(studentArr[4]);
const enrolle6 = new Student(studentArr[5]);
const enrolle7 = new Student(studentArr[6]);
const enrolle8 = new Student(studentArr[7]);
const enrolle9 = new Student(studentArr[8]);
const enrolle10 = new Student(studentArr[9]);
const enrolle11 = new Student(studentArr[10]);
console.log(budgetStudents);
console.log(Student.listOfStudents());

// 2 task
class CustomString {
    constructor() {}
    reverse(str) {
        return str.split("").reverse().join("");
    }
    ucFirst(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str) {
        str = str.split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substring(1);
        }
        return str.join(' ');
    }
}
const myString = new CustomString();
console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));

// 3 task

class Validator {
    constructor() {}
    checkIsEmail(email) {
        return /^[a-zA-Z0-9._\-]+@[a-z]+\.[a-z]{2,3}$/.test(email);
    }
    checkIsDomain(domain) {
        return /^[a-zA-Z0-9._\-]+\.[a-z]{3}$/.test(domain);
    }
    checkIsDate(date) {
        return /^\d\d\.\d\d\.\d\d\d\d$/.test(date);
    }
    checkIsPhone(phone) {
        return /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(phone);
    }
}
var validator = new Validator();
console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
console.log(validator.checkIsDomain('google.com'));
console.log(validator.checkIsDate('30.11.2019'));
console.log(validator.checkIsPhone('+38(066)937-99-92'))