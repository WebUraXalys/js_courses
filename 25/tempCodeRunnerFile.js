function getMathResult(num, progres){
   // if(typeof(num) != "number" || typeof(progres) != "number") return num;
   // if(progres <= 0) return num;
   if(typeof(num) !== "number" || typeof(progres) !== "number" || progres <= 0) return num;
   let str = "";
   for(let i = 1; i <= progres; i++){
      if(i == progres){
         // str = str + (num * i);
         str += num*i
      } else{
         // str = str + (num * i) + "---";
         str += `${num * i}---`;
      }
   }
   return str;
};
console.log(getMathResult(10, 4));