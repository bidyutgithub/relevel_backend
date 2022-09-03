/*
============parenthesis==============
// Print Parenthesis

function Printparentheses(result,open,close,n){

  //base case
 if(result.length==n*2){
   console.log(result.join(''));
   return ;
 }
  if(open<n){
    result.push("(");
    Printparentheses(result,open+1,close,n);
    result.pop();
  }
  if(close<open){
    result.push(")");
    Printparentheses(result,open,close+1,n);
    result.pop();
  }
}
Printparentheses([],0,0,3);
  //outpput-((()))
 //         (()())
//          (())()
//          ()(())
//          ()()()
=========================
=========join()   mathod================
let myPersonal=["laptop","mouse","keybord","speaker"];
 let output=myPersonal.join(" and ");  //space use
  console.log(output)
        //output--laptop and mouse and keybord and speaker
==================
//==========tiling problem===================
function getTiling(n){
  if(n<=2){
    return n;
  }
    return getTiling(n-1)+getTiling(n-2);
  
}
console.log(getTiling(4)); //1 1 2 3 5 8 13
console.log(getTiling(5)); //0 1 2 3 4 5  6
console.log(getTiling(6));

//4-output--5
//5-output--8
//6-output--13
=================laxicographycal order===============
//laxicographycal order

let createArray= (n) => {    //array function =>
  let nums= [];
  for(let i=0;i<n;i++){
    nums.push(i);
  }
  return nums;
}

 let lexiOrder = (nums) =>{
  nums.sort();
  return nums;
}

let printValue= (nums) =>{
  let str=" ";
  for(i=0;i<nums.length;i++){
    str=str+nums[i];
  }
  console.log(nums);
}
let n=15;
let arr=createArray(n);
printValue(lexiOrder(arr))
//output-0,1,11,12,13,14,2,3,4,5,6,7,8,9
======================permutation=========
function permute(str, l, r)
{
    if (l == r)
       console.log(str);
        
       else{
        for (let i = l; i <= r; i++){
           str = swap(str, l, i);
         permute(str, l + 1, r);
        str = swap(str, l, i);
     }
   }
}
  
function swap(a, i, j)
{
    let temp;
let charArray = a.split("");
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray).join("");
}
  
let str = "ABC";
let n = str.length;
permute(str, 0, n-1);
    //output-  ABC
               ACB
               BAC
               BCA
               CBA
               CAB
==============FIND STAIR========================
function findstep(n){
  if(n==1 || n==0){
    return 1;
  }
  else if(n==2){
    return 2;
  }
  else{
    return findstep(n-1)+findstep(n-2)+findstep(n-3);
  }
}
console.log(findstep(3))  //output-4
========================