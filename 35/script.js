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

// function copy(mainObj) {
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


