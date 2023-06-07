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