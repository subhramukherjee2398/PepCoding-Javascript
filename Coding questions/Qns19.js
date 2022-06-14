(function imediateA(a) {
  return(function imediateB(b) {
    console.log(a);
  })(1);
})(0);
