
function firstTask() {
   for(let i = 5; i <= 10; i++){
      console.log(i);
   }
    
}

function secondTask() {
   for(let i = 20; i >= 10; i--){
      if(i === 13) break;
      console.log(i);
   }
    
}

function thirdTask() {
   for (let i = 1; i <= 10; i++) {
      if(Number.isInteger(i / 2)){
         console.log(i);
      }else {
         continue;
      } 
   }      
}

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
   let i = 2;
   while (i <= 16) {
      if (i % 2 === 0) {
         i++;
         continue;
      } else {
         console.log(i);
      }
      i++;
   } 
}

function fifthTask() {
   const arrayOfNumbers = [];
    for(let i = 0; i <= 5; i++){
      arrayOfNumbers[i] = i + 5; 
   } 
   return arrayOfNumbers;
}