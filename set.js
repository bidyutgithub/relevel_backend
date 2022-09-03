///////////remove duplicate value by set mathod/////////////////
var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set(myArray);

console.log(myArray);
console.log(mySet);
 //remove duplicate value        
//output-Set(5) { 1, 2, 3, 4, 5 }
==============================================
//add mathod

var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set(myArray);

mySet.add('6')
console.log(mySet);
//output-[1,2,3,4,5,6]
===========

var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set(myArray);

mySet.add(1);
console.log(mySet);
   //output-[1,2,3,4,5]
==========

var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set([4,5,6]);

mySet.add(1));
console.log(mySet);
         //output-(4,5,6,1)
=========
var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set([4,5,6]);

mySet.add(1,2,3);
console.log(mySet);
      //output-( 4,5,6,1)
==========
var myArray =[1,2,3,4,5];
var addArray=[6,7];
var mySet=new Set([]);
mySet.add([...myArray,...addArray]);
console.log(mySet)
          //output-[1,2,3,4,5,6,7];
===========
var myArray=[1,2,3,4];
var mySet=new Set([4,5,6]);
mySet.add(1,2,3);
console.log(mySet);
//output-[4,5,6,1]
===========
var myArray=[1,2,3,4];
var mySet=new Set(myArray);
let a=[2,7,8,56,3,2,3];
let b=[5,5,6,6];
mySet.add([...a,...b]);
console.log(mySet);
//output-[2,7,8,56,3,2,3,5,5,6,6]
========================================
//delete mathod

var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set(myArray);

mySet.delete(4);
console.log(mySet);
     //output-[1,2,3,5]
==========================================

//clear mathod

var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set(myArray);

mySet.clear()
console.log(mySet);
     //output-()-- empty
===================================
//has mathod
var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set(myArray);


console.log(mySet.has(4));
                //output-true
=========
 //has mathod
 var myArray=[1,2,3,4,5,5,5,1,2,3];
 var mySet= new Set(myArray);
 

 console.log(mySet.has(6));
          //false
========================================

//size    find  the array length

var myArray=[1,2,3,4,5,5,5,1,2,3];
var mySet= new Set(myArray);


console.log(mySet.size);
       //output-5   length
=======================================
