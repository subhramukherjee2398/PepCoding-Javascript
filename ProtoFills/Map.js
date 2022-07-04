
Array.prototype.MyMap  = function(cb){
    let newArray = []
    for(let i = 0 ; i<this.length ; i++){
       newArray.push(cb(this[i]))
    }
    return newArray
}

const Square = (x) =>{
   return x*x;
}

let a = [1 , 2 , 4 , 5 , 6]

let v  = a.MyMap(Square);
console.log(v)