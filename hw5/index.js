//// 1 task

const makeCounter = () => {
    let counterSum = 0;
    return function(sum) {
        counterSum += sum;
        return counterSum;
    }
}
const counter = makeCounter();
console.log(counter(3));
console.log(counter(8));


/// 2 task

const getArr = () => {
    let updateArr = [];
    return (num) => {
        if (!num) {
            return updateArr = [];
        }
        updateArr.push(num);
        return updateArr;
    }
}
const getUpdatedArr = getArr();
console.log(getUpdatedArr(3));
console.log(getUpdatedArr());
console.log(getUpdatedArr({ name: 'Vasya' }));


/// 3 task

const setTime = () => {
    let str = 'Enabled';
    return (time) => {
        setTimeout(() => {
            str = new Date().getSeconds()
        }, 0)
        return str;
    }
}
const getTime = setTime();
console.log(getTime());

////4 task