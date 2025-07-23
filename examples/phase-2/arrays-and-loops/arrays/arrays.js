console.log("Hello World!");

console.log("\n");
console.log("----- Arrays: -----");
console.log("######### 1. JavaScript Arrays from W3Schools #########");
console.log("\n");

console.log("$$$$$$===###)>>> a). Creating an Arrays:");
// const cars = ['Saab', 'Volvo', 'BMW'];
const cars = [];
cars[0] = 'Saab';
cars[1] = 'Volvo';
cars[2] = 'BMW';
console.log(cars);
console.log("\n");

console.log("$$$$$$===###)>>> b). Using Javascript keyword 'new':");
const fruits = new Array( 'Avocado', 'Banana', 'Orange');
console.log(fruits);
console.log("\n");

console.log("$$$$$$===###)>>> c). Accessing Array Elements:");
let laptops = [ 'Acer', 'Lenovo', 'HP']
let laptop = laptops[0];
console.log(laptop);
console.log("\n");

console.log("$$$$$$===###)>>> d). Changing an Array Elements:");
const phones = ['OPPO', 'Samsung', 'iPhone'];
phones[0] = 'VIVO';
console.log(phones);
console.log("\n");

console.log("$$$$$$===###)>>> e). Converting an Array to String:");
const shoes = ['Nike', 'Adidas', 'PUMA']
let shoesToString = document.getElementById("shoes").innerHTML = shoes.toString();
console.log(shoesToString);
console.log("\n");

console.log("$$$$$$===###)>>> f). Access the Full Array:");
const bags = ['Dior', 'Prada', 'Balenciaga'];
let bagsToString = document.getElementById("bags").innerHTML = bags;
console.log(bagsToString);
console.log("\n");

console.log("$$$$$$===###)>>> g). Arrays are Objects:");
console.log("*** 1. Array:");
const person = ['John', 'Doe', '46'];
console.log(person);
console.log(person[0]);

console.log("*** 2. Object:");
const animal = {bird:'Eagle', region:'Philippines', population:'46'};
console.log(animal.bird);
console.log("\n");

console.log("$$$$$$===###)>>> h). Array Elements can be Objects:");
let myFunction = '';
let myCar = '';
const myArray = [];
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCar;
console.log(myArray);
console.log("\n");

console.log("$$$$$$===###)>>> i). Array Properties and Methods:");
console.log("*** 1. The length Property:");
const virtualAssistants = ['Amazon Alexa', 'Apple Siri', 'Mocrosoft Cortana'];
console.log(virtualAssistants);
console.log("Length: ", virtualAssistants.length);
console.log("\n");

console.log("$$$$$$===###)>>> j). Accessing the First Array Elements:");
console.log("*** 1. Refer in letter 'i' examples:");
let VA1 = virtualAssistants[0];
console.log(VA1);
console.log("\n");

console.log("$$$$$$===###)>>> j). Accessing the Last Array Elements:");
console.log("*** 1. Refer in letter 'i' examples:");
let VA3 = virtualAssistants[virtualAssistants.length - 1];
console.log(VA3);
console.log("\n");

console.log("$$$$$$===###)>>> k). Looping Array Elements:");
const freshFruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log("*** 1. Using for Loop");
let fLen = freshFruits.length;
let text1 = "<ul>";
for (let i = 0; i < fLen; i++) {
    text1 += "<li>" + freshFruits[i] + "</li>"
}
text1 += "</ul>";
console.log(text1);

console.log("*** 2. Using forEach Loop");
let text2 = "<ul>";
freshFruits.forEach(myFunction2);
text2 += "</ul>";

function myFunction2(value) {
    text2 += "<li>" + value + "</li>";
}
console.log(text2);
console.log("\n");

console.log("$$$$$$===###)>>> l). Adding Array Elements:");
console.log("\n");

console.log("*** 1. Using push() ");
const androidPhones = ['Oppo', 'Asus', 'RealMe'];
console.log(androidPhones);
androidPhones.push('Infinix');
console.log(androidPhones);

