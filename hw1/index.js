//1 задача 
for (let i = 1; i <= 10; i++) {
    str = "";
    if (i % 2 == 0 && i % 3 !== 0) console.log(str = "Fiz");
    else if (i % 3 == 0) console.log(str = "FizBuz");
    if (i % 2 !== 0 && i % 3 !== 0) console.log(str = "Buz");
    str += i;
}

//2 задача
function factorial(n) {
    return (n != 0) ? n * factorial(n - 1) : 1;
}
console.log(factorial(10));


//3 задача
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let consumptionOfNumWeek = weeksAmount * consumptionPerWeek / sheetsInReamPaper;
console.log(Math.ceil(consumptionOfNumWeek))

//4 задача

const roomsOnFloor = 3; //  кол-во квартир на этаже
const floors = 9; //  кол-во этажей
const roomNumber = 156; // номер квартиры
const floor = Math.ceil((roomNumber - 1) % (floors * roomsOnFloor) / (roomsOnFloor + 1)); // этаж относительно дома
const porch = Math.ceil((roomNumber - 1) / ((floors * roomsOnFloor) + 1)); // какой подъезд
console.log("Квартира с номером " + roomNumber + " находится в подъезде № " + porch + " на " + floor + " этаже");

//5 задача
var lines = line = 8,
    a = '-',
    b = '#';
while (line-- > 0) {
    console.log(Array(line + 1).join(a) + Array(2 * (lines - line)).join(b) + Array(line + 1).join(a));
}