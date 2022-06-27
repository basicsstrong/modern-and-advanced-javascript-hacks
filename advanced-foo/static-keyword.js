class Home{
    constructor(rooms, kitchens, flooring){
        this.kitchens = kitchens,
        this.rooms = rooms,
        this.implemnentedFlooring = flooring
        this.bathrooms = 1
        this.floors = 1
    }

    //ES2022
     static stores = 2;

    //getter
    static get floor(){
        return 'Default flooring';
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

Home.stores = 3
console.log(Home.stores)


const home = new Home(2, 4, "Wooden");
console.log(home.stores)
console.log(Home.floor)



