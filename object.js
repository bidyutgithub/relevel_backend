//revision class with missed topic

// access your last element in Array
 /*   let arr=[1,2,3,4,5,6,7,8,9,10];
  arr=[arr.length-1];
  console.log(arr);  //output--[9]

//========object seal=========================
  const object1 = {property1: 42};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// expected output: 33

delete object1.property1; // cannot delete when sealed
console.log(object1.property1);
// expected output: 33
//========object freez============

const obj = {
  prop: 42
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

console.log(obj.prop);
// expected output: 42

//==============javascript obj convert to json obj==========
 const obj={
  Name:"bidyut",
  age:24
}
const myJson=JSON.stringify(obj);
console.log(myJson);  //output--{"Name":"bidyut","age":24}

===========same thing==============
const obj=["cow","bear","lion"]


const myJson=JSON.stringify(obj);
console.log(myJson);  //output-- ["cow","bear","lion"]

===========================filter mathod========

//find age>20 how to do this

const age=[10,20,30,40,50,60];
 const result= age.filter(age=> age>20);
 console.log(result);  //output--[30,40,50,60]

 //=========find mathod======

const age=[10,20,30,40,50,60,70,80,90];
 const result= age.find(age=> age>20);
 console.log(result);  //output--30;

 //========== want output every element==========

 const age=[[1,2,3],
          [2,3,4,5],
          [29,39,48,18],
          [84,23,212,23]];
let i=0;
let j=0;
for(i=0;i<age.length;i++){
  for(j=0;j<age[i].length;j++){
    console.log(age[i][j]);
  }
}   //output--1,2,3,4,5,629,39,48,18,84,23,212,23

//=======for in loop==========

let arr=["bidyut","bilu","pilu"];
//for - in => indices will be fetched
//=> if you need to get the element then you need to do operation in array e.g arr[idx]

  for(elem in arr){
    console.log(elem)
  }  //output---0
                1
                2

//========array of index=======for in loop========

let arr=["bidyut","bilu","pilu"];
  for(elem in arr){
    console.log(elem,arr[elem])
  }  //output- 0 bidyut
               1 bilu
               2 pilu
==========for of loop==============
// for  of=> entire element will be extracted

let arr=["bidyut","bilu","pilu"];
 for(elem of arr){
   console.log(elem);
 }   //output--bidyut
               bilu
               pilu

//===============for of loop========in object===

const obj = {
  "fruit":"Apple",
  "flower":"Rose",
  "season":"Summer"
}
//for of
  for(keys of Object.keys(obj)){
    console.log(obj[keys])
  }  //output- apple
               rose
               summer
//==============same thing but output different

const obj = {
  "fruit":"Apple",
  "flower":"Rose",
  "season":"Summer"
}
//for of
  for(keys of Object.keys(obj)){
    console.log(obj[keys])
  }  //output--fruit
               flower
               season
==============for in object===========
const obj={
  "flower":"rose",
  "animal":"cow",
  "season":"summer"
};
 for(var key in obj){
   console.log(obj[key]);
 }
 //============For each and MAP========
 //FOR EACH
  
 let numberArray = [1, 2, 3, 4, 5];

//output the square of each number
let returnValue = numberArray.forEach(num => 
  console.log(`${num} * ${5} = ${num * 5}`)
);

//the array hasn't changed
console.log(numberArray);
console.log(returnValue);
    /* OUTPUT-- 1 * 5 = 5 
               2 * 5 = 10 
               3 * 5 = 15 
               4 * 5 = 20 
               5 * 5 = 25 
//=======MAP=======

//an array of numbers
let numberArray = [1, 2, 3, 4, 5];

//output the square of each number
let returnValue = numberArray.map((num) => num * num)

//view the results
console.log(numberArray);
console.log(returnValue);
    //output-[1,2,3,4,5]
            [1,4,9,16,25]

===========same output another way====

//an array of numbers
let numberArray = [1, 2, 3, 4, 5];

//output the square of each number
let returnValue = numberArray.map(num => console.log(`${num}*${num}= ${num * num}`));

//view the results
console.log(numberArray);
console.log(returnValue);
        //output-- 1 * 1 = 1 
               2 * 2 = 4 
               3 * 3 = 9 
               4 * 4 = 16 
               5 * 5 = 25 
              [1, 2, 3, 4, 5];
===============filter mathod=========
let arr=[4,5,6,7,8];
let result=arr.reduce((elem,mul)=>{
return elem=elem*mul;
},1);
console.log(result);
console.log(4*5*6*7);
   //output--6720
              840

==========pass by value and referance=========

//pass by value
function square (x){
  x=x*x;
  return x;
}
let y=10;
let result=square(y);
console.log(result);
 
//pass by referance

let person={
  name:"bidyut",
  age:24
}
function increaseAge(obj){
  obj.age=obj.age+1;
  obj={
    name:"sathi", 
    age:19
  }
  console.log(obj);   //output--sathi,19
}
increaseAge(person);
console.log(person);  //output--bidyut,25

====================
