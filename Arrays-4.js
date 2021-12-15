//Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];

//Compare if the strings are the same of each index and print the common courses
function compare(){
    if(student1Courses[0]===student2Courses[0])
    {
        console.log(student1Courses[0] + " " + student2Courses[0]);
    }
    else if(student1Courses[0]===student2Courses[1])
    {
        console.log(student1Courses[0] + " " + student2Courses[1]);
    }
    else if(student1Courses[0]===student2Courses[2])
    {
        console.log(student1Courses[0] + " " + student2Courses[2]);
    }
    else if(student1Courses[1]===student2Courses[0])
    {
        console.log(student1Courses[1] + " " + student2Courses[0]);
    }
    else if(student1Courses[1]===student2Courses[1])
    {
        console.log(student1Courses[1] + " " + student2Courses[1]);
    }
    else if(student1Courses[1]===student2Courses[2])
    {
        console.log(student1Courses[1] + " " + student2Courses[2]);
    }
    else if(student1Courses[2]===student2Courses[0])
    {
        console.log(student1Courses[2] + " " + student2Courses[0]);
    }
    else if(student1Courses[2]===student2Courses[1])
    {
        console.log(student1Courses[2] + " " + student2Courses[1]);
    }
    else if(student1Courses[2]===student2Courses[2])
    {
        console.log(student1Courses[2] + " " + student2Courses[2]);
    }

}
compare();