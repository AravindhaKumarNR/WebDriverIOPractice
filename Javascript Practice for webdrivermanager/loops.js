//Loops

const flag=true;

//if
if(!flag){
    console.log('Satisfied');
}
else{
    console.log('Not satisfied');
}


//while
/*

while(true){
    console.log("i'm inside a loop");
}

*/
let i=0;
while(i<10){
    console.log(i);
    i++;
}
console.log("-----------");
let k=0;
do{
    k++;

}while(k>10);
console.log(k);
console.log("------------");

for(let j=0;j<5;j++){
    console.log(j);

}
console.log("------------")
//When to use for loop and when to use while loops
//Use for loops only when the number of iterations are well known else then use while loop while looks only for the statement
//while loop is used to evaluate any kind of expressions as a condition wheras for will run n number of times untill the condition becomes false.

// common multiples of 2 and 5
for(let m=1;m<=100;m++){
    if(m%2==0&&m%5==0){
        console.log(m)
    }
}

