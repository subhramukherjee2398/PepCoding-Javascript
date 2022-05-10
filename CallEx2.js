const person1 = {
    name: "subhra",
    age: 23,
  };
  
  const person2 = {
    name: "Mukherjee",
    age: 30,
  };
  
  let fn = function () {
    console.log(this.name + " is  " + this.age + " old ");
  };
  
  fn.call(person1);
  fn.call(person2);
  