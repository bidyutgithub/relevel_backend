========max in array consecutive one===========
//inpute-[1,1,0,0,1,0,1,0,1,1,1,1]
 function getMax(arr,n){
    let count=0;
    let result=0
    for(let i=0;i<n;i++){
        if(arr[i]==0){
            count=0;
        }else{
            count++;
            result=Math.Max(result,count);
        }
    }
    return result;
 }
 let arr=new Array(1,1,0,0,1,0,1,0,1,1,1,1);
 let n=arr.length;
 console.log(getMax(arr,n))
 //output 4
 ================min in array consecutive one===========
 function getMin(arr,n){
    let count=1;
  arr.sort(function(a,b){
    return a-b;
  })
  for(i=0;i<n-1;i++){
    if(arr[i]+1 !=arr[i+1]){
      count++;
      return count;
    }
  }
 
 }
 let arr=[1,7,3,5,10];
 let n=arr.length;
 console.log(getMin(arr,n))
 //output-2
 ======================