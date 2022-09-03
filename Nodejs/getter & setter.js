class person{
    #age


//static
static address='janadighi'

//constructor
constructor(name){
    this.name= name
}

//intro
printIntro(){
    return `my name is ${this.name} and  my age is ${this .#age}`

}

get getAge(){
  return this.#age
}

set setAge(age){
    this.#age=age
 }

}

console.log(person.address)

let p1= new person('rohan')
p1.setAge=25
console.log(p1.printIntro())
console.log(p1.getAge)     
                       /* output-janadighi
                              my name is rohan and  my age is 25
                              25 */
=====================================