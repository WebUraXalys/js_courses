const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   let str = '';
   if(arr.length == 0){
      str = 'Семья пуста';
   } else {
      str = 'Семья состоит из: ';
      arr.forEach(item => {
         str += `${item} `;
      });
   }
   return str;
}
console.log(showFamily(family)); //Семья состоит из: Peter Ann Alex Linda'

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   arr.forEach(item =>{
      console.log(item.toLowerCase());
   })
}
standardizeStrings(favoriteCities);

