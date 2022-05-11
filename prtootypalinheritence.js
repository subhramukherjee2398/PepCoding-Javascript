let p = {
  name: "AA",
  age: 25,

  showDetails: function () {
    console.log(this.name + " is " + this.age);
  },
};

p.showDetails();

let p2 = {
    name : 'BBB'
}

p2.__proto__ = p;

console.log(p2.name)
console.log(p2.age)
p2.showDetails()
