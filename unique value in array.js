let a = [1,7,3,2,2,1];
let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
console.log(unique);  //output-1,7,3,2