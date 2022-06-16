/* allSettled returns a  array of object with the key of status and value */

/*Example :  1*/

const p1 =  new Promise((resolve,reject)=>{
    resolve("P1 is resolve")
})



const p2 =  new Promise((resolve,reject)=>{
    resolve("P2 is resolve")
})



const p3 =  new Promise((resolve,reject)=>{
    resolve("P3 is resolve")
})

Promise.allSettled([p1,p2,p3]).then((arr)=>{
    console.log(arr)
})

/*
{status: 'fulfilled', value: 'P1 is resolve'}
{status: 'fulfilled', value: 'P2 is resolve'}
{status: 'fulfilled', value: 'P3 is resolve'}
*/

/* Example - 2 */


const b1 =  new Promise((resolve,reject)=>{
    resolve("1 is resolve")
})



const b2 =  new Promise((resolve,reject)=>{
    reject("b2 2 is rejected")
})



const b3 =  new Promise((resolve,reject)=>{
    resolve("P3 is resolve")
})

Promise.allSettled([b1,b2,b3]).then((arr)=>{
    console.log(arr)
}).catch((err)=>console.log(err))

/*  
{status: 'fulfilled', value: '1 is resolve'}
{status: 'rejected', reason: 'b2 2 is rejected'}
{status: 'fulfilled', value: 'P3 is resolve'}
*/