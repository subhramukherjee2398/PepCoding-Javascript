class Person {
    constructor(name,age){
        this.name = name,
        this.age = age
    }

    showInfo (){
        console.log(this.name + ' is ' + this.age)
    }
}

let p1 = new Person("Su",23)
console.log(p1);
p1.showInfo()

//classsicalInheritence 

class PersonChild extends Person {
    constructor (){
        super("BBBB" , 30)
    }
}

let p2 = new PersonChild();
p2.showInfo();