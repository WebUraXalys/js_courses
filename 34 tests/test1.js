const personalPlanPeter = {
   name: "Peter",
   age: "29",
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
         js: '20%',
         php: '10%'
      },
      exp: '1 month'
   },
   showAgeAndLangs: function(obj){
      let lang = [...obj.skills.languages];
      let langStr = '';
      lang.forEach((item) => {
         langStr += `${item.toUpperCase()} `
      })
      console.log();
      return `Мне ${obj.age} и я владею языками: ${langStr}`
   }
};

//console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter)); //Мне 29 и я владею языками: RU ENG'

function showExperience(plan) {
   let {exp} = plan.skills;
   return exp;
}


function showProgrammingLangs(plan) {
   let {programmingLangs} = plan.skills;
   console.log(programmingLangs);
   let str = '';
   for (let key in programmingLangs){
      str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
   }
   return str;
}

//showExperience(personalPlanPeter); //1 month

// console.log(showProgrammingLangs(personalPlanPeter)); //"Язык js изучен на 20% Язык php изучен на 10%"