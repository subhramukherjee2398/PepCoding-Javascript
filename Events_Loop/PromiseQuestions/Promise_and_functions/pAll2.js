const p1 =  new Promise((resolve,reject)=>{
    resolve("P1 is resolve")
})



const p2 =  new Promise((resolve,reject)=>{
    reject("P2 is rejected")
})



const p3 =  new Promise((resolve,reject)=>{
    resolve("P3 is resolve")
})

const PromiseAllValue = Promise.all([p1,p2,p3])

PromiseAllValue.then((resolve)=>{
    console.log(resolve)
}).catch((reject)=>{
    console.log(reject)
})

/*  Here only reject console will be print because promise all needs to fullfill all promise..
if one promise reject and it's ends the promise and give reject

But race works differently-- Please watch the video.
*/
