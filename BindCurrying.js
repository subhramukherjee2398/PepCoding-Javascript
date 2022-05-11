const add  =  (a,b) =>{
    console.log(a+b)
  }
  
  const addwith2 = add.bind(this,2);
  addwith2(4)
  addwith2(10)
  const addwith100 = add.bind(this,100);
  addwith100(4)
  addwith100(10)
  
  const addBind  = add.bind(this)
  
  addBind(3,3)