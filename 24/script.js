/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", ''); // після коми вказуємо що подефолту в нас пуста стрічка, а + перед промпт це унарний+ який перетворює стрічку в число

const personalMoveDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false 
};

// for(let i = 0; i < numberOfFilms; i++){
//    const question = prompt("Ваш останній прегелянутий фільм?", ''),
//       level = prompt("Наскільки ви його оцінете?", '');
//    if (question == "" || level == "" || question == null || level == null || question.length > 50 || level.length > 50 ){
//       i--;
//    } else{
//       personalMoveDB.movies[question] = level;
//    }
// }
let i = 0;
// while (i < numberOfFilms) {
//    const question = prompt("Ваш останній прегелянутий фільм?", ''),
//          level = prompt("Наскільки ви його оцінете?", '');
//    if(question != null && level != null && question != "" && level != ""){
//       i++;
//       personalMoveDB.movies[question] = level;
//    } 
// }

do {
   const question = prompt("Ваш останній прегелянутий фільм?", ''),
         level = prompt("Наскільки ви його оцінете?", '');
   if(question != null && level != null && question != "" && level != ""){
      i++;
      personalMoveDB.movies[question] = level;
      console.log(i);
   } 
} while (i < numberOfFilms);


if (personalMoveDB.count > 0 &&personalMoveDB.count < 10){
   alert("Просмотрено довольно мало фильмов")
} else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30){
   alert("Вы классический зритель");
} else if(personalMoveDB.count >= 30){
   alert("Вы киноман");
} else{
   alert("Произошла ошибка")
}




console.log(personalMoveDB);