// map

let arry  =  [1,2,3,4,5]

const newArr  = arry.map((x)=>{
    return x*x;
})
/* console.log(arry)
console.log(newArr) */

// PolyFill for Map 

let arr2 = [10,20,30,40,50]

const Suqare = (x) =>{
  return x*x
}

const MapPolyFill =  (arr,cb) => {
  
    let newArry = []

    for(let i = 0 ; i<arr.length ; i ++) {
        newArry.push(cb(arr[i]))
    }
    return newArry

}

console.log(MapPolyFill(arr2,Suqare));





