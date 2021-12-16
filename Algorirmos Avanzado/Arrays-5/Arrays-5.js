/*
For each of the exercises below, assume you are starting with the following people array.

var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

    Write a command that prints out all of the people in the list.
    Write the command to remove "Dani" from the array.
    Write the command to remove "Juan" from the array.
    Write the command to add "Luis" to the front of the array.
    Write the command to add your name to the end of the array.
    Using a loop, iterate through this array and after console.log-ing "Maria", exit from the loop.
    Write the command that gives the indexOf where "Maria" is located.

At the end of the exercise, there should be 4 people in the array.
*/
var people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

function printAll(){ //Print the original array
    console.log(people);
}
function removeDani(){//remove the index of Dani
    people.splice(1,1);
    console.log(people);
}

function removeJuan(){//Remove the index of Juan
    people.splice(2,1);
    console.log(people);
}
function addLuisFront(){//Add Luis to the front of the array
    people.splice(1,1);
    
    people.unshift("Luis");
    console.log(people);
}
function addName(){//Add my name to the end of the array
    people.push("Alonso");
    console.log(people);
}
printAll(); 

//Print functions
console.log("Remove Dani");
removeDani();

console.log("Remove Juan");
removeJuan();

console.log("Add Luis to the front");
addLuisFront();

console.log("Add my name to the end");
addName();