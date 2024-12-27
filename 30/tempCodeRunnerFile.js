function learnJs(lang, callback){
   callback();
   setTimeout(function () {
      console.log(1);
   }, 500);
   console.log(`Я вчу: ${lang}`);
   callback();
}
function done(){
   console.log("Сьогодні я пройшов урок");
   setTimeout(function () {
      console.log(2);
   }, 500);
   console.log(3);
}

learnJs("JS", done);