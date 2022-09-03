//call back
function greet(callback){
    callback();
    console.log('welcome to my house');
  }
 
  greet (function(){
    console.log('hi sathi')
  });        //output-hi sathi
                   //  welcome to my house

===============SafeArrayme coad arrow function==========

function greet(callback){
    callback();
    console.log('welcome to my house');
  }
 
  greet (()=>console.log('hi sathi'));
              //output-hi sathi
                   //  welcome to my house
==============================================================
===================call back with asynchronous=================
 console.log('hi sthi');

 function callback(){
    console.log('welcome to my house');
 }
 setTimeout(callbacck,2000);

 console.log('join in my life')
             /*output-hi sathi
                join in my life
                welcome to my house */
==================================================================