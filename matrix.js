// ===============reverse wave matrix 1================
// let mat=[
//         [1,2,3],
//         [4,5,6],
//          [7,8,9]
//         ];
//  let n=3;
//  function rotate180Mat(mat){
// 	  for(let i=n-1;i>=0;i--){
//       for(let j=n-1;j>=0;j--){
//         console.log(mat[i][j])
//       }
//     }
//  }

// rotate180Mat(mat);

// ==========================wave matrix===============
/*function matrix(arr){
    for(let i=0;i<arr[0].length;i++){
      if(i%2==0){
       // top to down
        for(let j=0;j<arr.length-1;j++){
          console.log(arr[j][i])
        }
      }else{
     //down to top
       for(let j=arr.length-1; j>=0;j--){
         console.log(arr[j][i])
       }         
      }
    }
  }
 let arr=[
       [1,2,3],
       [4,5,6,],
       [7,8,9,] 
   ]
 matrix(arr) */

 //===============transpose matrix============
 /*  const arr=[[1,1,1,4],
                [2,2,2,4],
                [3,3,3,4]]
  [
    [],
    [],
    [],
    []
  ]


 //3*4
//4*3
//e=empletation
var output=[...Array(arr[0].length)].map(e=>Array(arr.length))
for(i=0;i<arr.length;i++){
for(j=0;j<arr[0].length;j++){
output[j][i]=arr[i][j]
}
}
console.log(output)*/
//==================transpose matrix 2 onother way==========

/*  let arr=[[1,2,3],[4,5,6],[7,8,9]]
 let n=3;
 let output=[...Array(arr[0].length)].map(e=>Array(arr.length))
 function rotation180(arr){
  for(i=n-1;i>=0;i--){
  for(j=n-1;j>=0;j--){
    output[i][j]=arr[i][j]
  }
  } 
 }
console.log(output)
rotation180(arr);    */

//========================================================
//====================multipilation==========================

//  let one = [
//   [1,2,3],
//   [4,5,6]
// ]
// //2*3
// //1*1+4*2
// let two=[
//               [1,2],
//         [3,4],
//         [5,6]
// ]
// //3*2

// let r1= one.length;
// let c1=one[0].length;
// let r2= two.length;
// let c2=two[0].length;

// let res = [...Array(r1)].map(e=>Array(c2));

// for(let i=0;i<res.length;i++){
//   for(let j=0;j<res[0].length;j++){
//             let sum =0;
//     for (let k=0;k<c1;k++){
//       let val =one[i][k]*two[k][j];
//       sum+=val
      
//     }
//     res[i][j]=sum
//   }
   
// }

// console.log(res)
//=========================print matrix in sprial term==================
   //print matrix in sprial term
      //print matrix in sprial term
     /* let arr=[[1,2,3],[4,5,6][7,8,9]];
      let rowmin=0;
      let rowmax=arr.length-1;
      let colmin=0;
      let colmax=arr[0].length-1;
      let counter=0;
   //nel= number of element
     let nel=arr.length*arr[0].length;
     while(counter<nel){
       
     for(let row=rowmin;counter<nel&& row<=rowmax;row++){
          console.log(arr[row][colmin])
     }
       colmin++;
     
    for(let col=colmin;counter<nel && col<=colmax;col++){
     console.log(arr[rowmax][col]);
       counter++;
     }
      rowmax--;
       
    for(let row=rowmax;counter<nel && row>=rowmin;row--){
      console.log(arr[row][colmax]);
      counter++;
     }
       colmax--;
       
    for(let col=colmax;counter<nel && col>=colmin;col--){
      console.log(arr[rowmin][col]);
      counter++;
    }
       rowmin++;
     } */