/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.

Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

var arrayNumber = [1,2,3,4];

function calculate(){
    sum = arrayNumber[0] + arrayNumber[1] + arrayNumber[2] + arrayNumber[3];
    //Calculate the sum of the array
    console.log("La suma de los numeros es : " + sum);
    //Print the sum

    multi = arrayNumber[0] * arrayNumber[1] * arrayNumber[2] * arrayNumber[3];
    //Calculate the product of the array
    console.log("La suma de los numeros es : " + multi);
    //Print the product
}

calculate();