function printFruits(arr){
    let index = 0
    return {
        next: function(){
            return index < arr.length ? {value : arr[index++], done : false} : {value : undefined, done : true}
        }
    }
}


const arr = ['mango', 'apple', 'banana']

const fruitsIterator = printFruits(arr)

console.log(fruitsIterator.next()) // {value : 'mango', done: false}

console.log('heyyyy i am after function iteration');

console.log(fruitsIterator.next()) // {value: 'apple', done: false}

console.log(fruitsIterator.next()) // {value: 'banana', done: false}

console.log(fruitsIterator.next()) // {value : undefined, done: true}
 
/* output-Object { value: "mango", done: false }
                 heyyyy i am after function iteration
                 Object { value: "apple", done: false }
                 Object { value: "banana", done: false }
                 Object { value: undefined, done: true }
                   */


// 1. iterator function always return a next()
// 2. itertor return a object as a value which has two keys {value : , done: false}
=================================================how it itrator =========

//run in chrome browser

const fruit=['mango','apple','banana']
const itrator=fruit[Symbol.iterator]()


console.log(itrator.next())
console.log(itrator.next())
console.log(itrator.next())
console.log(itrator.next())
            /* output-Object { value: "mango", done: false }
                 Object { value: "apple", done: false }
                 Object { value: "banana", done: false }
                 Object { value: undefined, done: true }
                   */
================================================================
=========================generator=======================
//use --- *
//use --- yield

function *printFruit(){
    yield "mango"
     yield "apple"
     yield "banana"
    
  }
  const arr=['mango','apple','banana']
  const fruititrator=printFruit()
  console.log(fruititrator.next())
  console.log(fruititrator.next())
  console.log(fruititrator.next())
  console.log(fruititrator.next())
                  
                   /* output-Object { value: "mango", done: false }
                 Object { value: "apple", done: false }
                 Object { value: "banana", done: false }
                 Object { value: undefined, done: true }
                   */
=======================same coad use for loop================
function *printFruit(arr){
    for(let i=0;i<arr.length;i++){
        yield arr[i]
    }
}
const arr=['mango','apple','banana']

const fruititrator=printFruit(arr)
console.log(fruititrator.next())
console.log(fruititrator.next())
console.log(fruititrator.next())
console.log(fruititrator.next())
           
                     /* output-Object { value: "mango", done: false }
                 Object { value: "apple", done: false }
                 Object { value: "banana", done: false }
                 Object { value: undefined, done: true }
                   */