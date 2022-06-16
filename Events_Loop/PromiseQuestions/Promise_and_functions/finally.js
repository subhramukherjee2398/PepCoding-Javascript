
function test(){
    var loader  =  true;
    var a = 1+1;
    return new Promise((resolve,reject)=>{
        if(a == 2){
            resolve("Done")
        }
        else{
            reject(":Not done")
        }
    })
}
test().then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(()=>{
    console.log("clean Up")
    loader = false;
})

/*so by using finally we can clean a function or promise */