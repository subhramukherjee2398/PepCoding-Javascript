//sync CallBack...


const greet = (name, callback, age, callabck2) => {
  let msg = "hello " + name;
  callback(msg);
  callabck2(age);
};

const log = (text) => {
  console.log(text);
};

const showAge = (num) => {
  console.log(num);
};

greet("Subhra", log, 23, showAge);
