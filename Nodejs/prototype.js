//array prototype--proto
let arr=[1,2,3]
console.log(arr.__proto__)

===================================
 //what is the prototype of array.prototype

 let arr=[1,2,3,4]

 console.log(arr.__proto__.__proto__) //output-Object { … }


 console.log(Object.prototype)  //output-Object { … }



       BOTH console are outpt same
=============================================
===============
function Vichel(make,model){
      this.make=make;
      this.model=model;
   }
   const tatasafari=new Vichel('tata','manufacture by 2015')
   Vichel.prototype.future=function(){
      console.log("tatasafari have a super fast car")
   }
   tatasafari.future()
   console.log(tatasafari.model)     /* output-tatasafari have a super fast ca
                                               manufacture by 2015')  */
      ==================================================