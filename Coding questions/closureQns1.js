

 for(var i = 0 ; i<= 5 ; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}

/* REASon : 1 
P1 : global instance create for i;
p2 : setTimeout is a async task so it will wait on Task queue
p3 : for the loop i is now 6 ( not 5 because for the last time it becames 6)
p4 : now when setTimeout try to access i; for the closures it will move upwords to acess i and now i is 6 and it's print 6 5 times

*/

 for(let j = 0 ; j<= 5 ; j++){
    setTimeout(()=>{
        console.log(j)
    },1000)
} 

/* It will print 0 to 5 because let is local scope; */


 for (var i = 0; i <= 5; i++) {
  (function () {
    var j = i;
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })();
}

/* 
it will print 0-6 
because very time the function is calling 
and the setimeout is accessing j and inside j is update every time for i.

*/

  let i = 0;
 for( ; i<= 5 ; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
} 

/*  
it will print 6 6 times
because i is now globally declare.

*/
