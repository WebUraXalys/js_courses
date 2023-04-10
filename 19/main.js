const numberOfFilms = +prompt("Скільки фільмів ви вже переглянули?", ''); // після коми вказуємо що подефолту в нас пуста стрічка, а + перед промпт це унарний+ який перетворює стрічку в число


const personalMoveDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false 
};

const question = prompt("Ваш останній прегелянутий фільм?", ''),
      question2 = prompt("Наскільки ви його оцінете?", '');
const question3 = prompt("Ваш останній прегелянутий фільм?", ''),
      question4 = prompt("Наскільки ви його оцінете?", '');

personalMoveDB.movies[question] = question2;
personalMoveDB.movies[question3] = question4;

console.log(personalMoveDB);
