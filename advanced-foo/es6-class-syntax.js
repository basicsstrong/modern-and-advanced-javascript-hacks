'use strict';
const jack = {
    name: 'Jack',
    age: 12,
    printInfo: function(){
        console.log(`I am ${this.name} and my age is ${this.age}`)
    }
}

jack.printInfo()
jack.age = 40
console.log(jack.age)

const Person = function(name){
    if(!new.target){
        throw new Error('Not a Function')
    }
    this.me = this.name;
}

const jazz = new Person('Jazz');
// Person('Elina');


//ES6
class Home{
    constructor(rooms, kitchens, flooring){
        this.kitchens = kitchens,
        this.rooms = rooms,
        this.implemnentedFlooring = flooring
        this.bathrooms = 1
        this.floors = 1
    }

    //ES2022
    #stores = 2;

    //getter
    get floor(){
        return this.implemnentedFlooring;
    }

    //setter
    set floor(floor){
        this.implemnentedFlooring = floor;
    }

    createRoom(){
        this.rooms = this.rooms + 1;
    }

    createFloor(){
        this.floors = this.floors + 1
        this.#createBathroom();
    }

    #createBathroom(){
        this.bathrooms = this.bathrooms + 1;
    }

}
//console.log(typeof(Home))

const myHome = new Home(5, 2, 'Marble');
myHome.createRoom();
myHome.floor = 'Concrete'
console.log(myHome.rooms)
console.log(myHome.kitchens)
console.log(myHome.floor)
console.log(myHome.bathrooms)
myHome.createFloor();
console.log(myHome.bathrooms)

Home(5, 2, 'Marble');

