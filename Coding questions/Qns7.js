let arr  = [ 1 , 2 , 3 , 4 ]
arr.newVal  = "Hi subhra"
arr.newMethod = function () {
    console.log("Hello new Method..")
}
console.log(arr)

for(let key in arr){
    console.log(key + ":" + arr[key])
}

arr[95] = 100;
console.log(arr)
console.log(arr.length)
console.log(arr[23])


