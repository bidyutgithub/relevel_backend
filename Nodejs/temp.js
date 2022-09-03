let temp={"name":"bidyut","age":25}

console.log(temp)   //output-"name":"bidyut","age":25

console.log(temp.__proto__)  //output-object{ }

console.log(Object.prototype)   ////output-object{ }
=============================================
=============prototype chaining===============

let temp={"name":"bidyut","age":25}
console.log(temp)  //output-"name":"bidyut","age":25

let temp2 = Object.create(temp)

console.log(temp2)  //output-{}

console.log(temp2.age) //output-25

console.log(temp2.name) //output-bidyut

//let temp2 age=40;
console.log(temp2.age=40)  //output-40

console.log(temp.age) //output-25

console.log(temp.name) //output-bidyut