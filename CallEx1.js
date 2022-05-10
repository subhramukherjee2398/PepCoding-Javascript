 const person1 = {
    name : "subhra",
    age : 23,
    fn : function (){
        console.log(this.name +  " is  "+ this.age + " old " )
    }
}

const person2 = {
    name : "Mukherjee",
    age : 30,
    
}




person1.fn()
person1.fn.call(person2) 
