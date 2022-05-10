Array.prototype.myMAp = function (cb) {
  let newMArr = [];

  for (let i = 0; i < this.length; i++) {
    newMArr.push(cb(this[i]));
  }

  return newMArr;
};

let arr2 = [10, 20, 30, 40, 50];

const Suqare = (x) => {
  return x * x;
};

let Rval = arr2.myMAp(Suqare);
console.log(Rval);
