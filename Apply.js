const person1 = {
    name: "subhra",
    age: 23,
  };
  
  const person2 = {
    name: "Mukherjee",
    age: 30,
  };
  
  let fn = function (city,car) {
    console.log(this.name + " is  " + this.age + " old " + ' & He is in ' + city + ' with ' + car);
  };
  
  fn.apply(person1, ["Kolkata" , "5520"]);
  fn.apply(person2, ["Bangalore", "6321"]);
  