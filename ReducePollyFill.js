const RArr = [ 10, 20 , 30 , 40 , 50]

const Sum  = (x,accumulator) =>{
   return accumulator + x ; 
}

const ReducrPollyFill = (arr,cb) =>{
   let sumEle = 0;
    for(let i = 0 ; i<arr.length ; i++) {
       sumEle = cb(arr[i],sumEle)
    }
    return sumEle;
   
}

console.log(ReducrPollyFill(RArr,Sum))