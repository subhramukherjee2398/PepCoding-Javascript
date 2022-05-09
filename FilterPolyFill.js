const FArr = [1, 4, 3, 8, 9, 11, 20];

const CheckEven = (x) => {
  if (x % 2 === 0) {
    return x;
  }
};

const FilterPoly = (arr, cb) => {
  let Filter = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      Filter.push(arr[i]);
    }
  }
  return Filter;
};

console.log(FilterPoly(FArr, CheckEven));
