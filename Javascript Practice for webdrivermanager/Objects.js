//Object is a collection of properties where we can store them in keypairs
//not only name you can add numbers add methods 
let person={
    firstName:"Aravindha Kumar",
    lastName:" N R",
    age:23,
    fullName:function(){
        console.log(this.firstName+this.lastName );
    }
};
console.log(person.fullName())
console.log("-----------")
console.log(person.firstName);
//One more way to access using array notations.
console.log(person["lastName"]);
//to update  properties at run time
person.firstName="Manjula";
console.log(person.firstName+""+person.lastName);
//To update the dictionary
person.gender="Female"
//to print all objects
console.log(person);
delete person.gender;
console.log(person);

//to check whether the property present in an object
console.log('lastName' in person);

//to print values of all the properties using for loop
for(let key in person){
    console.log(person[key]);
}
//to access the function in property
console.log(person.fullName())