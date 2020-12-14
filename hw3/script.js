// 1 task
class Emploee {
    constructor(obj) {
        for (let key in obj) {
            this[key] = obj[key]
        }
        Object.defineProperty(this, 'fullInfo', {
            set: function(value) {
                return value;
            }
        })
    }
}
const employeeObj = new Emploee(emplyeeArr[0]);
console.log(employeeObj)

Emploee.prototype.getFullName = function() {
    return this.surname + ' ' + this.name;
}
console.log(employeeObj.getFullName())


// 3 task

let createEmployesFromArr = (arr) => {
    const arrEmploy = [];
    for (let key in arr) {
        arrEmploy.push(new Emploee(emplyeeArr[key]))
    }
    return arrEmploy;
}
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
console.log(emplyeeConstructArr)

// 4 task

const getFullNamesFromArr = (arr) => {
    const arrFullName = [];
    for (let key of arr) {
        arrFullName.push(key.name + ' ' + key.surname);
    }
    return arrFullName;
}
console.log(getFullNamesFromArr(emplyeeConstructArr))

// 5 task

const getMiddleSalary = (arr) => {
    const arrMiddleSalary = [];
    let popularitySum = 0;
    for (let key of arr) {
        arrMiddleSalary.push(key.salary)
    }
    for (let i = 0; i < arrMiddleSalary.length; i++) {
        popularitySum += arrMiddleSalary[i]
    }
    return popularitySum / (arrMiddleSalary.length);
}
console.log('Средняя зарплата всех сотрудников: ', getMiddleSalary(emplyeeConstructArr))

// 6 task

const getRandomEmployee = (arr) => {
    rand = emplyeeConstructArr[Math.floor(Math.random() * emplyeeConstructArr.length)];
    return rand;
}
console.log(getRandomEmployee(emplyeeConstructArr))