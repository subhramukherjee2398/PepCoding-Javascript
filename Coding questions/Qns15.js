
// Please Run it with Node js

"use strict"

console.log(this)


function showThis ( ){
 console.log(this)
}
showThis()


 const Ips = {
    name : "IPPPPS",
    f : function(){
        console.log(this)
    }
}
Ips.f(); 

 const Ips2 = {
    name : "IPPPPS",
    f : function(){
         function g(){
            console.log(this)
        }
        g();
    }
}
Ips2.f(); 
