// let i = prompt("entre une valeur");

// function fizzBuzz(i) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");

//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//     return i;
//   }
// }

// fizzBuzz(i);

//Écrire un programme qui renvoie :

//"fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
//"buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
//"fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
//Le nombre dans le cas où ce dernier n'est ni un multiple de 3 ni un multiple de 5

//Crée une variable, nommée question1.
//Cette variable doit contenir la chaine de caractères suivante : Quelle mer borde la ville de Sébastopol ?.

//Crée ensuite une variable solution1. Cette variable doit contenir la solution à la "question 1"... 😉

// Utilise une fonction  pour afficher le contenu de la variable question1 à l'utilisateur .
// Il faut récupérer la réponse et la mettre dans une variable reponse1.

// Après que l'utilisateur ait répondu, il faut mettre en place un test. Si la réponse
// est égale à la solution, affiche une alerte avec le message Gagné !, sinon affiche Perdu....

let score = 0;

function question(x, y) {
  if (x === y) {
    score++;
    alert("Gagné");
  } else {
    alert("Perdu");
  }
}

let question1 = "Quelle mer borde la ville de Sebastopol";
let solution1 = "La mer noire";
let reponse1 = prompt(question1);
question(solution1, reponse1);

let question2 = "quel est l'age du capitaine;";
let solution2 = 63;
let reponse2 = parseInt(prompt(question2));
question(solution2, reponse2);

//Recommence le procédé des 2 premiers exercices pour poser une autre question :

//Nouvelle variable question2, dont le contenu est Quel est l'âge du capitaine ?.

//Nouvelle variable solution2, dont le contenu est 63.
//Demander la réponse de l'utilisateur...
//Tester...
// Trouve un moyen pour compter le nombre de bonnes réponses de l'utilisateur. Une fois toutes les questions posées, affiche un message du type "Vous avez X bonnes réponses".
