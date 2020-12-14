// 1 task
const Emploee = function(employee) {
        for (const key in employee) {
            this[key] = employee[key]
        }
        Object.defineProperty(this, 'fullInfo', {
          get: function(){

            let info = '';
          
            for (const key in this) {

                if(typeof(this[key]) === 'function') {continue}

                (info.length > 0) ? info += ', ' + key + ' - ' + this[key] : info += '' + key + ' - ' + this[key] 
           
            } 
            return info;
        },
        set: function(obj){

            if(typeof(obj) != 'object') return;

            for (const key in obj) {

              if(!this[key]) continue;

                this[key] = obj[key];

            }
        }

        
    });
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
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr);
console.log(emplyeeConstructArr);

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
console.log('Средняя зарплата всех сотрудников: ', getMiddleSalary(emplyeeConstructArr));

// 6 task

const randomEployee = (arr) => {

    let worker;
    
    return function getEmployee() {
        
        let newInd  = ~~(Math.random() * arr.length);
     
        if(!worker) return (worker = arr[newInd]);
     
        if(worker != arr[newInd]) return arr[newInd];
        
        return getEmployee();
    }
}

let getRandomEmployee = randomEployee(emplyeeArr);

console.log(getRandomEmployee());

console.log(employeeObj.fullInfo); // 7 task
