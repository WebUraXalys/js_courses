function fib(num) {
    if(typeof num == "number" && num > 0 && Number.isInteger(num)){
      let numFib = [];
      dd(num, numFib);
      if (num == 1){
         numFib[0] = 0;
      } else if (num == 2) {
         numFib[0] = 0;
         numFib[1] = 1;
      } else{
         numFib[0] = 0;
         numFib[1] = 1;
         for(let i = 2; i+1 <= num; i++){
            numFib[i] = numFib[i-1] + numFib[i-2];
         }
      }
      let str = "";
      console.log(numFib);
      for(let j = 0; j < numFib.length; j++){
         if (j == numFib.length - 1){
            str += `${numFib[j]}`;
         } else{
            str += `${numFib[j]} `;
         }
         // console.log(numFib.length);
         // console.log(`j = ${j}, str = ${str}`);
      }
      // str += numFib.pop();
      return str;
    } else{
      return "";
    }
}
console.log(fib(1.3));









// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }

// fib(5)