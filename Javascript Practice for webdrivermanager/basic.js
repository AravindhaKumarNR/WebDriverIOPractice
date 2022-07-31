//For printing Hello World, then ls--> node .\basics.js
console.log('Hello World');
// for single line comments and
 /*-------
         for multi line comments 
-----*/

//Variables are losely tight where variables can hold with any type of data. No need of entering the datatype
// if it is a variable then we must declare using var keywords, From ES6 two more ways to declare variable
//let and const. Existing browsers are using ES5
let a=4;
console.log(a);
console.log();
//To find the datatype there is a method called typeof()
console.log(typeof(a));
console.log();
//String 
let c="Aravindha Kumar N R"
console.log(c);
console.log(typeof(c));
console.log();
//Boolean
let required=true;
console.log(typeof(required));
console.log();
//Two other datatypes in JS they are null and undefined.
let b;
console.log(typeof(b));
let d=null;
console.log(d, typeof(d))
console.log();

//Difference between var and let we cannot reaasign with let keyword but can reasign using var keyword.
// instead of redeclaring with using let it will not work but you can assign with a new value.

// Both redeclaring and reassigning are allowed using var keyword.

d=25;
console.log(d);
// Assignment operators:+, *, -, /, =, !=

b=25;
console.log(a+b);
//const keyword is used to declare a constant which we cannot reassing it also. which would remain constant for the entire script
const ak=22;

