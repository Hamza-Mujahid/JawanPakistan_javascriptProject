// Chapter 21 (Changing Case)

// 1
var allLower = userInput.toLowerCase();

// 2
x = x.toLowerCase();

// 3
y = y.toUpperCase();

// 4
var originalString = "Hello World";
var lowerCaseString = originalString.toLowerCase();

// 5
var myArray = ["Apple", "Banana", "Cherry"];
var lowerCaseItem = myArray[1].toLowerCase();

// 6
var cityName = "kaRacHi";
var capitalCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

// Chapter 22 - 25 (Strings)

// 1
var sameWords = "captain";
var slicedWord = sameWords.slice(1, 3);

// 2
var strLength = sameWords.length;

// 3
var animal = "elephant";
var seg = animal.slice(1, 5);

// 4
var text = "This is a sample text.";
var numChars = text.length;

// 5
var input = "JavaScript";
var charCount = input.length;
var slicedStr = input.slice(1, -3);

// 6
var text = "To be or not to be.";
var indx = text.indexOf("be");

// 7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");

// 8
var text = "This is a long text. Go ahead and find 'go' here.";
var indx = text.lastIndexOf("go");

// 9
var indexNum = 5;
var segment = str.slice(indexNum);

// 10
var str = "abcde";
var character = str.charAt(2);

// 11
var text = "Hello, World!";
var cha = text.charAt(9);

// 12
var str = "Hello, GPT-3";
var x = str.charAt(str.length - 1);

// 13
var input = "JavaScript";
var cha = input.charAt(4);

// 14
var inputStr = "Hello, World!";
var charToTest = "e";
if (inputStr.charAt(2) === charToTest) {
    // Your code here
}

// 15
var reply = "no no no no no";
var revisedReply = reply.replace("no", "yes");

// 16
var str = "1,2,3,4,5";
var newStr = str.replace("1", "one");

// 17
var y = x.replace(/a/g, "z");

// Chapter 26 (Rounding Numbers)

// 1
var roundedNum = Math.round(num);

// 2
var roundNum = Math.ceil(origNum);

// 3
var roundNum = Math.floor(origNum);

// 4
var rounded = Math.round(num);
var numAsString = rounded.toString();

// 5
var rounded = Math.round(0.5);
var roundedAsString = rounded.toString();

// Chapter 27 (Random Numbers)

// 1
var randomNum = Math.floor(Math.random() * 50) + 1;

// 2
var randomValue = Math.random();

// 3
var diceRoll = Math.floor(Math.random() * 6) + 1;

// 4
var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

// Chapter 28, 29 (Converting Strings)

// 1
// To convert a string to an integer in JavaScript, use parseInt(string).

// 2
function convertStringToInteger(str) {
    return parseInt(str);
}

// 3
// To convert a string containing a decimal number to a floating-point number in JavaScript, use parseFloat(string).

// 4
function canConvertToNumber(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}

// 5
// To convert a number to a string in JavaScript, use toString().

// 6
function numberToString(num) {
    return num.toString();
}

// 7
// You can convert a string representing a decimal number to an integer in JavaScript using parseInt(string).

// Chapter 30 (Controlling the length of decimals)

// 1
var num = 12.3456789;
var newNum = num.toFixed(4);

// 2
var originalNumber = 3.14159265359;
var stringNumber = originalNumber.toFixed(2);
var finalNumber = parseFloat(stringNumber);

// 3
var numString = num.toFixed(2);
if (numString.length > 4) {
    // Your code here
}

// 4
var num = 12.345;
var roundedString = num.toFixed(2);
var roundedNumber = parseFloat(roundedString);

// Chapter 31 - 34 (Date & Time)

// 1
var dObj = new Date();

// 2
var dStr = new Date().toString();

// 3
var d = new Date();
var day = d.getDay();

// 4
var d = new Date();
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = dayNames[d.getDay()];

// 5
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth() + 1;
var day = now.getDate();
var hours = now.getHours();
var minutes = now.getMinutes();
var seconds = now.getSeconds();

// 6
var later = new Date(2020, 11, 31, 23, 59, 59);

// 7
var specificDate = new Date(1992, 1, 2);

// 8
var referenceDate = new Date(1980, 0, 1);
var millisecondsElapsed = new Date().getTime() - referenceDate.getTime();

// 9
// To change the year of a date in JavaScript, use the setFullYear() method.

// 10
function changeMonthToJanuary(date) {
    date.setMonth(0); // January is month 0
    return date;
}

// 11
// You cannot directly change the day of the week for a specific date in JavaScript since the day of the week is determined by the date itself.

// 12
function changeMinutes(time, newMinutes) {
    time.setMinutes(newMinutes);
    return time;
}

// 13
function addHours(time, hoursToAdd) {
    time.setHours(time.getHours() + hoursToAdd);
    return time;
}

// 14
function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Chapter 35 - 37 (Functions)

// 1
function displayAlert() {
    // Your code here
}

// 2
function askName() {
    var userName = prompt("Enter name");
}

// 3
function myFunction() {
    function function1() {
        // Your code here
    }
    function function2() {
        // Your code here
    }
    // Your code here
}

// 4
function getNameAndDisplay() {
    var name = prompt("Enter name");
    alert("Name: " + name);
}

// 5
function concat(a, b, c) {
    var result = a + b + c;
    return result;
}

// 6
function concatenateStrings(str1, str2) {
    var concatenatedStr = str1 + str2;
    return concatenatedStr;
}

// 7
function multiplyNumbers(a, b, c) {
    var result = a * b * c;
    return result;
}

// 8
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// 9
function sumTwoNumbers(a, b) {
    return a + b;
}

// 10
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// 11
var result = myFunction(); // Store the returned value in a variable

// 12
function countLetters(word) {
    return word.length;
}

// 13
function setYear(date, year) {
    date.setFullYear(year);
}

// 14
function calculateAge(dateOfBirth) {
    var birthDate = new Date(dateOfBirth);
    var currentDate = new Date();
    var ageInMilliseconds = currentDate - birthDate;
    var ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(ageInYears);
}

// 15
function checkWordPresence(wordToCheck, array) {
    return array.includes(wordToCheck);
}

// 16
function repeatLetter(letter, times) {
    return letter.repeat(times);
}

// 17
function reverseArray(arr) {
    return arr.reverse();
}

// Chapter 38 (Local vs. Global Variables)

// 1
function localVariableDemo() {
    var localVar = "I am a local variable";
    // localVar is a local variable and can only be accessed within this function
}

// 2
// You can access a global variable inside a function in JavaScript without any special syntax. Global variables are accessible from any scope.

// Chapter 39, 40 (Switch Statements)

// 1
var variable = 2; // Example variable
switch (variable) {
    case 1:
        // Code for case 1
        break;
    case 2:
        // Code for case 2
        break;
    // Add more cases as needed
    default:
        // Default case code
}

// 2
var cityName = "New York"; // Example variable
switch (cityName) {
    case "New York":
        alert("You entered New York");
        break;
    case "Los Angeles":
        alert("You entered Los Angeles");
        break;
    default:
        alert("City not recognized");
}
