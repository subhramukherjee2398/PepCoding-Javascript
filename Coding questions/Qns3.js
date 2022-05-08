var a   = 10 ;
console.log("line-2",a);
function fn(){
    console.log("line-4",a)
    var a = 20;
    a++;
    console.log("line-7",a)
    if(a){
        var a = 30;
        a++;
        console.log("line-11",a)
    }
    console.log("line-13",a)
}
fn();
console.log("line-16",a)