function getTimeFromMinutes(time) {
   let hour;
   if (typeof(time) !== "number" || time < 0 || !Number.isInteger(time)){
      return (`Ошибка, проверьте данные`);
   }
   if (time < 60) {
      return(`Это 0 часов и ${time} минут`);
   } else if( time < 60*2){
      return(`Это ${hour =  Math.floor(time/60)} час и ${time % 60} минут`);
   }else if (time < 5*60){
      return(`Это ${hour =  Math.floor(time/60)} часа и ${time - hour*60} минут`);
   } else if (time <= 10*60) {
      return(`Это ${hour =  Math.floor(time/60)} часов и ${time % 60} минут`);
   }
}

console.log(getTimeFromMinutes(599)); 


function findMaxNumber(a, b, c, d) {
   if (typeof(a, b, c, d) !== "number") {
      return 0;
   } else{
      return Math.max(a, b, c, d);
   }
}
console.log(findMaxNumber(1, 5, 6.6, '11'));


// findMaxNumber(1, 5, 6.6, 11); =>  11

// findMaxNumber(1, 5, '6', '10');  =>  0