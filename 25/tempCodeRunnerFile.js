function getMathResult(num, progres){
   let str = "";
   if(typeof(num) != "number" || typeof(progres) != "number"){
      str = num;
      return str;
   } else{
   if(progres <= 0) return num;
   for(let i = 1; i <= progres; i++){
      if(i == progres){
         str = str + (num * i);
      } else{
         str = str + (num * i) + "---";
      }
   }
   return str;
   };
};
console.log(getMathResult(10, -4));