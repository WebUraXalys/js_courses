let a = 5,
   b = a;

b = b + 5;

console.log(a);
console.log(b);

const obj = {
   a: 5,
   b: 1
};

// const copy = obj;

// copy.a = 10;

// console.log(obj);
// console.log(copy);

// function copy(mainObj) { // Перший варіант копії
//    let copyObj = {};
//    let key;
//    for(key in mainObj){
//       copyObj[key] = mainObj[key];
//    }
//    return copyObj;
// }

// const number = {
//    a: 3,
//    b: 5,
//    c: 32,
//    d: {
//       a1: 10,
//       a2: 20
//    }  
// };

// const newNumber = copy(number);
// console.log(newNumber);



const arr = {
   a: 3,
   b: 5,
   c: 32,
   d: {
      a1: 10,
      a2: 20
   }  
}; 

const arr2 = {
   x: 3,
   y: 5,
   z: 32
};

const newNumber = Object.assign({}, arr, arr2); // Другий варіант копії у пустий об'єкт доєднуємо обєкти arr і arr2
newNumber.a = 10;
console.log(newNumber);
console.log(arr);

const numArr = [1, 2, 3, 4, 5];
const numArr2 = [6, 7, 8, 9, 10];
// const newNumArr = numArr.slice();
const newNumArr = [...numArr, ...numArr2, 'test', 'test2']; // три крапки витягують всі елементи з масиву і після чого вони поміщаються в новий
newNumArr[0] = 10;
console.log(newNumArr);
console.log(numArr);

function log(a, b, c) {
   console.log(a);
   console.log(b);
   console.log(c);
}

const numArr3 = [1, 2, 3, 4, 5];
log(...numArr3);


const copyArr = {...arr};
copyArr.d.a1 = 100;
console.log(copyArr);
console.log(arr);
