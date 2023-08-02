'use strict';

//створити функцію showMyDB перепвіряє приват якщо фолс то виводить головний обєкт



let numberOfFilms;
function start(){
   numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", ''); // після коми вказуємо що подефолту в нас пуста стрічка, а + перед промпт це унарний+ який перетворює стрічку в число
   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
      numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", '');
   }
}
start();

const personalMoveDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false 
};

function rememberMyFilm() {
   for(let i = 0; i < numberOfFilms; i++){
   const question = prompt("Ваш останній прегелянутий фільм?", ''),
      level = prompt("Наскільки ви його оцінете?", '');
   if (question == "" || level == "" || question == null || level == null || question.length > 50 || level.length > 50 ){
      i--;
   } else{
      personalMoveDB.movies[question] = level;
   }
}
}
rememberMyFilm();


function detectPersonalLevel() {
   if (personalMoveDB.count > 0 &&personalMoveDB.count < 10){
      alert("Просмотрено довольно мало фильмов")
   } else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30){
      alert("Вы классический зритель");
   } else if(personalMoveDB.count >= 30){
      alert("Вы киноман");
   } else{
      alert("Произошла ошибка")
   }
}
detectPersonalLevel();

function showMyDB(privat) {
    if (!privat) { //privat === false
      console.log(personalMoveDB);
   } 
}
showMyDB(personalMoveDB.privat);

function writeYourGenres(genre){
   for(let i = 1; i <= 3; i++){
      genre[i - 1] = prompt(`Ваш любимий жанр під підномером ${i}`);
   }
}
writeYourGenres(personalMoveDB.genres);

// console.log(personalMoveDB);