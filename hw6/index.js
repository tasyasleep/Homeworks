/// 1 task

const arr = ['Vasya', 'Petya', 'Alexey']
removeUser = (a, b) => {
    a.splice(b, 1)
}
removeUser(arr, 1);
console.log(arr)

/// 2 task

const obj = { name: 'Vasya', age: 1 }
getAllKeys = (a) => {
    return console.log(Object.keys(a));
}
getAllKeys(obj)

/// 3 task

getAllValues = (a) => {
    return console.log(Object.values(a));
}
getAllValues(obj)

/// 4 task
/*const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr1 = [{
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];

const insertIntoarr = (obj, id) => {
    for (let key of condidateArr) {
        if (key._id == id) {
            let index = condidateArr.indexOf(key);
            condidateArr.splice(index, 0, obj);
            return console.log(condidateArr);
        }
    }
}
console.log(insertIntoarr(secondObj, 2))

*/
/// 5 task

class Condidate {
    constructor(obj) {
        Object.assign(this, obj);
    }
    get state() {
        const arr = this.address.split(',').slice(2, 3).join('');
        return arr;
    }
}
const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state)

/// 6 task

const getCompanyNames = () => {
    let arr = [];
    condidateArr.forEach((item) => {
        let itemCompany = item.company
        if (!arr.includes(itemCompany)) {
            arr.push(itemCompany);
        }
    })
    return arr;
}
console.log(getCompanyNames(condidateArr));

/// 7 task

const getUsersByYear = (num) => {
    let arr = [];
    condidateArr.forEach(item => {
        let year = Number(item.registered.split('-').slice(0, 1).join(''))
        if (num === year) {
            arr.push(item._id)
        }
    })
    return arr;
}
console.log(getUsersByYear(2017));

/// 8 task

const getCondidatesByUnreadMsg = (num) => {
    let arr = [];
    condidateArr.forEach(item => {
        let itemNum = Number(item.greeting.replace(/\D+/g, ''))
        if (num === itemNum) {
            arr.push(item)
        }
    })
    return arr;
}
console.log(getCondidatesByUnreadMsg(8));

/// 9 task

const getCondidatesByGender = (gender) => {
    let arr = [];
    condidateArr.filter(item => {
        if (item.gender == gender) {
            arr.push(item)
        }
    })
    return arr;
}
console.log(getCondidatesByGender('male'))