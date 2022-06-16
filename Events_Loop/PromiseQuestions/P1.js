
setTimeout(function(){
    console.log(1)
})
setTimeout(function(){
    console.log(2)
})

let  p = new Promise(function(resolve,reject){
    resolve();
})

console.log(3)

p.then(function(){
    console.log(4)
})

p.then(function(){
    console.log(5)
})

setTimeout(function(){
    console.log(6)
})

/*

3  - normal print
4  - micro task for promise - so print first
5  - micro task for promise - so print first
1  - waited at taskqueue then print
2  - waited at taskqueue then print
6  - waited at taskqueue then print

*/

