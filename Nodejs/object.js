///// 3 type create object/////////

let obj={}




let obj2= new Object()


let obj3=Object.create(obj2)
==========================================
///accessing property in object in js////
// 1st type
let tempObj={
    name:'bidyut',
    age:25
  }
  console.log(tempObj.age)
  console.log(tempObj.name)   //output-25,bidyut

======================
  //2nd type
  let tempObj={
    name:'bidyut',
    age:25
  }
  console.log(tempObj['age']);
  console.log(tempObj['name']);     //output-25,bidyut

  ================================================================
  //another way
  let temp={
    'name':'bidyut',
    'age':25,
    'address':'janadighi',
  }
  const clone=Object.create(temp)
  console.log(clone.name)
  console.log(clone.age)
  console.log(clone.address)   /*output-bidyut
                                        25
                                        janadighi
                                        */
=========================same logic upper coad=============
let temp={
	'name':'bidyut',
	'age':25,
	'address':'janadighi',
}
const clone=Object.create(temp)

clone["name"]='rohan';

console.log(clone.name)
console.log(clone.age)
console.log(clone.address)

console.log(temp.name)     /* output-rohan
                                    25
                                    jandighi
                                    bidyut
                                     */
=========================================================
function student(name,address){
  this.name=name;
  this.address=address;
}
const student1=new student("sathi","thanachoko")


const student2=new student("pilu","janadighi")
console.log(student2)   //output-Object { name: "pilu", address: "janadighi" }
==============================================================================
==========================finding object==================

const student={
  name:"bidyut",
  age:25,
  hobby:"coading"
}

//using . operater

//console.log(student.hobby)    //output-coading

//using array opereter
console.log(student['name'])    //output-bidyut
======================another way finding way=================
const student={
  name:"bidyut",
  age:25,
  hobby:"coading"
}
let person='name'
console.log(student.name)
//console.log(student['name'])   //output-bidyut
========================================================
=====================================

const student={
  name:"bidyut",
  age:25,
  hobby:"coading",
  info:function(){
    console.log("i am a student in relevel")
}
}
let person='name'
console.log(student.info())
//console.log(student['name']) //output-"i am a student in relevel"
=====================================


const student={
  name:"bidyut",
  age:25,
  hobby:"coading",
  info:function(){
    console.log("i am a student in relevel")
}
}
let person='name'
student.info()    //output-"i am a student in relevel"
==============================================
========output-- bidyut sahoo--------------
const student={
  fname:"bidyut",
  lname:"sahoo",
  age:25,
  hobby:"coading",
  info:function(){
    console.log("i am a student in relevel")
},
fullname:function(){
console.log(this.fname+" "+this.lname)
 }
}
let param="name"
student.fullname();  //output-bidyut sahoo