console.log("*** 2. Using length() ");
androidPhones[androidPhones.length] = 'Huawei';
console.log(androidPhones);

console.log("*** Warning: Adding elements with high indexes can create undefined 'holes' in an array ***");
androidPhones[6] = 'Tecno';
console.log(androidPhones);
console.log("\n");

console.log("$$$$$$===###)>>> m). Associative Arrays:");
const programmingLanguage = [];
programmingLanguage[0] = 'JavaScript';
programmingLanguage[1] = 'PHP';
programmingLanguage[2] = 'Python';
programmingLanguage[3] = 'C#';

console.log(programmingLanguage[0]);
console.log("\n");

console.log("*** Warning: If you use named indexes, JavaScript will redefine the array to an object");
console.log("After that, some array methods and properties will produce incorrect results. ***");

const student = [];
student['firstName'] = 'John';
student['lastName'] = 'John';
student['age'] = 'John';
student.length;
console.log(student[0]);
console.log("\n");

console.log("### The Difference Between Arrays and Objects ###");
console.log("*** Arrays:");
console.log("1 In JavaScript, arrays use numbered indexes.");
console.log("*** 2. Arrays are a special kind of objects, with numbered indexes.");
console.log("*** Objects:");
console.log("*** 1. In JavaScript, objects use named indexes.");
console.log("\n");

console.log("### When to Use Arrays. When to use Objects. ###");
console.log("*** 1. JavaScript does not support associative arrays.");
console.log("*** 2. You should use 'objects' when you want the element names to be strings (text).");
console.log("*** 3. You should use 'arrays' when you want the element names to be numbers.");
console.log("\n");

console.log("$$$$$$===###)>>> n). JavaScript new Array():");
console.log("$$$$$$===###)>>> n). But you can safely use [] instead avoid using new Array().");
const pointsA = new Array(10, 20, 30, 40);
const pointsB = [40, 20, 30, 40];

console.log("Using 'new Array()':", pointsA, '', "Accessing 1st element':", pointsA[0]);
console.log("Using standard array '[]':", pointsB,  '', "Accessing 1st element':", pointsB[0]);

const pointsC = new Array(40, 100, 1);
const pointsD = new Array(40, 100);
const pointsE = new Array(40);

console.log("The new keyword can produce some unexpected results:", "pointsC:", pointsC, "pointsD:", pointsD,"pointsE:", pointsE,);
console.log("\n");

console.log("### How to Recognize an Array ###");
console.log("A common question is: How do I know if a variable is an array?");
console.log("The problem is that the JavaScript operator typeof returns 'object':");
const employees = ['Richard Sam', 'John Doe', 'Jack Sparrow'];
let type = typeof employees;
console.log("employees: ", employees);
console.log("employees data type:", type);
console.log("\n");

console.log("Solution:");
console.log("To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method");
console.log("*** 1. Array.isArray():");
console.log("\n");
let isArrayS1 = Array.isArray(employees);
console.log("employees isArray:", isArrayS1);
console.log("\n");

console.log("*** 2. The instanceof operator returns true if an object is created by a given constructor:");
console.log("\n");
let isArrayS2 = (employees instanceof Array);
console.log("employees isArray:", isArrayS2);
console.log("\n");

console.log("$$$$$$===###)>>> o). Nested Arrays and Objects:");
console.log("Values in objects can be arrays, and values in arrays can be objects:");

const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

console.log("myObj:", myObj);
console.log("\n");

console.log("To access arrays inside arrays, use a for-in loop for each array:");

let x = '';

for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i].name + "</h2>";
    for (let j in myObj.cars[i].models) {
        x += myObj.cars[i].models[j];
    }
}

let el = document.getElementById("x").innerHTML = x;
console.log(el);

console.log("\n");
console.log("######### 2. JavaScript Array Methods #########");
console.log("\n");

console.log("----- Basic Array Methods -----");

console.log("\n");

console.log("*** a.) Array length ***");

const mobileGames = ['Mobile Legends', 'League of Legends', 'Honor of Kings']
console.log("Mobile Games:", mobileGames);
let size = mobileGames.length;
console.log("Array Length:", size);

