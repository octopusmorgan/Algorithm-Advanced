/*
    Open a repl.it Javascript page and call it Algorithms Introduction Exercise 2.
    Write an algorithm to find the largest among 5 different numbers entered by the user.
    Print out the largest number to the console.
*/

let num1 =parseInt(prompt("Ingrese el numero 1 : "));
let num2 =parseInt(prompt("Ingrese el numero 2 : "));
let num3 =parseInt(prompt("Ingrese el numero 3 : "));
let num4 =parseInt(prompt("Ingrese el numero 4 : "));
let num5 =parseInt(prompt("Ingrese el numero 5 : "));

var max =Math.max(num1,num2,num3,num4,num5);

console.log(max);