console.log("Hello World!");
console.log("\n");
console.log("***| Array Iteration Methods |***");
console.log("\n");
console.log("Array iteration methods operate on every array item:");
console.log("\n");
console.log("1. Array forEach");
console.log("The forEach() method calls a function (a callback function) once for each array element.");
console.log("\n");

const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myfunction);

function myfunction(value, index, array) {
    txt += value + "<br>";
}

console.log("numbers: ", numbers);
console.log("myfunction: ", txt);

console.log("Note that the function takes 3 arguments:");
console.log("1. The item value");
console.log("2. The item index");
console.log("3. The array itself");
console.log("\n");
console.log("The example above uses only the value parameter. The example can be rewritten to:");
console.log("Just refer to the example above. (see code)");
console.log("\n");

function myFunction(value) {
    txt += value + "<br>";
}

console.log("myFunction: ", txt);
console.log("\n");

console.log("2. Array map()");
console.log("The map() method creates a new array by performing a function on each array element.");
console.log("\n");
console.log("The map() method does not execute the function for array elements without values.");
console.log("\n");
console.log("The map() method does not change the original array");
console.log("\n");
console.log("This example multiplies each array value by 2:");
console.log("\n");

const numbers1map = [45, 4, 9, 16, 25];
const numbers2map = numbers.map(myFunctionMap);

function myFunctionMap(value, index, array) {
 return value * 2;
}

console.log("numbers1map: ", numbers1map);
console.log("numbers2map ", numbers2map);
console.log("\n");
console.log("Note that the function takes 3 arguments:");
console.log("\n");
console.log("1. The item value");
console.log("2. The item index");
console.log("3. The array itself");
console.log("\n");
console.log("When a callback function uses only the value parameter, the index and array parameters can be omitted:");
console.log("\n");
console.log("Example:");
console.log("Just refer to the example above. (see code)");

function myFunctionMap2(value) {
return value * 2;
}

console.log("numbers2map ", numbers2map);
console.log("\n");

console.log("3. Array flatMap()");
console.log("ES2019 added the Array flatMap() method to JavaScript.");
console.log("\n");
console.log("The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.");
console.log("Example:");
console.log("\n");

const myArr = [1, 2, 3, 4, 5, 6];
const NewArr = myArr.flatMap((x) => x * 2);

console.log("myArr: ", myArr);
console.log("NewArr: ", NewArr);
console.log("\n");

console.log("4. Array filter()");
console.log("The filter() method creates a new array with array elements that pass a test.");
console.log("\n");
console.log("This example creates a new array from elements with a value larger than 18:");
console.log("\n");
const nums = [45, 4, 9, 16, 25];
const over18 = nums.filter(myFunctionFilter);
function myFunctionFilter(value, index, array) {
    return value > 18
}

console.log("nums: ", nums);
console.log("myFunctionFilter: ", over18);
console.log("\n");
console.log("Note that the function takes 3 arguments:");
console.log("\n");
console.log("1. The item value");
console.log("2. The item index");
console.log("3. The array itself");
console.log("\n");
console.log("In the example above, the callback function does not use the index and array parameters, so they can be omitted:");
console.log("\n");
console.log("Example:");
console.log("Just refer to the nums array example above. (see code)")
console.log("\n");

const over18_2 = nums.filter(myFunctionFilter2);

function myFunctionFilter2(value) {
 return value > 18;
}

console.log("nums: ", nums);
console.log("myFunctionFilter: ", over18_2);
console.log("\n");

console.log("5. Array reduce()");
console.log("The reduce() method runs a function on each array element to produce (reduce it to) a single value.");
console.log("\n");
console.log("The reduce() method works from left-to-right in the array. See also reduceRight().");
console.log("\n");
console.log("The reduce() method does not reduce the original array.");
console.log("\n");
console.log("This example finds the sum of all numbers in an array:");
console.log("\n");
console.log("Just refer to the nums array example above. (see code)")
console.log("\n");

let sum = nums.reduce(myFunctionReduce);

function myFunctionReduce(total, value, index, array) {
    return total + value;
}

console.log("sum: ", sum);
console.log("\n");
console.log("Note that the function takes 4 arguments:");
console.log("\n");
console.log("1. The total (the initial value / previously returned value)");
console.log("2. The item value");
console.log("3. The item index");
console.log("4. The array itself");
console.log("\n");
console.log("The example above does not use the index and array parameters. It can be rewritten to:");
console.log("\n");
console.log("Just refer to the nums array example above. (see code)")
console.log("\n");

let sum_2 = nums.reduce(myFunctionReduce2);

function myFunctionReduce2(total, value) {
    return total + value;
}

console.log("sum_2: ", sum_2);
console.log("\n");
console.log("The reduce() method can accept an initial value:");
console.log("\n");
console.log("Just refer to the nums array and function above. (See code)");
console.log("\n");

let sum_3 = nums.reduce(myFunctionReduce2, 100);

console.log("sum_3: ", sum_3);
console.log("\n");

