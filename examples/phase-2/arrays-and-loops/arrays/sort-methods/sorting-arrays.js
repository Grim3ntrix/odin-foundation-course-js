console.log("Hello World!");

console.log("***| Alphabetic Sort |***");
console.log("\n");

console.log("No.1: Array sort()");
console.log("The sort() method sorts an array alphabetically:");
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log("fruits: ", fruits);
fruits.sort();
console.log("a. fruitsSort: ", fruits);
console.log("\n");

console.log("No.2: Array reverse()");
console.log("The reverse() method reverses the elements in an array:");
console.log("Just refer into the fruits array above");
fruits.reverse();
console.log("b. fruitsReverse: ", fruits);
console.log("\n");

console.log("NOTE: ");
console.log("By combining sort() and reverse(), you can sort an array in descending order:");
console.log("\n");
const alphabets = ['a', 'b', 'c', 'd'];
alphabets.sort();
alphabets.reverse();
console.log("c. Descending: ", alphabets);
console.log("\n");

console.log("No.3: Array toSorted()");
console.log("ES2023 added the toSorted() method as a safe way to sort an array without altering the original array.");
console.log("The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.");
console.log("\n");
const months = ['Jan', 'Feb', 'Mar', 'Apr'];
console.log("months: ", months);
const sorted = months.toSorted();
console.log("sorted: ", sorted);
console.log("\n");

console.log("No.4: Array toReversed()");
console.log("ES2023 added the toReversed() method as a safe way to reverse an array without altering the original array.");
console.log("The difference between toReversed() and reverse() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.");
console.log("Just refer into the months array above");
const toReverse = months.toReversed();
console.log("toReverse: ", toReverse);
console.log("\n");

console.log("No.5: Sorting Objects");
console.log("JavaScript arrays often contain objects:");
console.log("\n");

const cars = [
    {type: "Volvo", year: 2026},
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010},
];

console.log("cars: ", cars);

const carsCopy1 = [
    {type: "Volvo", year: 2026},
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010},
];

const carsCopy2 = [
    {type: "Volvo", year: 2026},
    {type: "Saab", year: 2001},
    {type: "BMW", year: 2010},
];

console.log("\n");
console.log("Even if objects have properties of different data types, the sort() method can be used to sort the array.");
console.log("\n");
console.log("The solution is to write a compare function to compare the property values:");
let objSort = carsCopy1.sort(function(a, b) {return a.year - b.year});
console.log("objSort: ", objSort);
console.log("\n");

console.log("Comparing string properties is a little more complex:");
console.log("Example:");
console.log("\n");

