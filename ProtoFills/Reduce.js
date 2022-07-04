Array.prototype.myReduce = function(cb,accumulator){
    let sumEle = accumulator;
    for(let i = 0 ; i<this.length ; i++) {
       sumEle = cb(this[i],sumEle)
    }
    return sumEle;
}

const Sum  = (x,accumulator) =>{
    return accumulator + x ; 
 }

let a = [1 , 2 , 3 , 4 , 5]

let v  = a.myReduce(Sum,0)
console.log(v)