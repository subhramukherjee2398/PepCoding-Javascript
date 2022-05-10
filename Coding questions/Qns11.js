const arr = [1 , 2 , 3 , 4 , 5]

const sumArray = arr.reduce((accumulator,x)=>{
    return accumulator + x;
},0)
console.log(sumArray)

/*

15

*/