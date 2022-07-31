let person={
    firstName:"Aravindha",
    lastName:"Kumar",
    fullName:function(){
        console.log(this.firstName+" "+this.lastName);
    }
};
person.fullName();
