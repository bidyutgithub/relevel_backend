
===================sorting===================






=============how it work this upper coad ===================
function insertionSort(arr){
  let n=arr.length;
  for(let  i=0;i<n;i++){
    let element=arr[i]
    let j=i-1;
    while(j>=0 && element<arr[j]){
      arr[j+1]=arr[j];
    j--;
  }
    arr[j+1]=element;
    console.log(arr);
 }
  return arr;
}
insertionSort([5,4,2,1,6])
    //output-[ 5, 4, 2, 1, 6 ]
             [ 4, 5, 2, 1, 6 ]
             [ 2, 4, 5, 1, 6 ]
             [ 1, 2, 4, 5, 6 ]
             [ 1, 2, 4, 5, 6 ]
             [ 1, 2, 4, 5, 6 ]

==================