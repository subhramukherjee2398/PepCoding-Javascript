Array.prototype.MyFilter = function (cb) {
  let newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArray.push(cb(this[i]));
    }
  }
  return newArray;
};

const isEven = (x) => {
  if (x % 2 == 0) {
    return x;
  }
};

let a = [1, 2, 4, 5, 6];

let v = a.MyFilter(isEven);
console.log(v);
