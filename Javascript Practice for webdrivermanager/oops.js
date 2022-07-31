//classes -->es 6 engine
//for importing
module.exports= class Person{
    age=23;
    //getter methods
    //location="canada"
    get location(){
        return "canada";
    }
    //Constructor --> is a method which executes by default when you create a object of class.

    //instance variables-->those variables which can be accessed within a class are called as instance variables.
    constructor(firstName,lastName){
        //we have to decide during the run time of the code
        //to get them outside the class we use this keyword.
        this.firstName=firstName;
        this.lastName=lastName;
    }

    //methods
    fullName(){
        console.log(this.firstName+" "+this.lastName);
    }

}
//object is known as instance of a class.
//if we convert an object into a class we can create multiple instance of the same object.

// let a=new Person("aRa","afa");
// console.log(a.age);
// console.log(a.location)
// a.fullName();
