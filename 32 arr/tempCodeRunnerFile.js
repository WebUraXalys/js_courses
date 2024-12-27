
const arr = [1, 3, 2, 6, 9];

// arr.pop();

// arr.push(8, 7);
// console.log(arr);

// for (let value of arr){
//    console.log(value);
// }

// let iterable = 'boo';

// for (let value of iterable) {
//   console.log(value);
// }

arr.forEach((item, i, arr)=>{
   console.log(i + ":" + item + " В масиві " + arr);
})

// let str = prompt("ddt");
// str = "gsbgsfg     fsbgsfbs    dsggfs gs    sfg  f    "
// console.log(str.trim());
// const ara = str.trim().split(' ');
// console.log(ara);




// const inputString = "Це   є     рядок   з  великою  кількістю     пробілів.";
// // Використовуємо регулярний вираз для заміни одного або більше пробілу на один пробіл
// const outputString = inputString.replace(/\s+/g, ' ');
// console.log(outputString);
// function compareNum(a, b) {
//    return a - b;
// }
// delete arr[1];
// arr[1] = 32;
// // arr.unshift(31);
// // console.log(arr.sort(compareNum));

console.log(arr.reverse());




