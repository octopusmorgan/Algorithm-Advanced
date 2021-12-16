/**
 * 1. Create a fork of this repl.it.
 * 2. Write test cases to validate your code before you complete the exercise.
 * 3. Make sure to run your exercise and check
 * for correctness.
 */

/**
 * Exercise #1
 * Create a function that takes in one number
 * and checks if the number is greater than  10. Print out to the console true if it is greater and false otherwise.
 */

function greater(num) {
  var num = prompt("Number:");
  if (num > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(greater());

/**
 * Exercise #2
 * Create a function that takes in one number
 * and checks if it is divisible by 4 or divisible by 9.
 * Print out to the console true if a number
 * if divisible by 4 or 9, and false if a
 * number is not divisible by either number.
 */

function div() {
  var numero = prompt("Dime un numero: ");
  if (numero % 4 == 0 || numero % 9 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(div());

/** Exercise 3

 * We have 3 items and we know the price for each. However, we can only buy the two least expensive items.
 * Write an algorithm that takes in three user inputs and outputs the two smallest prices to the console.

*/
item1 = prompt("Item 1:");
item2 = prompt("Item 2:");
item3 = prompt("Item 3:");
items = [item1, item2, item3];
function smallPrice(a, b) {
  return a - b;
}
items.sort(smallPrice);
console.log("The smallest price are : ", items[0], items[1]);
