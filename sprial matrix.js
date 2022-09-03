//=========================print matrix in sprial term==================
   //print matrix in sprial term
      //print matrix in sprial term
     
     
      let arr=[[1,2,3],[4,5,6][7,8,9]];
      let rowmin=0;
      let rowmax=arr.length-1;
      let colmin=0;
      let colmax=arr[0].length-1;
      let counter=0;
   //nel= number of element
    
   let nel=arr.length*arr[0].length;
     while(counter<nel){
       
     for(let row=rowmin;row<=rowmax;row++){
          console.log(arr[row][colmin])
     }
       colmin++;
     
    for(let col=colmin;col<=colmax;col++){
     console.log(arr[rowmax][col]);
       counter++;
     }
      rowmax--;
       
    for(let row=rowmax;row>=rowmin;row--){
      console.log(arr[row][colmax]);
      counter++;
     }
       colmax--;
       
    for(let col=colmax;col>=colmin;col--){
      console.log(arr[rowmin][col]);
      counter++;
    }
       rowmin++;
     } 