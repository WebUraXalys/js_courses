
const pandas = {
   name: "Anderson",
   old: 22,
   love: "NONONO",
   smart: 200,
   character: {
      strong: "Yap",
      lazy: "no"
   },
   writing: function(){
      console.log("YOU ARE NOT LOSER!");
   }
}

// const {strong, lazy} = pandas.character;
// const {strong, ...size} = pandas.character; // Деструкція
// console.log(size);

// console.log(strong, lazy);
// console.log(pandas.character.lazy);
// console.log(pandas["character"]["strong"]);

// pandas.writing();


// let [, , title] = "Юлий Цезарь Император Рима".split(" "); // Деструкція
// let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

// console.log(rest);

let counter = 0;
for(let key in pandas){
   if (typeof(pandas[key]) === "object"){
      counter++;
      for(let i in pandas[key]){
         console.log(i);
         counter++;
      }
   } else{
      console.log(key);
      counter++;
   }
}
console.log(counter); 
console.log(Object.keys(pandas));
console.log(Object.keys(pandas).length);




