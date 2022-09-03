========= 3 way creat an object in nide js====================
//////////////////////////////////////////
let laptop={"name":"bidyut"}
laptop    //output-object-{"name":"bidyut"}
=======================================

let laptop={"name":"bidyut"}
laptop
Object.create(laptop)  //output-{}
=================================
let laptop={"name":"bidyut"}
laptop
Object.create(laptop)
let laptop2=Object.create(laptop)
laptop2
laptop2.name   //output "bidyut"
==========================================================================
====================object with multiple  adding================
================Ecma script 6=================

// class method

class Animal{
    constructor(type,color){
      this.type=type;
      this.color=color;
    }
 walk(){
   console.log('i can walk')
 }
 eat(){
   console.log('i can eat',this.type, this.color)
 }

}

let animal1=new Animal('dog','white')
console.log('animal1',animal1)
let animal2=new Animal('cat','black')
console.log('animal2',animal2)    /*output- animal1 
                                   Object { type: "dog", color: "white" }
                                    animal2 
                                   Object { type: "cat", color: "black" } */
============================================================
===============same thing another way   upper coad===========
 //traditional way
    //before Ecma script
//constructor
 function Animal(typeof,color){
    this.type=typeof;
    this.color=color
 }


let animal1=new Animal('dog','white')
console.log('animal1',animal1)
let animal2=new Animal('cat','black')
console.log('animal2',animal2)    /*output- animal1 
                                   Object { type: "dog", color: "white" }
                                    animal2 
                                   Object { type: "cat", color: "black" } */