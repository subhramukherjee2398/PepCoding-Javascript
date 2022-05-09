const p1 = {
    name : "AAA",
    age  : 23
}


const p2 = Object.assign({},p1);
p2.name = "BBBB"
console.log(p1)
console.log(p2)


const p3 = {...p1}
p3.name = "CCCCCC"
console.log(p1)
console.log(p3)