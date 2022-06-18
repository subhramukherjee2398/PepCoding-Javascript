async function inc(x) {
  x = x + (await 1);
  return x;
}

async function increment(x) {
  x = x + 1;
  return x;
}

inc(1).then(function (x) {
  increment(x).then(function (x) {
    console.log(x);
  });
});

/*  

Part 1 : async func return promises and by using then we resolve them
Part 2 : for Inc 
 
await 1 = 1
so inc function will  return 2;

Part 3 : after inc(1) = 2;
and function(x) => x value is now 2;

Part 4: so increment take 2 and return x ( now value is 3)

Part 5 : afther then function now x is 3  and print 3;


*/
