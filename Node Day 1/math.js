function add(a,b){
    return a+b;
}


function sub(a,b){
  return a - b;
}

//module.exports = add; // exporting add function

// module.exports =  {
//   add,
//   sub
// }                   //exporting multiple function

module.exports = {
  addFn : add,
  subFn : sub
}

// exports.add1 = (a,b) => a + b;  //annoymous function