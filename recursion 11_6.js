 /*
 //factorial find in recursion
 function factorial(n){
    //basse call
    if(n==1){
      return 1;
    }
    //recursive call
    let response=factorial(n-1); //this is always recursion function (n-1)
    //self work
    return response*n;  
    
    // 5!=24*5=120   that is my answar
    // 4!=6*4=24
    // 3!=2*3=6
    // 2!=1*2=2
    // 1!=1*1=1
                        
 }
  console.log(factorial(5));  // output-120
  =================
  ===========call stuck============
// simple example

function a(){
  b();  //this line exqute then output -i love u
  console.log("i love u")
}
function b(){
  c(); // this line exqute then output -i hate u
  console.log("i hate u")
}
function c(){  
  console.log("i miss u") //output i miss you
}
a();
   //output--i miss you
             i hate you
             i love you
======================
========queschion---1,2,3,4-add 5
 //incrasing
function find(n){
  if(n==1){
    console.log(1)
    return;
  }
  find (n-1);
  console.log(n)
}
find(5);
      //output--1,2,3,4,5
======decrasing sam function===========

function decreasing(n){
   if(n==1){
    console.log(1)
     return 1;
 }
  console.log(n)
  decreasing(n-1);
  }
 decreasing(5);
 =========   