=====simple recursion function============

function print(n){
    if(n==0){
      return;
    }
    console.log(n)
    print(--n);
  }
  print(10);

================