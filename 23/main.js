// let result = '';
// const lenght = 7;

// for(let i = 1; i < lenght; i++){
//    for(let j = 0; j < i; j++){
//       result += '*';
//    }
//    result += '\n'; 
// }
// console.log(result);

first: for(let i = 0; i < 3; i++){
   for(let j = 0; j < 3; j++){
      for(let k = 0; k < 4; k++){
         console.log(i, j, k);
         if(k == 2) continue first;
      }
   }
}