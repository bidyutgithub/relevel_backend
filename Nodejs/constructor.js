//default constructor

const { tempVariable } = require("../export");

function Laptop(){
    this.make='dell';
    this.model='inspiron 3515';
    this.cores='8';
}
const myLaptop= new Laptop();

==============================================
===========this method===============

let temp = {
    name:"bidyut",
    age:25,
    intro : function(){
        return `Hello I am ${this.name} and my age is ${this.age}`
    }
}
function Abc(){
    console.log(this.name)
}
 console.log('temp', Abc.call(temp))   /*output- bidyut
                                                 temp
                                                 undefine */
======================same thing upper===========
let temp = {
	name: "Rohan",
	age: 23,
	intro : function(){
		return `Hello I am ${this.name} and my age is ${this.age}`
	}
}
temp.intro()
var name = 'helllo bidyut'

function abc(name){
	console.log(this.name)
}
abc(name)    //output- hello bidyut
=======================================