console.log("\n");

console.log("*** b.) Array length (a typo - lazy to fix) ***");

console.log("\n");

console.log("*** c.) Array toString() ***");

const humanLanguage = ['Bisaya', 'Cebuano', 'Tagalog', 'English'];
document.getElementById("human_language").innerHTML = humanLanguage.toString();
console.log("Human Language", humanLanguage);

console.log("\n");

console.log("*** d.) Array at() ***");

const filipinoFoods = ['Fried Chicken', 'Adobo', 'Chicken Cary'];
console.log("Filipino Foods: ", filipinoFoods);
let filipinoFood = filipinoFoods.at(1);
console.log("Filipino Food: ", filipinoFood);
console.log("\n");

console.log("Note:");
console.log("Many languages allow negative bracket indexing like [-1] to access elements from the end of an object / array / string.");
console.log("\This is not possible in JavaScript, because [] is used for accessing both arrays and objects. obj[-1] refers to the value of key -1, not to the last property of the object.");
console.log("The at() method was introduced in ES2022 to solve this problem.");

console.log("\n");

console.log("*** Array join() ***");
console.log("\n");
console.log("The join() method also joins all array elements into a string.");
console.log("It behaves just like toString(), but in addition you can specify the separator:");
console.log("\n");

const phoneChargingPinPorts = ['Micro', 'Type-C', 'Lightning'];
let chargingPins = document.getElementById("charging_pins").innerHTML = phoneChargingPinPorts.join(' * ');
console.log("Phone Charging Pin Ports: ", chargingPins);

console.log("\n");

console.log("Note: ");
console.log("Popping and Pushing");
console.log("When you work with arrays, it is easy to remove elements and add new elements.");
console.log("This is what popping and pushing is:");
console.log("Popping items out of an array, or pushing items into an array.");
console.log("\n");

console.log("*** Array pop() ***");
console.log("The pop() method removes the last element from an array:");

const mlbbAssassinHeroes = ['Natalia', 'Ling', 'Fanny', 'Hayabusa', 'Bruno'];
console.log("MLBB Assassin Heroes: ", mlbbAssassinHeroes);
let removeOneMlbbAssassinHero = mlbbAssassinHeroes.pop();
console.log("Remove One Mlbb Assassin Hero: ", removeOneMlbbAssassinHero);
console.log("MLBB Assassin Heroes: ", mlbbAssassinHeroes);
console.log("\n");

console.log("*** Array push() ***");
console.log("The push() method adds a new element to an array (at the end):");

const wildAnimals = ['Lion', 'Hyena', 'Tiger'];
console.log("Wild Animals: ", wildAnimals);
let addWildAnimal = wildAnimals.push('Black Panther');
console.log("Wild Animals: ", wildAnimals);
console.log("\n");

console.log("*** Array shift() ***");

console.log("NOTE: ");
console.log("The shift() method removes the first array element and 'shifts' all other elements to a lower index.");

const pets = ['Cat', 'Dog', 'Bird'];
console.log("Pets: ", pets);
let shiftOnePet = pets.shift();
console.log("Shift One Pet: ", shiftOnePet);
console.log("Pets: ", pets);
console.log("\n");

console.log("*** Array unshift() ***");
console.log("The unshift() method adds a new element to an array (at the beginning), and 'unshifts' older elements:");
const catCategories = ['Abyssinian', 'British Shorthair', 'American Bobtail'];
console.log("Cat Categories: ", catCategories);
let unshiftOneCat = catCategories.unshift('American Shorthair');
console.log("Unshift One Cat: ", unshiftOneCat);
console.log("Cat Categories: ", catCategories);
console.log("\n");

console.log("\n");
console.log("***********************************************************");

console.log("*** Changing Elements ***");
console.log("Array elements are accessed using their index number:");
console.log("Array indexes start with 0:");
console.log("[0] is the first array element");
console.log("[1] is the second");
console.log("[2] is the third ...");

