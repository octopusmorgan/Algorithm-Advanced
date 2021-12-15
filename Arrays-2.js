/*
Write a function that:

    Takes in an array of numbers.
    Doubles the value of each number in the array.
    Prints out the new updated array.

Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/

arrayNumber = [1, 2, 4, 5];
function doubleValue(){//Duplicates the value of each index and saves it
    arrayNumber[0] = arrayNumber[0]*2;
    arrayNumber[0] = arrayNumber[1]*2;
    arrayNumber[0] = arrayNumber[2]*2;
    arrayNumber[0] = arrayNumber[3]*2;
    console.log(arrayNumber);//Print the new Array 
}
console.log(arrayNumber); //Print the original Array
doubleValue();