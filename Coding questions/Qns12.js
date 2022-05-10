Array.prototype.myFunction = function(){
    console.log(this)
}

let ARR = [ 1 , 2 , 3 , 4]

ARR.myFunction()