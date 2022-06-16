let p = new Promise(function(resolve,reject){
    reject(new Error("some Error"))
    setTimeout(function(){
        reject(new Error("some Error"))
    },1000)
    reject(new Error("somne Error"))

})
p.then(null,function(err){
    console.log(1)
    console.log(err)
}).catch(function(err){
    console.log(2)
    console.log(err)
})

/*  
Part 1 : IN THIS function reject throw error at line no 2,
so we don't need to look forward the necxt line code..

part 2 : as it's reject so it's should be come inside the catch...but

part 3 : as then 1st parameter is null...

 then take two callback => 1st is for success and 2nd is for failed callback

 so this will come to line 9 block and print
 c.log(1)
 c,log(err)


*/