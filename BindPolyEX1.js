// normal implementation

const p  ={
    name : 'Subhra',
    age :  23
}

const showDetails =  function(){
    console.log(this.name + " " + this.age) 
}


// write polyFill 

Function.prototype.myBind = function(...agrs){
    let obj = this
    return function(){
      obj.call(agrs[0])
    }
}
// CASE : 1
let showDetailsMYBind = showDetails.myBind(p);

showDetailsMYBind()


