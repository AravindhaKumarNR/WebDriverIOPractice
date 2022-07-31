//Arrays and its methods

//Array is a collection of elements
let marks=Array(6);
//or
let mar=new Array(20,40,35,12,37,10);

//simply declare
var mark=[20,40,6,0,5,6];

//To access the array index count always starts with 0.

//printing 
console.log(mar[1]);
mar[3]=67;
console.log(mar)
// to find the length of an array
console.log(mar.length);
//add an array at its end
mar.push(77);
console.log("----")
console.log(mar)

// To delete the last element of the array
mar.pop();
console.log("----")
console.log(mar);
console.log("----")

//To add an element at the beginning of an array 
mar.unshift(33);
console.log(mar);
console.log("----")


//to find the index of an element
let a=mar.indexOf(67);
console.log(a);
console.log("----")

//to find whether the element is present in an array
console.log(mar.includes(67));

// break array in sub-arrays using slice()
submar=mar.slice(2,6);
console.log(submar);
console.log("----")

//print the elements of an array
for(let i=0;i<mark.length;i++){
    console.log(mark[i]);
}
console.log("----")

//sum elemets of arr
let sum=0;
for(let i=0;i<mark.length;i++){
    sum+=mark[i];
}
console.log("total marks obtained is: "+sum+" for "+mar.length*100);
console.log("----")

//Array Functions -->reduce(),filter(),map()
//where these functions reduces the code complexity.

//reduce()---->takes two arguments and can perform all operations in an array.

let tot=mark.reduce((sum,totalMarks)=>sum+totalMarks,0);
console.log(tot);

console.log("----")
//create a new array with even nubmers in scores array.

var scores=[12,13,14,15,16,17,18,19,20]

var even=[]; var odd=[];
for(let a=0;a<scores.length;a++){
    if(scores[a]%2==0){
        even.push(scores[a]);
    }
    else if(scores[a]%2!=0){
        odd.push(scores[a]);
    }
}


console.log(even);
console.log("-------------");
console.log(odd);

let newfilter=scores.filter((score=>score%2==0));

console.log(newfilter);
console.log("-------------");

//map()--> will modify the each and every value to new array

//to multiply the array into 3 with the existing values
let mapArr=newfilter.map(scores=>scores*3);
console.log(mapArr);


//to print the sum of mapArr
let sumMap=mapArr.reduce((sum,val)=>sum+val,0);
console.log(sumMap);
console.log("-------------");

//Chained Array where we can add muliple array funcitons such as reduce(),filter() and map all together in the same line

let scoreN=[33,44,45,30,25,36];
//to multiply the scoreN by 2 and sum the total
let totalScoreN=scoreN.filter(scoreN=>scoreN>25).map(scoreN=>scoreN*2).reduce((sum,val)=>sum+val,0);
console.log("Total score: "+totalScoreN+"/600");
console.log("----------------")
//Sorting an array
let fruits=["Banana","Mango", "Pomegranate","Apple","orange"];
fruits.sort();
console.log(fruits);
console.log("----------------")
//sort with custom logic
 scoreN=[33,44,45,30,25,36];
console.log(scoreN.sort((a,b)=>a-b)); //performed using bubble sort
console.log("----------------")

//for reversing an array
console.log(fruits.reverse());