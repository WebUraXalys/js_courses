/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const moveDB = {
   privat: false,
   toggleVisibleMyDB: function(){
      // if(!this.privat){
      //    this.privat = true;
      // } else{
      //    this.privat = false;
      // }
      this.privat = !this.privat;
   }
}
let numberOfFilms;
// const personalMoveDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
   
// };

// Object.setPrototypeOf(personalMoveDB, moveDB);

const personalMoveDB = Object.setPrototypeOf({
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],

}, moveDB)



function rememberMyFilm() {
   for (let i = 0; i < numberOfFilms; i++) {
      const question = prompt("Ваш останній прегелянутий фільм?", '').trim(), // видаляє пробіли в кінці і cпереді але один пробіл між словами не видаляє
         level = prompt("Наскільки ви його оцінете?", '');
      if (question == "" || level == "" || question == null || level == null || question.length > 50 || level.length > 50) {
         i--;
      } else {
         personalMoveDB.movies[question] = level;
      }
   }
}
rememberMyFilm();

function detectPersonalLevel() {
   if (personalMoveDB.count > 0 && personalMoveDB.count < 10) {
      alert("Просмотрено довольно мало фильмов")
   } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
      alert("Вы классический зритель");
   } else if (personalMoveDB.count >= 30) {
      alert("Вы киноман");
   } else {
      alert("Произошла ошибка")
   }
}
detectPersonalLevel();

function showMyDB(obj) {
   if (!obj.privat) { //privat === false
      console.log(obj);
   } else{
      obj.toggleVisibleMyDB();
      console.log(obj);
   }
}
showMyDB(personalMoveDB);