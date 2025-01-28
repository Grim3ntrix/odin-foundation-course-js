console.log("Hello World!");

console.log("| Looping through collection");
console.log("\n");
console.log("\n");
console.log("Most of the time when you use a loop, you will have a collection of items and want to do something with every item.");
console.log("\n");
console.log("One type of collection is the Array, which we met in the Arrays chapter of this course. But there are other collections in JavaScript as well, including Set and Map.");
console.log("\n");

console.log("| a. The for...of loop");
console.log("\n");
console.log("The basic tool for looping through a collection is the for...of loop:");
console.log("\n");
const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];
console.log("cats: ", cats);
console.log("\n");

for (const cat of cats) {
    console.log(cat);
}

console.log("\n");

console.log("| b. map() and filter()");
console.log("\n");
console.log("JavaScript also has more specialized loops for collections, and we'll mention two of them here.");
console.log("\n");
console.log("You can use map() to do something to each item in a collection and create a new collection containing the changed items:");
console.log("\n");

console.log("Just refer to the cats array above.");

function toUpper(string) {
    return string.toUpperCase();
}

const upperCats = cats.map(toUpper);

console.log("upperCats: ", upperCats);
console.log("\n");
console.log("Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new array, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase:");
console.log("\n");
console.log("You can use filter() to test each item in a collection, and create a new collection containing only items that match:");
console.log("\n");
console.log("Just refer to the cats array above.");

function lCat(cat) {
    return cat.startsWith('L');
}

const filtered = cats.filter(lCat);

console.log("filtered: ", filtered);
console.log("\n");
console.log("This looks a lot like map(), except the function we pass in returns a boolean: if it returns true, then the item is included in the new array. Our function tests that the item starts with the letter 'L', so the result is an array containing only cats whose names start with 'L':");
console.log("\n");
console.log("This looks a lot like map(), except the function we pass in returns a boolean: if it returns true, then the item is included in the new array.");
console.log("\n");
console.log("Our function tests that the item starts with the letter 'L', so the result is an array containing only cats whose names start with 'L':");
console.log("\n");
console.log("NOTE:");
console.log("\n");
console.log("Note that map() and filter() are both often used with function expressions, which you will learn about in our Functions lesson.");
console.log("\n");
console.log("Using function expressions we could rewrite the example above to be much more compact:");
console.log("\n");
console.log("Just refer to the cats array above.");

const filteredCat = cats.filter((cat) => cat.startsWith('L'));

console.log("filteredCat: ", filteredCat);

console.log("\n");
console.log("| c. Standard for loop");
console.log("\n");
console.log("for (initializer; condition; final-expression) {");
console.log(" // code to run");
console.log("}");
console.log("\n");
console.log("1. The keyword for, followed by some parentheses.");
console.log("2. Inside the parentheses we have three items, separated by semicolons:");
console.log("\n");
console.log("i. An initializer — this is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a counter variable.");
console.log("\n");
console.log("ii. A condition — this defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.");
console.log("\n");
console.log("iii. A final-expression — this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.");
console.log("\n");
console.log("3. Some curly braces that contain a block of code — this code will be run each time the loop iterates.");
console.log("\n");

const results = document.querySelector("#results");

