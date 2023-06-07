function firstTask() {
   const arr = [3, 5, 8, 16, 20, 23, 50];
   const result = [];
   console.log(arr.length);
   for(let i = 0; i < arr.length; i++){
      result[i] = arr[i];
   }
   console.log(result);

   return result;
}

firstTask();

function secondTask() {
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   for(let i = 0; i < data.length; i++){
      if(typeof(data[i]) === "number"){
         data[i] =+ data[i]*2;
         console.log(data[i]);
      }else if(typeof(data[i]) === "string"){
         data[i] = data[i] + ' - done';
      }
   }
   console.log(data);
   
   return data;
}

function thirdTask() {
   const data = [5, 10, 'Shopping', 20, 'Homework'];
   const result = [];

   for(let i = 0; i < data.length; i++){
      result[i] = data[(data.length-1) - i];
   }
   console.log(result);
    
   return result;
}