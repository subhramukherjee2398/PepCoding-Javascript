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
  
let fnBind = fn.bind(person1, "Kolkata" , "5520");
fnBind()
let fnBind2 =  fn.bind(person2, "Bangalore", "6321");
fnBind2()