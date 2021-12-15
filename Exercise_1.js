//Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.

function largest() {
    arrayNumber = [3, 5, 7, 1, 6]; //Array of numbers
    aux = 0;//Auxiliar variable for save de largest number
    if (arrayNumber[0] > aux) { //Check if the if number is more largest
    aux = arrayNumber[0];
} 
    if (arrayNumber[1] > aux) {
    aux = arrayNumber[1];
}

    if (arrayNumber[2] > aux) {
    aux = arrayNumber[2];
}

    if (arrayNumber[3] > aux) {
    aux = arrayNumber[3];
}
    if (arrayNumber[4] > aux) {
    aux = arrayNumber[4];
}
    return aux;//Return the value
}
largest();
console.log("The largest number is : " + aux); //Print out the largest number