console.log("6. Array reduceRight()");
console.log("The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.");
console.log("\n");
console.log("The reduceRight() works from right-to-left in the array. See also reduce()");
console.log("\n");
console.log("The reduceRight() method does not reduce the original array.");
console.log("\n");
console.log("This example finds the sum of all numbers in an array:");
console.log("\n");
console.log("Just refer to the nums array example above. (see code)")
console.log("\n");

let sumReduceRight = nums.reduceRight(myFunctionReduceRight);

function myFunctionReduceRight(total, value, index, array) {
    return total + value;
}

console.log("sumReduceRight: ", sumReduceRight);
console.log("\n");
console.log("Note that the function takes 4 arguments:");
console.log("\n");
console.log("1. The total (the initial value / previously returned value)");
console.log("2. The item value");
console.log("3. The item index");
console.log("4. The array itself");
console.log("\n");
console.log("The example above does not use the index and array parameters. It can be rewritten to:");
console.log("\n");
console.log("Just refer to the nums array example above. (see code)")
console.log("\n");

let sumReduceRight2 = nums.reduceRight(myFunctionReduceRight2);

function myFunctionReduceRight2(total, value) {
    return total + value;
}

console.log("\n");
console.log("sumReduceRight2: ", sumReduceRight2);
console.log("\n");

console.log("7. Array every()");
console.log("\n");
console.log("The every() method checks if all array values pass a test.");
console.log("\n");
console.log("This example checks if all array values are larger than 18:");
console.log("\n");
console.log("Just refer to the nums array example above. (see code)")
console.log("\n");

let allOver18 = nums.every(myFunctionEvery);

function myFunctionEvery(value, index, array) {
 return value > 18;
}

console.log("allOver18: ", allOver18);
console.log("\n");
console.log("Note that the function takes 3 arguments:");
console.log("\n");
console.log("1. The item value");
console.log("2. The item index");
console.log("3. The array itself");
console.log("\n");
console.log("Just refer to the nums array example above. (see code)")
console.log("\n");

let allOver18_2 = nums.every(myFunctionEvery2);

function  myFunctionEvery2(value) {
    return value > 18;
}

console.log("allOver18_2: ", allOver18_2);
console.log("\n");
console.log("When a callback function uses the first parameter only (value), the other parameters can be omitted:");
console.log("\n");
console.log("\n");
console.log("8. Array some()");
console.log("The some() method checks if some array values pass a test.");
console.log("\n");
console.log("This example checks if some array values are larger than 18:");
console.log("\n");
console.log("Just refer to the nums array example above. (see code)")
console.log("\n");

let someOver18 = nums.some(myFunctionSome);

function myFunctionSome(value, index, array) {
    return value > 18;
}

console.log("someOver18: ", someOver18)
console.log("\n");

console.log("Note that the function takes 3 arguments:");
console.log("1. The item value");
console.log("2. The item index");
console.log("3. The array itself");

console.log("\n");

console.log("9. Array from()");
console.log("\n");
console.log("The Array.from() method returns an Array object from any object with a length property or any iterable object.");
console.log("\n");
console.log("Example");
console.log("Create an Array from a String:");
console.log("\n");
const arrayFrom = Array.from("ABCDEFG");
console.log("arrayFrom: ", arrayFrom);
console.log("\n");

console.log("10. Array keys()");
console.log("The Array.keys() method returns an Array Iterator object with the keys of an array.");
console.log("\n");
console.log("Example");
console.log("Create an Array Iterator object, containing the keys of the array:");
console.log("\n");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits: ", fruits);
const keys = fruits.keys();

console.log("keys: ", keys);

let text = "";

for (let x of keys) {
    text += x + "<br>";
}

console.log("text: ", text);

console.log("\n");
console.log("11. Array entries()");
console.log("\n");
console.log("Example");
console.log("Create an Array Iterator, and then iterate over the key/value pairs:");
console.log("\n");
console.log("Just refer to the fruits array above.");

const f = fruits.entries();

for (let x of f) {
    const entries = document.getElementById("demo").innerHTML += "<br>" + x + "<br/>";
}

console.log("\n");
console.log("The entries() method returns an Array Iterator object with key/value pairs:");
console.log("\n");
console.log("[0, 'Banana']");
console.log("[1, 'Orange']");
console.log("[2, 'Apple']");
console.log("[3, 'Mango']");
console.log("\n");
console.log("The entries() method does not change the original array.");
console.log("\n");
console.log("12. Array with()");
console.log("ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.");
console.log("\n");

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

console.log("months: ", months);
console.log("myMonths: ", myMonths);

console.log("\n");
console.log("13. Array Spread (...)");
console.log("The ... operator expands an iterable (like an array) into more elements:");
console.log("\n");
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4,];

console.log("q1: ", q1);
console.log("q2: ", q2);
console.log("q3: ", q3);
console.log("q4: ", q4);
console.log("year: ", year);
console.log("\n");
console.log("... is an ES6 feature (JavaScript 2015).");
console.log("\n");

