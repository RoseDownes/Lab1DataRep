class Vehicle {
    constructor(make, model, year) { //this is a constructor
        this.make = make;
        this.model = model;
        this.year = year;

    }
    Information() {
        console.log(`Make: ${this.make}`)
        console.log(`Model: ${this.model}`)
        console.log(`Year: ${this.year}`) //puting it to the console

    }
}
let myCar = new Vehicle("VW", "Golf", 1994); //making an instance of the class
myCar.Information()

class Cars extends Vehicle { //car class inherits from vehicle class
    constructor(make, model, year, doors) {
        super(make, model, year); //super gets the make model and year from vehicle
        this.doors = doors;
    }
    Information(){
        super.Information(); //super fet the infromation from inherited class
        console.log(`Doors: ${this.doors}`)
    }
}
let MyCar2 = new Cars("VW", "Golf", 2000, 5); //making an instance of the class Cars
MyCar2.Information();