const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

/* executor will be callback ; and it will execute the function according to the function resolve or reject*/
/* Don't use arrow function it will thorw error "CustomPromise is not a constructor"*/
/* The error will occur because we are using this*/
function customPromise(executor) {
  // for current state
  let state = PENDING;
  let value = null;
  // for promiser changing we need a array to store all the callbacks
  let handlers = [];
  // to hgandle all catches
  let catchers = [];

  const resolve = (result) => {
    if (state !== PENDING) return;

    state = FULFILLED;
    value = result;

    // resolve accept successful callbacks
    // for changing them we are accesing value of those callbacks.

    handlers.forEach((h) => {
      h(value);
    });
  };

  const reject = (err) => {
    if (state !== PENDING) return;

    state = REJECTED;
    value = err;

    catchers.forEach((c) => value(c));
  };

  /* now we will implement Then and catch 
      As Promise is a Object so we create the Custompromise function as a Constructor
      And we know that this alsways return a empty object inside a constructor*/

  this.then = function (Successcallback) {
    if (state === FULFILLED) {
      Successcallback(value);
    } else {
      handlers.push(Successcallback);
    }
  };

  this.catch = function (Failedcallback) {
    if (state === REJECTED) {
      Failedcallback(value);
    } else {
      catchers.push(Failedcallback);
    }
  };

  executor(resolve, reject);
}

const dowork = (res, rej) => {
  if (2 == 2) {
    setTimeout(() => res("Promise Resolve"), 1000);
  } else {
    setTimeout(() => rej("Promise Rejected"), 1000);
  }
};

let Greeting = new customPromise(dowork);

Greeting.then((val) => console.log("then Promise", val));
Greeting.catch((err) => console.log("Catch Promise", err));
