//Write a program to sort a list of numbers in descending order (from highest to lowest).

arrayNumber =[8,4,11,7,3];//Array of number

function compare(a,b){
    return b-a;//Sorting from the highest to lowest
}
arrayNumber.sort(compare);//Sort the array

console.log(arrayNumber);//Print out the Array