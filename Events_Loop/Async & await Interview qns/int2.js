
async function f1(){
    console.log(1)
}

async function f1(){
    console.log(2)
}

console.log(3)
f1()
console.log(1)
f2()

async function f2(){
    console.log("Goo!")
}

/*
3 - line 10
2 - line 7 because the second async override the first async function
Goo - line 16

*/