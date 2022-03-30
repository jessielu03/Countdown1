/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];

const addEntry = (entry) => bookList.push(entry);
const removeBook = (book) => bookList.splice(bookList.indexOf(book), 1);
const listBooks = () => {
    console.log("LIST BY TITLE: ");
    bookList.forEach((book) => console.log(book.title));
}

console.log("bookList tests: (add, print, remove, print)");
let newEntry = {title: "1984", author: "George Orwell"};
addEntry(newEntry);
listBooks();
removeBook(newEntry);
listBooks();

  /* Intermediate Challenge */
  
  /* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
     number is positive or negative using a ternary operator (assume the number will never be zero) */

const checkPositive = (num) => num > 0 ? console.log("positive") : console.log("negative");

console.log("\ncheckPositive tests: (4, -5)");
checkPositive(4);
checkPositive(-5);
  
  /* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
    the week it is
    i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */

function dayOfWeek(day) {
    switch(day) {
    case "Monday":
        console.log("good luck");
        break;
    case "Wednesday":
        console.log("hump day");
        break;
    case "Friday":
        console.log("party");
        break;
    }
}
console.log("\ndayOfWeek tests: (Monday, Wednesday, Friday)");
dayOfWeek("Monday");
dayOfWeek("Wednesday");
dayOfWeek("Friday");

  /* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */
const sums = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i++)
	    sum += i;
    console.log(sum);
}
console.log("\nsums tests: (0, 1, 7)");
sums(0);
sums(1);
sums(7);

  /* Harder Challenge */

  /* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
     me what I should wear accordingly */
const weatherOutfits = (celsius) => {
    let fahrenheit = (celsius * 9 / 5) + 32;
    if(fahrenheit > 75)
	    return "short-sleeved shirt + shorts";
    else if(fahrenheit > 65)
	    return "short-sleeved shirt + pants";
    else if(fahrenheit > 55)
	    return "long-sleeved shirt + pants";
    else
	    return "warm sweater + pants + coat"
}
console.log("\nweatherOutfits tests: (27, 22, 13, 0)");
console.log(weatherOutfits(27));
console.log(weatherOutfits(22));
console.log(weatherOutfits(13));
console.log(weatherOutfits(0));
  
  /* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
    using .forEach() */
  
const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

function countTruthy(arr) {
    let sum = 0;
    arr.forEach((val) => val ? sum++ : sum += 0);
    console.log(sum);
}
console.log("\ncountTruthy test: (should print 4)");
countTruthy(exampleArray);
  
  /* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */
  
  const attendance = [
    { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
    { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
    { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
    { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
    { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
    { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
    { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
  ];

let modifiedAttendance = attendance.map((element) => {
    let letter = "";
    if(element.gpa >= 4.0)
	    letter = "A";
    else if(element.gpa >= 3.7)
	    letter = "A-";
    else if(element.gpa >= 3.3)
	    letter = "B+";
    else if(element.gpa >= 3.0)
	    letter = "B";
    else if(element.gpa >= 2.7)
	    letter = "B-";
    else if(element.gpa >= 2.3)
	    letter = "C+";
    else if(element.gpa >= 2.0)
	    letter = "C";
    else if(element.gpa >= 1.7)
	    letter = "C-";
    else if(element.gpa >= 1.3)
	    letter = "D+";
    else if(element.gpa >= 1.0)
	    letter = "D";
    else if(element.gpa >= 0.7)
	    letter = "D-";
    else
	    letter = "F";
    const person = {fullName: `${element.firstName} ${element.lastName}`, averageGrade: letter};
    return person;
});
console.log("\nmodifiedAttendance test:");
console.table(modifiedAttendance);

  /* Hardest Challenge (Don't do this without completing harder challenges) */

  /* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */
function equalsFour(num) {
    // convert number to words
    let path = [];
    path.push(num);
    let stringify = numberToEnglish(num);
    if(stringify.length == 4)
        path.push(4);
    else {
        let nextNums = equalsFour(stringify.length);
        nextNums.forEach(function(element) {path.push(element)});
    }
    return path;
}
console.log("\nequalsFour tests: (11, 19, 252)");
console.log(equalsFour(11).toString());
console.log(equalsFour(19).toString());
console.log(equalsFour(252).toString());

// helper method to stringify words, taken from online resource
// @author McShaman (http://stackoverflow.com/users/788657/mcshaman)
// @source http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
function numberToEnglish(n, custom_join_character) {
    var string = n.toString(), units, tens, scales, start, end, chunks, chunksLen, chunk, ints, i, word, words;
    var and = custom_join_character || '';
    if (parseInt(string) === 0) {return 'zero';}
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];
    start = string.length;
    chunks = [];
    while (start > 0) {end = start; chunks.push(string.slice((start = Math.max(0, start - 3)), end));}
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {return '';}
    words = [];
    for (i = 0; i < chunksLen; i++) {chunk = parseInt(chunks[i]);
        if (chunk) {ints = chunks[i].split('').reverse().map(parseFloat);
            if (ints[1] === 1) {ints[0] += 10;}
            if ((word = scales[i])) {words.push(word);}
            if ((word = units[ints[0]])) {words.push(word);}
            if ((word = tens[ints[1]])) {words.push(word);}
            if (ints[0] || ints[1]) {if (ints[2] || !i && chunksLen) {words.push(and);}}
            if ((word = units[ints[2]])) {words.push(word + 'hundred');}}}
    return words.reverse().join('');}
