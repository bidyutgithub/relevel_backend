=============midden two sorted array with merge sort============
function getMedian(ar1, ar2, n, m){

    // Current index of input array ar1[] 
     let i = 0;   
   // Current index of input array ar2[] 
     let j = 0; 
     let count;
     let m1 = -1, m2 = -1;
     // Since there are (n+m) elements,
     // There are following two cases
     // if n+m is odd then the middle
     // index is median i.e. (m+n)/2
     if ((m + n) % 2 == 1){
     
     for(count = 0;count <= (n + m) / 2;count++){
         if (i != n && j != m){
             m1 = (ar1[i] > ar2[j]) ? 
                ar2[j++] : ar1[i++];
             }
               else if(i < n){
                 m1 = ar1[i++];
             }  
             // For case when j<m,
             else{
                 m1 = ar2[j++];
             }
         }
         return m1;
       }
   
     // Median will be average of elements
     // at index ((m+n)/2 - 1) and (m+n)/2
     // in the array obtained after merging
     // ar1 and ar2
     else{
     for(count = 0;count <= (n + m) / 2;count++){
             m2 = m1;
             if (i != n && j != m){
                 m1 = (ar1[i] > ar2[j]) ? 
                     ar2[j++] : ar1[i++];
             }
               else if(i < n){
                m1 = ar1[i++];
             }
               
             // For case when j<m,
             else{
                m1 = ar2[j++];
             }
         }
         return (m1 + m2) / 2;
     }
 }
       
 // Driver code
 let ar1 = [1,3,4,7,10,12];
 let ar2 = [2,3,6,15];
   
 let n1 = ar1.length;
 let n2 = ar2.length;
 console.log(getMedian(ar1, ar2, n1, n2));
 =================meidan two sorted array another Way=========

 function findMeidanSortedArray(arr1,arr2){
  if(arr2.length < arr1.length){
    return findMeidanSortedArray(arr2,arr1);
  }
  let n1=arr1.length;
  let n2=arr2.length;
  
  let low=0;
  let high=n1;
  
   while(low <= high){
     
     let cut1=(low+high) >> 1;   //let cut1=parseInt(low+high)/2
     let cut2=parseInt((n1+n2+1)/2)-cut1;
     
     let left1=cut1==0 ? Number.MIN_VALUE : arr1[cut1-1];
     let left2=cut2==0 ? Number.MIN_VALUE : arr2[cut2-1];
     
     let right1=cut1==n1 ? Number.MAX_VALUE :arr1[cut1];
     let right2=cut2==n2 ? Number.MAX_VALUE :arr2[cut2];
     
     if(left1<=right2 && left2<=right1){
       if((n1+n2)%2 == 0){   //even no
         return parseInt((Math.max(left1,left2)+Math.min(right1,right2))/2);             
       }else{
         return Math.max(left1,left2);
       }
     }
     else if(left1>right1){
       high=cut1 - 1;
     }
     else{
       low=cut1 +1;
     }
   }
}
 findMeidanSortedArray([1,3,4,5,7,10],[2,3,6,9]);
//output -4;