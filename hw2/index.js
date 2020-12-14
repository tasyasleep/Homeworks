// 1 task
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

let result = [];
for (const key in citiesAndCountries) {

    result.push(`${key} - это ${citiesAndCountries[key]}`);
}
console.log(result);

// 2 task 

function getArray() {

    const amount = 9;
    let arrNum = [];
    let count = 0;

    for (let index = 0; index < amount / 3; index++) {

        arrNum.push([])

        for (let value = 0; value < 3; value++) {
            arrNum[index].push(++count)
        }

    }

    console.log(arrNum);
}
getArray();


// 3 task 
const namesOfDays = {
    'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay() {
    const lang = 'en';
    const day = 7;
    if (lang == 'en') {
        console.log(namesOfDays.en[(day - 1)])
    }
    if (lang == 'ru') {
        console.log(namesOfDays.ru[(day - 1)])
    }
}
getNameOfDay()


//4 task
function sumTwoSmallestNumbers(numbers) {
    var ordered = numbers.sort(function(a, b) { return a - b; });
    var result = 0;
    for (i = 0; i < ordered.length; i++) {
        if (i == 0) {
            result += ordered[0];
        }
        if (i == 1) {
            result += ordered[1];
        }
    }
    return result;
}
console.log(sumTwoSmallestNumbers([12, 898, 899, 900]));

//5 task
const binaryArrayToNumber = arr => {
    let numStr = '';
    arr.map(a => String(a)).forEach(a => {
        numStr += a;
    })
    return parseInt(+(numStr), 2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1]));