const solder = {
   health: 400,
   armor: 100,
   sayHello: function() {
      console.log("Hello");
   }
}

// const jonh = {
//    health: 100
// }

//jonh.__proto__ = solder; Застаріле

//Object.setPrototypeOf(jonh, solder) // встановлюємо прототип для джона від солдата, тобто джон має всі ті самі можливості що і солдат


const jonh = Object.create(solder);

console.log(jonh.armor);
jonh.sayHello();