let compareStringToSortObj = carsCopy2.sort(function(a, b) {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

console.log("compareStringToSortObj: ", compareStringToSortObj);
console.log("\n");

console.log("\n");
console.log("5.1. Stable Array sort()");
console.log("ES2019 revised the Array sort() method.");
console.log("Before 2019, the specification allowed unstable sorting algorithms such as QuickSort.");
console.log("After ES2019, browsers must use a stable sorting algorithm:");
console.log("When sorting elements on a value, the elements must keep their relative position to other elements with the same value.");
console.log("\n");

const myArr = [
    {name:"X00",price:100 },
    {name:"X01",price:100 },
    {name:"X02",price:100 },
    {name:"X03",price:100 },
    {name:"X04",price:110 },
    {name:"X05",price:110 },
    {name:"X06",price:110 },
    {name:"X07",price:110 }
  ];

let stableArrSort = myArr.sort((p1, p2) => {
    if (p1.price < p2.price) {return -1}
    if (p1.price > p2.price) {return 1}
    return 0;
})

let text = "";
myArr.forEach(myFunction);
function myFunction(value) {
    text += value.name + " " + value.price + "<br>";
}

document.getElementById("demo").innerHTML = text;

console.log("myArr: ", myArr);
console.log("NOTE:");
console.log("In the example above, when sorting on price, the result is not allowed to come out with the names in an other relative position like this:");


console.log("myArrSort: ", text);
console.log("\n");

console.log("***| Numeric Sort |***");

console.log("\n");

console.log("No.1:Numeric Sort");
console.log("By default, the sort() function sorts values as strings.");
console.log("If numbers are sorted as strings, '25' is bigger than '100', because '2' is bigger than '1'.");
console.log("Because of this, the sort() method will produce incorrect result when sorting numbers.");
console.log("You can fix this by providing a compare function:");
console.log("\n");

const points = [40, 100, 1, 5, 25, 10];
console.log("points: ", points);
points.sort(function(a, b){return a - b});
console.log("SortedPointsResult: ", points);
console.log("\n");

console.log("Use the same trick to sort an array descending:");
console.log("Just refer in the points array.");

points.sort(function(a, b){return b - a});
console.log("points: ", points);

console.log("\n");

console.log("The Compare Function");
console.log("The purpose of the compare function is to define an alternative sort order.");
console.log("The compare function should return a negative, zero, or positive value, depending on the arguments:");
console.log("-> function(a, b){return a - b}");
console.log("\n");

console.log("When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.");
console.log("If the result is negative, a is sorted before b.");
console.log("If the result is positive, b is sorted before a");
console.log("If the result is 0, no changes are done with the sort order of the two values");
console.log("\n");
console.log("Example:");
console.log("The compare function compares all the values in the array, two values at a time (a, b).");
console.log("\n");
console.log("When comparing 40 and 100, the sort() method calls the compare function(40, 100).");
console.log("\n");
console.log("The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.");
console.log("\n");
console.log("You can use this code snippet (Alphabetically and Numerically) to experiment with numerically and alphabetically sorting:");
console.log("\n");

document.getElementById("demoCompareFunc").innerHTML = points;

function myFunction1() {
    points.sort();
    document.getElementById("demoCompareFunc").innerHTML = points
}

function myFunction2() {
    points.sort(function(a, b){return a - b});
    document.getElementById("demoCompareFunc").innerHTML = points;
}

console.log("\n");

console.log("No.2: Random Sort");
console.log("Using a sort function, like explained above, you can sort an numeric array in random order");
console.log("just refer in the points array.");
points.sort(function(){return 0.5 - Math.random()});
console.log("points: ", points);
console.log("\n");

console.log("The Fisher Yates Method");
console.log("The points.sort() method in the example above is not accurate. It will favor some numbers over others.");
console.log("The most popular correct method, is called the Fisher Yates shuffle, and was introduced in data science as early as 1938!");
console.log("In JavaScript the method can be translated to this:");
console.log("\n");
for (let i = points.length -1; i > 0; i--) {
 let j = Math.floor(Math.random() * (i+1));
 let k = points[i];
 points[i] = points[j];
 points[j] = k;
}
console.log("points: ", points);
console.log("\n");

console.log("Find the Lowest (or Highest) Array Value");
console.log("There are no built-in functions for finding the max or min value in an array.");
console.log("To find the lowest or highest value you have 3 options:");
console.log("1. Sort the array and read the first or last element");
console.log("2. Use Math.min() or Math.max()");
console.log("3. Write a home made function");
console.log("\n");

console.log("Find Min or Max with sort()");
console.log("Sort Ascending:");
console.log("Just refer in the points array.");
points.sort(function(a, b){return a - b});
console.log("\n");
console.log("points: ", points);
console.log("\n");
console.log("// now points[0] contains the lowest value");
console.log("// and points[points.length-1] contains the highest value");
console.log("\n");

console.log("Note");
console.log("Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value.");
console.log("\n");

console.log("No.3: Math.min()");
console.log("You can use Math.min.apply to find the lowest number in an array:");
console.log("\n");

const arr = [10, 9, 20, 40, 30];

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

console.log("arr: ", arr);
console.log("myArrayMin: ", myArrayMin(arr));

console.log("\n");
console.log("Math.min.apply(null, [1, 2, 3]) is equivalent to Math.min(1, 2, 3).");
console.log("\n");

console.log("No.4: Math.max()");
console.log("You can use Math.max.apply to find the highest number in an array:");
console.log("Just refer in the arr array above.");

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}

console.log("myArrayMax: ", myArrayMax(arr));
console.log("Math.max.apply(null, [1, 2, 3]) is equivalent to Math.max(1, 2, 3).");
console.log("\n");

console.log("No.5: Home made Min()");
console.log("JavaScript Array Minimum Method");
console.log("There is no built-in function for finding the lowest value in a JavaScript array.");
console.log("The fastest code to find the lowest number is to use a home made method.");
console.log("This function loops through an array comparing each value with the lowest value found:");
console.log("Just refer in the arr array above.");
console.log("\n");

function myArrayMinHM(arr) {
 let len = arr.length;
 let min = Infinity;
 console.log("len: ", len);
 console.log("min: ", min);
 while (len--) {
    console.log("arr[len]: ", arr[len]);
    if (arr[len] < min) {
        min = arr[len];
    }
 }
 return min;
}

console.log("myArrayMinHM: ", myArrayMinHM(arr));
console.log("\n");

console.log("No.6: Home made Max()");
console.log("JavaScript Array Maximum Method");
console.log("There is no built-in function for finding the highest value in a JavaScript array.");
console.log("The fastest code to find the highest number is to use a home made method.");
console.log("This function loops through an array comparing each value with the highest value found:");
console.log("\n");

function myArrayMaxHM(arr) {
    let len = arr.length;
    let max = -Infinity;
    console.log("len: ", len);
    console.log("min: ", max);
    while (len--) {
        console.log("arr[len]: ", arr[len]);
        if (arr[len] > max) {
            max = arr[len]
        }
    }
    return max;
}

console.log("myArrayMaxHM: ", myArrayMaxHM(arr));
console.log("\n");