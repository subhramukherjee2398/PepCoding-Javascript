

function resolveAfterNSeconds(n,x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(x)
        },n)
    })
}
//* alspo how much time it will take * /
(function(){

    let a = resolveAfterNSeconds(1000,1)
  // console.log(a)
    a.then(async function(x){
        let y  = await resolveAfterNSeconds(2000,2)
        let z  = await resolveAfterNSeconds(1000,3)
        let p = resolveAfterNSeconds(2000,4)
        let q = resolveAfterNSeconds(1000,5)
        console.log(x+y+z+await p + await q);
    })
})()

/*
p1 : line 13  the  function will return  a pending promise.
p2 : a.then means resolve and it will take time 1000 sec
p3 : for y , it will take 2000 sec... so 3000 total
p4 :  for Z , it will take 1000 sec... so 4000 total
p5 : after resolve those y and z we will get the value of  x and it's is 1
p6 : x  = 1 , y = 2 , z = 3
p7 : await p = 4 
p8 : await q  = 5
p9 : console(1 + 2 + 3  + 4 + 5 ) = 15
total time : 4000 + 2000 + 1000 = 7000
imp
but it will take 6000 ,because both p and q are same line and excute together.
so for q 1000 sec no needed.
total = 6000 sex

*/

