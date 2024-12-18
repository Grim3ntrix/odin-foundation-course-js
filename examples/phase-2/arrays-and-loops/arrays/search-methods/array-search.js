console.log("Hello World!");
console.log("\n");
console.log("*** IndexOf() ***");
console.log("The indexOf() method searches an array for an element value and returns its position.");
console.log("\n");
console.log("*** Note: ***");
console.log("The first item has position 0, the second item has position 1, and so on. ");
console.log("Example No. 1 ");
console.log("\n");
console.log("Search an array for the item 'Apple': ");
const fruits = ['Apple', 'Orange', 'Apple', 'Mango'];
console.log("fruits: ", fruits);
let a = fruits.indexOf("Apple") + 1;
console.log("a: ", a);
console.log("\n");

console.log("*** Array.lastIndexOf() ***");
console.log("Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.");
console.log("\n");
console.log("Example No. 1");
console.log("\n");
console.log("Note:");
console.log("Just refer to the fruits array in the top");
let b = fruits.lastIndexOf("Apple") + 1;
console.log("b: ", b);
console.log("\n");

console.log("*** Array.includes() ***");
console.log("ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).");
const letters = ['a', 'b', 'c', 'd'];
console.log("letters: ", letters);
let c = letters.includes('d');
console.log("c: ", c);

console.log("\n");
console.log("*** Array.find() ***");
console.log("The find() method returns the value of the first array element that passes a test function.");
console.log("This example finds (returns the value of) the first element that is larger than 18: ");
const numbers = [4, 9, 16, 25, 29];
let d = numbers.find(myFunctionD);

function myFunctionD(value, index, array) {
    return value > 18;
}

console.log("numbers: ", numbers);
console.log("d: ", d);
console.log("Note that the function takes 3 arguments:");
console.log("-> The item value");
console.log("-> The item index");
console.log("-> The array itself");

console.log("\n");

console.log("*** Array.findIndex() ***");
console.log("The findIndex() method returns the index of the first array element that passes a test function.");
console.log("This example finds the index of the first element that is larger than 18:");
console.log("Just refer to the numbers array above");
let e = numbers.findIndex(myFunctionE);
function myFunctionE(value, index, array) {
return value > 18
}
console.log("e: ", e);

console.log("Note that the function takes 3 arguments:");
console.log("-> The item value");
console.log("-> The item index");
console.log("-> The array itself");

console.log("*** Array.findLast() ***");
console.log("ES2023 added the findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.");
console.log("\n");

const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log("temp: ", temp);
console.log("high: ", high);
console.log("\n");

console.log("*** Array.findLastIndex() ***");
console.log("The findLastIndex() method finds the index of the last element that satisfies a condition.");
console.log("Just refer in the temp array");
let pos = temp.findLastIndex(x => x > 40);
console.log("pos: ", pos);
console.log("\n");