function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult},\n`;
    }
    results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector('#calculate');
const clearBtn = document.querySelector('#clear');

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));

console.log("\n");

console.log("| d. Looping through collections with a for loop");
console.log("\n");
console.log("You can use a for loop to iterate through a collection, instead of a for...of loop.");
console.log("\n");
console.log("Let's look again at our for...of example above:");
console.log("Just refer to the cats array above.")

console.log("\n");
console.log("for (const cat of cats) {");
console.log("    console.log(cats);");
console.log("}");
console.log("\n");

for (const cat of cats) {
    console.log(cat);
}

console.log("\n");
console.log("We could rewrite that code like this:");
console.log("Just refer to the cats array above.")
console.log("\n");

console.log("for (let i = 0; i < cats.length; i++) {");
console.log("    console.log(cats[i]);");
console.log("}");
console.log("\n");

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

console.log("\n");
console.log("In this loop we're starting i at 0, and stopping when i reaches the length of the array. Then inside the loop, we're using i to access each item in the array in turn.");
console.log("\n");
console.log("This works just fine, and in early versions of JavaScript, for...of didn't exist, so this was the standard way to iterate through an array. However, it offers more chances to introduce bugs into your code. For example:");
console.log("\n");
console.log("1. you might start i at 1, forgetting that the first array index is zero, not 1.");
console.log("2. you might stop at i <= cats.length, forgetting that the last array index is at length - 1.");
console.log("\n");
console.log("For reasons like this, it's usually best to use for...of if you can.");
console.log("\n");

let favoriteCats = ["Pete", "Biggles", "Jasmine"];
console.log("favoriteCats: ", favoriteCats);
console.log("\n");

let myCats = "My cats are called ";
console.log("myCats: ", myCats);
console.log("\n");

for (const cat of favoriteCats) {
    myCats += `${cat}, `;
}

console.log("myCats: ", myCats);
console.log("\n");
console.log("We'd prefer it to handle the last cat differently, like this:");
console.log("\n");
console.log("My cats are called Pete, Biggles, and Jasmine.");
console.log("\n");
console.log("But to do this we need to know when we are on the final loop iteration, and to do that we can use a for loop and examine the value of i:");
console.log("\n");
console.log("Just refer to the (favoriteCats) and (myCats) array above.");
console.log("\n");

for (let i = 0; i < favoriteCats.length; i++) {
    if (i === favoriteCats.length - 1) {
        // We are at the end of the array
        myCats +=  `and ${favoriteCats[i]}.`;
    }
    else {
        myCats +=  `${favoriteCats[i]}, `;
    }
}

console.log("myCats: ", myCats);
console.log("\n");
console.log("| Exiting loops with break");
console.log("\n");
console.log("If you want to exit a loop before all the iterations have been completed, you can use the break statement");
console.log("\n");
console.log("Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find? First, some simple HTML — a text <input> allowing us to enter a name to search for, a <button> element to submit a search, and a <p> element to display the results in:");

const contacts = [ 
    "Chris:2232322",
    "Sarah:3453456",
    "Bill:7654322",
    "Mary:9998769",
    "Dianne:9384975",
];

console.log("contacts: ", contacts);

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";

    for (const contact of contacts) {
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }

    if (para.textContent === "") {
        para.textContent = "Contact not found.";
    }
});

console.log("\n");
console.log("| Skipping iterations with continue");
console.log("\n");
console.log("The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop. Let's look at another example that takes a number as an input, and returns only the numbers that are squares of integers (whole numbers).");
console.log("\n");

const para2 = document.querySelector("p");
const input2 = document.querySelector("input2");
const btn2 = document.querySelector("button");

btn2.addEventListener("click", () => {
para2.textContent = "Output: ";
const num = input2.value;
input2.value = "";
input2.focus();
for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
    continue;
    }
    para2.textContent += `${i} `;
}
});

console.log("\n");
console.log("| while and do...while");
console.log("\n");
console.log("for is not the only type of general loop available in JavaScript. There are actually many others and, while you don't need to understand all of these now, it is worth having a look at the structure of a couple of others so that you can recognize the same features at work in a slightly different way.");
console.log("\n");

console.log("| a. First, let's have a look at the while loop. This loop's syntax looks like so:");
console.log("\n");

console.log("initializer");
console.log("while (condition) {");
console.log(" // code to run");
console.log("final-expression");
console.log("}");
console.log("\n");
console.log("This works in a very similar way to the for loop, except that the initializer variable is set before the loop, and the final-expression is included inside the loop after the code to run, rather than these two items being included inside the parentheses. The condition is included inside the parentheses, which are preceded by the while keyword rather than for.");
console.log("\n");
console.log("The same three items are still present, and they are still defined in the same order as they are in the for loop. This is because you must have an initializer defined before you can check whether or not the condition is true. The final-expression is then run after the code inside the loop has run (an iteration has been completed), which will only happen if the condition is still true.");
console.log("\n");
console.log("Let's have a look again at our cats list example, but rewritten to use a while loop:");
console.log("\n");
console.log("Just refer to the favorite cats array and myCats variable above.");
console.log("\n");

const cats2 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats2 = "My cats are called ";

let i = 0;

while (i < cats2.length) {
  if (i === cats2.length - 1) {
    myFavoriteCats2 += `and ${cats2[i]}.`;
  } else {
    myFavoriteCats2 += `${cats2[i]}, `;
  }

  i++;
}

console.log("myFavoriteCats2: ", myFavoriteCats2); 

console.log("\n");


console.log("| b. The do...while loop is very similar, but provides a variation on the while structure:");
console.log("\n");

console.log("initializer");
console.log("do {");
console.log("// code to run");
console.log("final-expression");
console.log("} while (condition)");
console.log("\n");

console.log("In this case, the initializer again comes first, before the loop starts. The keyword directly precedes the curly braces containing the code to run and the final expression.");
console.log("\n");
console.log("The main difference between a do...while loop and a while loop is that the code inside a do...while loop is always executed at least once. That's because the condition comes after the code inside the loop. So we always run that code, then check to see if we need to run it again. In while and for loops, the check comes first, so the code might never be executed.");
console.log("\n");
console.log("Let's rewrite our cat listing example again to use a do...while loop:");
console.log("\n");

const cats3 = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats3 = "My cats are called ";

let initializer = 0;

do {
    if (initializer === cats3.length - 1) {
        myFavoriteCats3 += `and ${cats3[initializer]}.`;
    } else {
        myFavoriteCats3 += `${cats3[initializer]}, `;
    }

    initializer++;
} while (initializer < cats3.length)

console.log("myFavoriteCats3: ", myFavoriteCats3); 
console.log("\n");
console.log("____________________________________________");
console.log("| Active learning: Launch countdown");
console.log("____________________________________________");
console.log("\n");
console.log("In this exercise, we want you to print out a simple launch countdown to the output box, from 10 down to Blastoff. Specifically, we want you to:");
console.log("\n");
console.log("|||---> Loop from 10 down to 0. We've provided you with an initializer — let i = 10;.");
console.log("\n");
console.log("|||---> For each iteration, create a new paragraph and append it to the output <div>, which we've selected using const output = document.querySelector('.output');. In comments, we've provided you with three code lines that need to be used somewhere inside the loop:");
console.log("\n");
console.log("| a. const para = document.createElement('p'); — creates a new paragraph.");
console.log("| b. output.appendChild(para); — appends the paragraph to the output <div>.");
console.log("| c. para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, after the equals sign.");
console.log("\n");
console.log("|||---> Different iteration numbers require different text to be put in the paragraph for that iteration (you'll need a conditional statement and multiple para.textContent = lines):");
console.log("\n");
console.log("| a. If the number is 10, print 'Countdown 10' to the paragraph.");
console.log("| b. If the number is 0, print 'Blast off!' to the paragraph.");
console.log("| c. For any other number, print just the number to the paragraph.");
console.log("\n");

let j = 10;

const output = document.getElementById('output');

while (j > -1) {
    const para3 = document.createElement('p');
    if (j === 10) {
        console.log("Countdown: ", j);
        para3.textContent = `Countdown: ${j}`;
    } else if (j !== 10 && j !== 0) {
        console.log(j);
        para3.textContent = `${j}`;
    } else {
        console.log("Blast off!: ", j);
        para3.textContent = `Blast off!: ${j}`;
    }
    output.appendChild(para3);
    j--
}


console.log("\n");
console.log("| Active learning: Filling in a guest list");
console.log("\n");
console.log("In this exercise, we want you to take a list of names stored in an array and put them into a guest list. But it's not quite that easy — we don't want to let Phil and Lola in because they are greedy and rude, and always eat all the food! We have two lists, one for guests to admit, and one for guests to refuse.");

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.getElementById("admitted");
const refused = document.getElementById("refused");

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;


  } else {
    admitted.textContent += `${person}, `;

  }
}
console.log("Admitted", admitted.textContent.length);
console.log("Refused", refused.textContent.length);

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';

admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';


// var peopleLen = 0;

// while (peopleLen < people.length) {
    
//     if (people[peopleLen] === 'Phil') {
//         refused.textContent += `${people[peopleLen]}, `;
//     } else if (people[peopleLen] === 'Lola') {
//         refused.textContent += `${people[peopleLen]}`;
//     } else {
//         admitted.textContent += `${people[peopleLen]}, `;
//     }
//     peopleLen++
// }