class Custom{
  constructor(name,age){
    this.name =  name;
    this.age =  age;
    this.call = function(){
      console.log("he is "+this.name + " , "+this.age)
    }
  }
}

const p = new Custom("Subhra",23);

p.call()