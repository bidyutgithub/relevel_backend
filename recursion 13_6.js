  /*
  // fibonacci recursion problem solved

  function fibo(n){
    //base case
  if(n==0 || n==1){
    return n;
  }
  let result1=fibo(n-1); //recursive call
  let result2=fibo(n-2); //recursive call

  let result= result1+result2; // self work
  return result;
}
console.log(fibo(6));  //output=8
   //0 1 1 2 3 5 8 13  value
   //0 1 2 3 4 5 6 7   index
=======================
  // i want output 0 1 1 2 3 5 8

  function fibo(n){
 
  //base case
  if(n==0 || n==1){
     return n;
  }
  let res1 = fibo(n-1); //recursive call
  let res2 = fibo(n-2); //recursive call
  
  let res = res1+res2; //self work
  return res;
}
for(i=0;i<=6;i++){
  console.log(fibo(i))
}
   //output= 0 1 1 2 3 5 8
   ===============
   =========find l.c.m no=============
   const findGCD = (num1, num2) => {
 let a = Math.abs(num1);
 let b = Math.abs(num2);
 while (a && b && a !== b) {
 if(a > b){
 [a, b] = [a - b, b];
 }else{
 [a, b] = [a, b - a];
 };
 };
 return a || b;
};

num1 = 10;
num2 = 5;
console.log("L.C.M. :", (num1*num2) /findGCD(num1, num2))  
  //output-10
  ================ my array is sorted or not cheak============
  function isSorted(arr,index){
    //base case
    if(index==arr.length-1){
      return true;
    }
    //recursive call
  let value=isSorted(arr,index+1);
      
  //self work
  if(value && arr[index]<arr[index+1]){
    return true;
  }else{
    return false;
  }
  }
  console.log(isSorted([1,2,3,4,5,6],0));
       //output-true
 //or
   //console..log(isSorted([1,55,10,2,3,7],0));
      //output-false
======================subsequence===============

function printSubsequence(arr,index){
  //base case  1.self element  2.empty element
  if(index==arr.length-1){
    let result=[ ];
    result.push([arr[index]]);
    result.push([]);
    return result;
  }
  //recursive call
  let subsequence=printSubsequence(arr,index+1);  //increment
  
  //self work
  let selfwork=[ ];
  for(i=0;i<subsequence.length;i++){
    selfwork.push(subsequence[i])
    let value=[...subsequence[i]]
    value.unshift(arr[index])
    selfwork.push(value)
  }
return selfwork;
}
//[1,2,3]
// [3]
// [" "]
  
   console.log(printSubsequence([1,2,3],0))
    //output-​
​
1: Array [ 1, 3 ]
         [ 2, 3 ]
         [ 1, 2, 3 ]
         []
         [ 1 ]
         [ 2 ]
         [ 1, 2 ]
​
        length: 8
==============================