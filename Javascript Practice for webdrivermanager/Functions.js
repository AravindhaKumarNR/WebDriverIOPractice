//A block of code that can be executed together by wrapping them together into a module is known as function.
//Function to print sum of two numbers.
function add(a,b){
    return a+b
}
let c=add(2,3);
console.log(c);

//do not have names=> annonymous funcitons

let sumofIntegers=function(c,d){
    return c+d;
}

//fat fight (var,var)=>{ ---------}

console.log(sumofIntegers(2,55));


//understanding var, let keywords in javascript:

//var -->JS5 is only availale -->global level/functional.
//var can be redeclared can be reinisitalized
//let -> global level/block level using let it wont replace let level
//let --> redeclared,can be reinisitalized


//String manipulation 
let day =" tuesday";
//most string are like array operations.
console.log(day.length);
//substring 
let sub=day.slice(0,4);
console.log(sub);
console.log(day[1]);
//To break string to two
let split=day.split("s");
console.log(split)
//to remove trailing white spaces
console.log(split[0].trim());
console.log(split[1].length);

//Access any values from browser

//To identify difference between two dates
let date='23';
let nextDate="27";
let difference=parseInt(nextDate)-parseInt(date);
console.log(difference);
//To convert number to string 
let num=difference.toString();
console.log(num);


//concatination -- can be done is using "+" operators.
let newQuote=day+" is a good day and a funday";
console.log(newQuote);

//indexOf
let val=newQuote.indexOf("day")
console.log(val)

//program to count number of days present in a string.-
let count=0;
while(val!=-1){
    count++;
    val=newQuote.indexOf("day",val +1);
}
console.log(count);
