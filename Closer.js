function add(b) {
    let a = 10;
   return function addChild (){
        console.log(a+b)
    }
    
}

const Rval = add(5);
console.log(Rval)
Rval()
