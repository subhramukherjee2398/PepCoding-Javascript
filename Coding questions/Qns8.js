function fn(){
    console.log("hello Fn");
}

fn.prop = "Property of the function"
fn.myfan = function fn(){
    console.log("Adding Method to function")
}

fn();
fn.myfan();
console.log(fn.prop)

/*

Hello Fn-10
Adding Method...  - 11
"property" -12

*/