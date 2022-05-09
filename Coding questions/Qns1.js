console.log("v",varname);
var varname;
console.log("v",varname);
varname = "Captain"
console.log("v",varname)
Fn()
function Fn(){
    console.log("Hello from fn");
}
Fn()
FnContainer()
var FnContainer = function(){
    console.log("I am expression...")
}
FnContainer()

/*

uf
uf
captain
Hello from fn
hello from fn
Is not a function


*/