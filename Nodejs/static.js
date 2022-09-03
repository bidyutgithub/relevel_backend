 


 //class
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
    return `my name is ${this.name} and  my age isd ${this .#age}`

}

set setAge(age){
    this.#age=age
 }

}

console.log(person.address)    // output- janadighi
=========================static==============

class Student{
    constructor(name,surname,age,address){
     this.name =name
     this.surname=surname
     this.age = age
   this.address = address
   
   }
   info(){
     console.log('i am a student in relevel')
   }
   fullname(){
     console.log(this.name+" "+this.surname)
    }
  
  //this is a static function without any object 
  static generic(){
    console.log('i am a static function')
  }
    static genericvar=12;
 }
   const Student1=new Student("bidyut","sahoo",25,"janadighi")
   console.log(Student1)

Student1.info() //that is class
Student1.fullname() //that is class
Student.generic(); //this is a static function(not a object)
console.log(Student.genericvar); //not  OBJECT
              
                /* output-Object { name: "bidyut", surname: "sahoo", age: 25, address: "janadighi" }  
                               i am a student
                               bidyut sahoo
                               i am a static function
                               12
                                */