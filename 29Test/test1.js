// Место для первой задачи
function calculateVolumeAndArea(a) {
   if(typeof(a) !== "number" || a <= 0 || Number.isInteger(a) !== true) return 'При вычислении произошла ошибка';
   return `Объем куба: ${a*a*a}, площадь всей поверхности: ${6*a*a}`;
}
console.log(calculateVolumeAndArea(5.5)); 


// Место для второй задачи
function getCoupeNumber(seat) {
   if(typeof(seat) === 'string' || Number.isInteger(seat) === false || seat < 0) return 'Ошибка. Проверьте правильность введенного номера места';
   if(seat <= 0 || seat > 36 ) return 'Таких мест в вагоне не существует';
   return Math.ceil(seat/4);
}
console.log(getCoupeNumber(-10));

// console.log(Number.isInteger(7));