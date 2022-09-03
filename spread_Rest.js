var returnvalue=Math.max(2,5,7,4,2,8);
console.log(returvalue);   //output-8
====================

//assign mathod

var myobj={}
Object.assingn(myobj,{a:1.b:2,c:3},{z:70,y:10})
console.log(myobj);
    //output-{a:1.b:2,c:3,z:70,y:10}
=========================
function sumOne(a,b){
    return a+b;

}
console.log(sumOne(5,10));  //output-15
===============

function sumOne(a,b){
    return a+b;
  
}
var myA=[3,4]
console.log(sumOne(myA));  //output-3,4,undefined
//console.log(typeof sumOne(myA))  //output-3,4,undefined,string
=================

function sumOne(a,b){
console.log(a,b);
  return a+b;
}
var myA=[3,4]
console.log(sumOne(3,4,1));    //output-3,4
====================

//spread operator

 function sumOne(...args){
    console.log(args);
    return 0;
 }
 var myA=[3,4,5];
 sumOne(...myA);   //output-3,4,5

 ==================

 function sumOne(a,b,...args){
    console.log(a,b);
    let sum=0;
    for(const args in args){
        sum+=args;
    }
    return sum;
 }
 
 sumOne(2,3,4,7,8,9);    //output-2,3
 ===================
 //use (for of)

 function sumOne(...args){
    
    let sum=0;
    for(let args of args){  //use of
        console.log(args)
        sum+=args;
    }
    return sum;
 }
 
 sumOne(2,3,4,7,8,9);   //output 2,3,4,7,8,9
 ===================================
 //use (for in)

 
 function sumOne(...args){
    
    let sum=0;
    for(let args in args){  //use in
        console.log(args)
        sum+=args;
    }
    return sum;
 }
 
 sumOne(2,3,4,7,8,9); //output-0,1,2,3,4,5
 ====================
 //sum 

 function sumOne(...args){
    
    let sum=0;
    for(let args in args){  //use in
        console.log(args)
        sum+=args;
    }
    console.log(sum)
    return sum;
 }
 
 sumOne(2,3,4,7,8,9);  //output-2,3,4,7,8,9 = 33
 ==================================
//first 2 args => multiply
//remaining one => added 
//return [sum,multiply]

 function sumOne(a,b,...args){
    console.log(args)
  let multiplication=a*b;  
  let sum = 0;
    for(let arg of args){
        console.log(arg)
        sum+=arg;
    }
    console.log(sum)
    return [sum,multiplication];
}

sumOne(2,3,4,7,8,9,35,41)    //output-2,3,4,7,8,9,35,41
                                     //104,6
=============================================

 


