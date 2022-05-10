
const p1 = {
    name : "AAA",
    age  : 23
}

const p2 = p1;
console.log(p1)
console.log(p2)

p2.name = "BBBBB"
console.log(p1)
console.log(p2)

/*

AAA,23  - 8
AAA,23  - 9

BBB,23 - 12
BBB,23  - 13



*/



