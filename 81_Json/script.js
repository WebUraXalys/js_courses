'use strict';

const person = {
   name: "John",
   age: 30,
   isMarried: false,
   perents: {
      mother: "Jane",
      father: "Jack"
   }
};
let clone = person;
let clone1 = JSON.parse(JSON.stringify(person));
person.isMarried = true;
console.log(clone);
console.log(clone1);