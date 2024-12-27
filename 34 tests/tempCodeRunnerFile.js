const someString = 'This is some strange string';

function reverse(str) {
   //str = str.trim();
   if(!str || typeof(str) !== "string"){
      return 'Ошибка!'
   }
   let reverseStr = '';
   for (let i = str.length - 1; i >= 0; i-- ){
      reverseStr += str[i];
   }
   return reverseStr;
}
console.log(reverse(someString)); //'gnirts egnarts emos si sihT

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   if(!arr || arr.length == 0){
      return 'Нет доступных валют';
   }
   let str = 'Доступные валюты:';
   arr.forEach(item => {
      if (item !== missingCurr){
         str += `\n${item} `;
      }
   })
   return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));