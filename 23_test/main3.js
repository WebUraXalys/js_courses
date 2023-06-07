
// for(let i = 1; i < lenght; i++){
//    for(let j = 0; j < i; j++){
//       result += '*';
//    }
//    result += '\n'; 
// }
// console.log(result);

let result = '';
const lenght = 7;
for(let i = lenght; i>=0; i--){
   for(let j = lenght; j >= i; j--){
      result += '*';
      // console.log(i, j);
   }
   result += '\n'; 
}
console.log(result);