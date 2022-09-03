class person{
	#add
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.#add = add;
    }

    get addValue() {
        return this.#add;
    }
    getDetails(){
        console.log(`Name is ${this.name},Address is: ${this.#add}`);
    }
}
 
let person1 = new person('Mukul',21);

person1.add_Address('Delhi');
console.log('add', person1.addValue)
person1.getDetails();     //output-add Delhi
                          // Name is Mukul,Address is: Delhi