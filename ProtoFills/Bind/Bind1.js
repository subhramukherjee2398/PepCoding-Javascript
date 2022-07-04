
Function.prototype.myBind = function(args){
    let func  = this
    console.log(this)
    console.log(args)
    return function(){
        func.call(args)
    }
}

let p = {
    name : 'Subhra',
    age : 23
}

function show(){
    console.log("name = ",this.name)
    console.log("age =",this.age)
}

let showBind = show.myBind(p);
showBind()

/*

s1 : inside that function protype this -> return the funtion 
s2 : args is the the object pass inside the bind function
s3 : As it is bind then we have to return a function
s4 : so inside the function it calling with that objct like that normal call method.


*/