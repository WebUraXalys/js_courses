function copy(mainObj) {
   let copyObj = {};

   let k;
   console.log(k);
   for(k in mainObj){
      copyObj[k] = mainObj[k];
      console.log(k);
   }
   return copyObj;
}

const number = {
   a: 3,
   b: 5,
   c: 32,
   d: {
      a1: 10,
      a2: 20
   }  
};

const newNumber = copy(number);

console.log(newNumber);