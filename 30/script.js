"use strict";

function first(){
   setTimeout(function() {
      console.log(1);
   }, 500);
}
function second(){
   console.log(2);
}

first();
second();

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
      console.log(1);
   }, 500);
}

learnJs("JS", done);