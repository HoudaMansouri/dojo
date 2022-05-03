let i = prompt("entre une valeur");

function fizzBuzz(i) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzBuzz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(i);
    return i;
  }
}

fizzBuzz(i);

//Écrire un programme qui renvoie :

//"fizz" dans le cas où le nombre passé en paramètre est un multiple de 3
//"buzz" dans le cas où le nombre passé en paramètre est un multiple de 5
//"fizzbuzz" dans le cas où le nombre passé est à la fois un multiple de 3 et de 5
//Le nombre dans le cas où ce dernier n'est ni un multiple de 3 ni un multiple de 5
