/*
 //     i/p--n=5
        o/p--0,1,2,3,4,5

function find(n){
  if(n==0)
    return;
find(n-1);
  console.log(n)
}
find(5);  
   //o/p--1,2,3,4,5
=======another way======
function print(n){
  for(i=0;i<=n;i++){
    console.log(i)
  }
}
print(5)
//o/p--0,1,2,3,4,5