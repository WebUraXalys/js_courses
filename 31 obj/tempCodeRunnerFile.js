
const pandas = {
   name: "Piter",
   surname: "Anderson",
   old: 22,
   love: "NONONO",
   smart: 200,
   character: {
      strong: "Yap",
      lazy: "no"
   },
   writing: function(){
      console.log("YOU ARE NOT LOSER!");
   },
   length: function(){
      console.log(Object.keys(pandas).length);
   },
   get getLength(){
      return  Object.keys(pandas).length;
   },
   get fullName(){
      return `${this.name} ${this.surname}`
   },
   set fullName(value){
      [this.name, this.surname] = value.split(" ");
   },
   get name() {
      return this._name;
   },

   set name(value) {
      if (value.length < 4) {
         alert("Имя слишком короткое, должно быть более 4 символов");
         return;
      }
      this._name = value;
   }
}
 
pandas.length();
console.log(pandas.getLength);

pandas.fullName = "Yura Khan";

// delete pandas.love;


// const {strong, lazy} = pandas.character; // Деструкція
// const {strong, ...size} = pandas.character; 
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
         console.log(`key: ${i}, value: ${pandas[key][i]}`);
         counter++;
      }
   } else{
      console.log(`key: ${key}, value: ${pandas[key]}`);
      counter++;
   }
}
console.log(counter); 
console.log(Object.keys(pandas));
console.log(Object.keys(pandas).length);




