// normal implementation

const p = {
  name: "Subhra",
  age: 23,
};

const showDetails = function (city, state) {
  console.log(this.name + " " + this.age + " " + city + " " + state);
};

// write polyFill

Function.prototype.myBind = function (...agrs) {
  let obj = this;
  let params = agrs.slice(1);
  return function () {
    obj.apply(agrs[0], params);
  };
};

//CASE : 2
let showDetailsMYBind = showDetails.myBind(p, "kolkata", "WB");

showDetailsMYBind();
