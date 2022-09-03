/*
============decreasing recursion================
print(5);
function print(n){
  if(n==1){
    console.log(1);
    return;
  }
console.log(n);

  print(n-1);
}  //output 5
            4 
            3 
            2 
            1
==========increasing recursion============
//decreasing recursion
print(5);
function print(n){
  if(n==1){
    console.log(1);
    return;
  }
    print(n-1);
console.log(n);
}  //output 1
            2
            3
            4 
            5
==================sorted in recursion============
let arr=[1,2,3,4,5,6];
isSorted(arr,0);
function isSorted(arr,i){
  //base case
  if(i==arr.length-1){
    return true;
  }
//recursive call
  let value=isSorted(arr,i+1);
  //self work
  if(value==true && arr[i]<arr[i+1]){
    return true;
  }else{
    false
  }
}  //output-true
==============sorted another way===================
let arr=[1,5,3,4,2,6];
 console.log(isSorted(arr,0));

 function isSorted(arr,i){
    //base case
    if(i==arr.length-1){
        return true;
    }
    //recursive call
    let value = isSorted(arr,i+1);
    //selfwork
    return value && (arr[i]<arr[i+1]);
 }   //output-false
 ==================binary string============
 
 //binary string without consecutive one
function combination(n){
  if(n==1 || n==2){
    return n;
  }
  return combination(n-1)+(n-1)*combination(n-2);
}
console.log(combination(3));
    //output-4