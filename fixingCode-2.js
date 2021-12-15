/*
Copy and paste the code below into a repl.it (set to Javascript).
Make sure to run the program to understand what it currently outputs.
Write test cases and fix the code according to the expected output.

Output should be: Failed if they scored 6 or less Insufficient if they scored > 6 but less than 9. (9 included) Good if they scored > 9 but less than 14. (14 included) Excellent if they scored 15. Error if participants enter a negative number or a number outside the range supported (outside 0 - 15)
*/
function gradeLabel(grade) {
    //less than or equal to 6 and greater than or equal to zero 
    if (grade <= 6 && grade >= 0) { 
        console.log("Failed");
    }
    //greater than 6 and less than or equal to 9
    if (grade > 6 && grade <= 9) {
        console.log("Insufficient");
    }
    //greater than 9 and less or equal to 14
    if (grade > 9 && grade <= 14) {
        console.log("Good");
    }
    //equal to 15
    if (grade == 15) {
        console.log("Excellent");
    }
    //less than 0 or greater than 15
    if (grade < 0 || grade > 15) {
        console.log("Error, outside of bounds");
    }
}
gradeLabel(5);