const dogs = ['German Shepherd', 'Bulldog', 'Labrador Retriever'];
console.log("Dogs: ", dogs);
dogs[0] = 'Siberian Husk';
console.log("Dogs: ", dogs);
console.log("\n");

console.log("*** Array Length ***");
console.log("*** The length property provides an easy way to append a new element to an array ***");
const iPhones = ['4s', '5s', '6s'];
console.log("iPhones: ", iPhones);
iPhones[iPhones.length] = 'XR';
console.log("iPhones: ", iPhones);

console.log("***********************************************************");
console.log("\n");

console.log("*** Array delete() ***");
console.log("Warning !:");
console.log("Using delete() leaves undefined holes in the array.");
console.log("Use pop() or shift() instead.");
const a = ['a', 'b', 'c'];
console.log("a: ", a);
delete a[0];
console.log("a: ", a);

console.log("\n");

console.log("*** Merging Arrays (Concatenating) ***");
console.log("In programming languages, concatenation means joining strings end-to-end.");
console.log("Concatenation 'snow' and 'ball' gives 'snowball'.");
console.log("Concatenating arrays means joining arrays end-to-end.");

console.log("\n");

console.log("*** Array concat() ***");

console.log("The concat() method creates a new array by merging (concatenating) existing arrays:");

console.log("Example (Merging Two Arrays):");

const myGirls = ['Cecilie', 'Lone'];
const myBoys = ['Emil', 'Tobias', 'Linus'];
const myChildren = myGirls.concat(myBoys);

console.log("My Girls: ", myGirls);
console.log("My myBoys: ", myBoys);
console.log("My Children: ", myChildren);
console.log("\n");

console.log("NOTE: ");
console.log("The concat() method does not change the existing arrays. It always returns a new array.");
console.log("The concat() method can take any number of array arguments.");
console.log("\n");

console.log("Example (Merging Three Arrays): ");

const arr1 = ['Cecilie', 'Lone'];
const arr2 = ['Emil', 'Tobias', 'Linus'];
const arr3 = ['Robin', 'Morgan'];
console.log("arr1: ", arr1);
console.log("arr2: ", arr2);
console.log("arr3: ", arr3);
let myChild = arr1.concat(arr2, arr3);
console.log("My Child: ", myChild);

console.log("The concat() method can also take strings as arguments:")
console.log("\n");;
console.log("Example (Merging an Array with Values)");
const arr4 = ['Emil', 'Tobias', 'Linus'];
const mySon = arr4.concat("Peter"); 

console.log("arr4: ", arr4);
console.log("mySon: ", mySon);
console.log("\n");

console.log("*** Array copyWithin() ***");
console.log("The copyWithin() method copies array elements to another position in an array:");
const b = ['a', 'b', 'c'];
console.log("b: ", b);
b.copyWithin(2, 0);
console.log("b: ", b);

console.log("NOTE: ");
console.log("The copyWithin() method overwrites the existing values.");
console.log("The copyWithin() method does not add items to the array.");
console.log("The copyWithin() method does not change the length of the array.");

console.log("\n");

console.log("Flattening an Array");
console.log("Flattening an array is the process of reducing the dimensionality of an array.");
console.log("Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.");
console.log("\n");

console.log("*** Array flat() ***");
console.log("ES2019 Introduced the Array flat() method.");
console.log("\n");
console.log("The flat() method creates a new array with sub-array elements concatenated to a specified depth.");
const arrC = [[1,2], [3,4], [5,6]];
console.log("arrC: ", arrC);
const newArr = arrC.flat();
console.log("newArr: ", newArr);

console.log("\n");

console.log("*** JavaScript Array flatMap() ***");
console.log("ES2019 added the Array flatMap() method to JavaScript.");
console.log("The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.");

const arrD = [1, 2, 3, 4, 5, 6];
console.log("arrD: ", arrD);
const newArrD = arrD.flatMap(x => [x, x * 10]);
console.log("newArrD: ", newArrD);

console.log("\n");
console.log("*********************************************");
console.log("Splicing and Slicing Arrays");
console.log("*********************************************");
console.log("\n");
console.log("The splice() method adds new items to an array.");
console.log("The slice() method slices out a piece of an array.");

