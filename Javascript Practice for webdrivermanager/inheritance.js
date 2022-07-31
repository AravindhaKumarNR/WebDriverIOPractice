//Inheritance is the main pillar in an object oriented programming language
//one class can inherit/acquire the properties,methods of another class.
//The class which inherits the properties of other is known as subclass(derived class,child class)
//the class whose properties are inherited is known as superclass.

//building entity of another class
const Person=require ('./oops')
class Pet extends Person{
    get location(){
        return 'BlueCross'
    }
    constructor(firstName,lastName){
        //call parent class constructor can be called using super() keyword
        super(firstName,lastName)
    }

}

let a=new Pet("To","to");
a.fullName();
console.log(a.location);