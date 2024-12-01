// Qns:01---------------------------------------------
// Question: Write a program to check if a sentence has the word "Hello" using the search method.

let sentence = "Hello world";
let search = "d";
let searchValue = sentence.search(search);
if (searchValue === -1) {
  console.log(search, "Has been not  Found");
} else {
  console.log(search, "Has been Found");
}

// Qns:02---------------------------------------------
// Question: Write a JavaScript program that takes a user's name and then displays a greeting message using string concatenation. The program should ensure that any whitespace in the user's input is removed before concatenation.

// let userName = prompt("Enter your Name");
// let outPut = userName.trim().concat(" How are you ?");
// console.log(outPut);

// Qns:03---------------------------------------------
// Question: Write a JavaScript program that uses template literals to create a dynamic message. The program should take the user's favorite programming language, their name, and the year they started learning it as inputs. Then, display a message that includes this information, formatted across multiple lines. (underlines should be dynamic)

let nameUser = "Sara";
let language = "python";
let year = 2018;
let templateOutPut = `${nameUser}, you have been coding in ${language} since ${year}`;
console.log(templateOutPut);
