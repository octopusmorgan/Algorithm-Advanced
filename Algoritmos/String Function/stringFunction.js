
/**
 * 1. Create a fork of this repl.it.
 * 2. Write test cases to validate your code before you complete the exercise.
 * 3. Make sure to run your exercise and check
 * for correctness.
 */

/**
 * Exercise 1:
 * We want to check if a string is empty.
 * If a string is not empty, we want to print
 * out the first character of that string.
 * If a string is empty, print out a text saying
 * "This string is empty" 
 */
 var str = prompt("Escribe");
 function checkEmptyString(str) {
   if(str==="") {
     console.log("The string is empty");
   }
   else{
     console.log(str.charAt(0) );
   }
 }
 checkEmptyString(str);
 
 // Example test, should return a
 //checkEmptyString(cadena);
 
 /**
  * Exercise 2:
  * We want to compare two strings and check if
  * they are the same - case insensitive.
  * Return a boolean - true if the two strings are
  * the same, and false if they are not 
  */
 var c1 = prompt("First Value ");
 var c2 = prompt("Second Value");
 function compare(str1,str2){
 if(str1==str2){
   return true;
 }
 else{
   return false;
 }
 }
 compare(c1,c2);
 
 // Example test, should return true
 //checkTwoStringsSame("String1", "string1");