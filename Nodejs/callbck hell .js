// Callbacks hell example
function cheese(){
    console.log('Add lots of cheese');
   }
   function patty(cheese){
    console.log('Add veggies and patties');
    cheese();
   }
   function bun(patty){
    console.log('Take two fresh buns');
    patty(cheese);
   }
   function burger(bun){
    setTimeout(() => {
    bun(patty);
    console.log('Our Burger is ready');
    }, 2000);
   }
   burger(bun);
   console.log('Lets make a Burger');
                            /*  output-Lets make a Burger
                                       Take two fresh buns
                                       Add veggies and patties
                                       Add lots of cheese
                                       Our Burger is ready  */
======================================================
====================Same coad another way=============
setTimeout(function(){
	console.log('Hey I am from setTimeour callabck')

}, 200)



function first(){
    console.log('first function')

	secondFn()	
}

function secondFn(){
     console.log('Second function')

	thirdFn()

}

function thirdFn(){
      console.log('third function')

	fourthFn()

}

function fourthFn(){
          console.log('Fourth function')

}

first()         /* output-first function
                          second fuvntion
                          third function
                          fourth function   
                            hey i am from setTime our callback   */
==================================================