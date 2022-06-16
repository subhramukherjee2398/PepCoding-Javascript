

const p1 =  new Promise((resolve,reject)=>{
    resolve("P1 is resolve")
})



const p2 =  new Promise((resolve,reject)=>{
    resolve("P2 is resolve")
})



const p3 =  new Promise((resolve,reject)=>{
    resolve("P3 is resolve")
})

const PromiseAllValue = Promise.all([p1,p2,p3])

console.log(PromiseAllValue)

/* promise all also return a promise..so console will be  Promise{pending} 
  Now we have to rsolve it with .then
*/

PromiseAllValue.then((resolve)=>{
    console.log(resolve)
})
