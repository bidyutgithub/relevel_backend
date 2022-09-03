/*
===========reverse string using recursion====================

 function reverse(str,len){
   if(len==str.length){
     return;
   }
   reverse(str,len+1);
   console.log(str[len]);
 }
let a="abcde";
reverse(a,0);

   //output-edcba
===========reverse string using itrative==============

 function reverse(str){
  let reverseStr ="";
   for(let i=str.length-1;i>=0;i--){
     reverseStr+=str[i]
   }
   return reverseStr;
 }
let str="abcde"
console.log(reverse(str));