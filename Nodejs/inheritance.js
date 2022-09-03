class person {
    constructor(name){
        this.name = name;
    }
    //method to returning the string
       toString(){
        return (`Name of person: ${this.name}`);
     }
   }



   class student{
   constructor(name,id){
  //super keyword for calling the avobe class constructor
             super(name);
             this.id=id;
      }
 
   toString(){
     return(`${super.toString()},Student ID: ${this.id}`);
  }
}

let student1=new student('sathi',22);
console.log(student1.toString());   // output- worng output

==============================same upper coad  modifi==================

class person {
   constructor(name){
       this.name = name;
   }
   //method to returning the string
      toString(){
       return (`Name of person: ${this.name}`);
    }
  }

class student{
  constructor(id){
 //super keyword for calling the avobe class constructor
            
            this.id=id;
     }

  toString(){
    return(`Student ID: ${this.id}`);
 }
}

let student1=new student(22);
let person1=new person('sathi')
console.log(student1.toString());
console.log(person1.toString());    /* 
                                      Student ID: 22
                                       Name of person: sathi
                                       */

===========================================================================
====================inheritance======================
class Animal{
   constructor(type){
     this.type=type
   }
   run(){
     console.log("Animal is running");
        }
   }
 
 class Bird extends Animal{
   
 }
 
 const lion=new Animal('mammels');
 const parrot=new Bird('bird');
 
 console.log(parrot.type)
 parrot.run()
 
 console.log(lion.type);
 lion.run();            /* bird
                           Animal is running
                           lion
                           Animal is running
                           */
==================================================
===============super() method use same upper coad =============

class Animal{
   constructor(type){
     this.type=type
   }
   run(){
     console.log("Animal is running");
        }
   }
 
 class Bird extends Animal{
    constructor(type,noOfWings){
       super(type);
       this.wing=noOfWings;
    }
   run(){
      console.log("bird is flying")
   }
 }
 
 const lion=new Animal('mammels');
 const parrot=new Bird('bird',2);
 
 console.log(parrot.type)
console.log(parrot.wing)
 parrot.run()
 
 console.log(lion.type);
 lion.run();       output-/*
                             bird
                             2
                           bird is flying
                           lion
                           Animal is running
                            */
==================================================