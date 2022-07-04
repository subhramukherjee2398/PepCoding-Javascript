
Function.prototype.myBind = function(...args){
    let func  = this
    let params = args.slice(1)
    console.log(params)
    return function(){
       // func.call(args[0])
       func.apply(args[0],params)
    }
}

let p = {
    name : 'Subhra',
    age : 23
}

function show(city,car){
    console.log("name = ",this.name)
    console.log("age =",this.age)
    console.log("city =",city)
    console.log('car =', car)
}

let showBind = show.myBind(p,"kolkata",741852);
showBind()