console.log("*** Array splice() ***");

const arrE = ['a', 'b', 'c', 'd'];
console.log("arrE: ", arrE);
arrE.splice(2, 0, 'C', 'D');
console.log("arrE: ", arrE);
console.log("\n");

console.log("NOTE: ");
console.log("The first parameter (2) defines the position where new elements should be added (spliced in).");
console.log("The second parameter (0) defines how many elements should be removed.");
console.log("The rest of the parameters ('C' and 'D') define the new elements to be added.");
console.log("The splice() method returns an array with the deleted items:");
const arrF = ['a', 'b', 'c', 'd'];
console.log("arrF: ", arrF);
let splicedArrF = arrF.splice(2, 2, 'e', 'f');
console.log("splicedArrF: ", splicedArrF);
console.log("newArrF: ", arrF);
console.log("\n");

console.log("*** Using splice() to Remove Elements ***");
console.log("With clever parameter setting, you can use splice() to remove elements without leaving 'holes' in the array:");
const arrG = ['a', 'b', 'c', 'd'];
console.log("arrG: ", arrG);
arrG.splice(0, 1);
console.log("arrG: ", arrG);

console.log("The first parameter (0) defines the position where new elements should be added (spliced in).");
console.log("The second parameter (1) defines how many elements should be removed.");
console.log("The rest of the parameters are omitted. No new elements will be added.");

console.log("\n");

console.log("*** Array toSpliced() ***");
console.log("ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.");
console.log("\n");
console.log("*********************************************");
console.log("The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.");
console.log("*********************************************");
console.log("\n");

const months = ['Jan', 'Feb', 'Mar', 'Apr'];
console.log("months: ", months);
const spliced = months.toSpliced(0,1);
console.log("toSplicedMonths: ", spliced);
console.log("\n");

console.log("*** Array slice() ***");
console.log("*** The slice() method slices out a piece of an array into a new array: ***");

const arrH = ['a', 'b', 'c', 'd'];
console.log("arrH: ", arrH);
const slice = arrH.slice(0);
console.log("slice: ", slice);
console.log("NOTE: ");
console.log("The slice() method creates a new array.");
console.log("The slice() method does not remove any elements from the source array. ");
console.log("\n");

console.log("Example No.1: Slice out a part of an array starting from array element 3 ('Apple'):");
const arrI = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log("arrI: ", arrI);
const citrus = arrI.slice(3);
console.log("citrus: ", citrus);
console.log("\n");
console.log("Example No.2: The slice() method can take two arguments like slice(1, 3).");
console.log("The method then selects elements from the start argument, and up to (but not including) the end argument.");

const arrJ = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("arrJ: ", arrJ);
const sliceArrJ = arrJ.slice(1,3);
console.log("sliceArrJ: ", sliceArrJ);
console.log("If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.");
console.log("\n");

console.log("*** Automatic toString() ***");
console.log("JavaScript automatically converts an array to a comma separated string when a primitive value is expected.");
console.log("This is always the case when you try to output an array.");
console.log("These two examples will produce the same result:");
console.log("\n");
const arrK = ["Banana", "Orange", "Apple", "Mango"];
console.log("arrK: ", arrK);
document.getElementById("arrK").innerHTML = fruits.toString();

console.log("\n");

const arrL = ["Banana", "Orange", "Apple", "Mango"];
console.log("arrL: ", arrL);
document.getElementById("arrL").innerHTML = fruits;
console.log("\n");

console.log("\n");
console.log("*********************************************");
console.log("String Split");
console.log("*********************************************");
console.log("\n");

console.log("The split() method splits a string into an array of substrings.");
console.log("The split() method returns the new array.");
console.log("The split() method does not change the original string.");
console.log("If ('') is used as separator, the string is split between words.");
console.log("\n");
let text = "How are you doing today?";
const split = text.split("");
console.log("\n");
console.log("text: ", text);
console.log("\n");
console.log("split: ", split);

console.log("Note: ");
console.log("All JavaScript objects have a toString() method.");