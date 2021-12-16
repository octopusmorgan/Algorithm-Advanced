/*

    Open a repl.it Javascript page and call it Algorithms Introduction Exercise 3.
    We have 3 items and we know the price for each. However, we can only buy the two least expensive items.
    Write an algorithm that takes in three user inputs and outputs the two smallest prices to the console.

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
