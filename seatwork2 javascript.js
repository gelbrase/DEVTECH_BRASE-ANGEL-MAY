class Vehicle {
    constructor(make, model, year, ownername) {
        this.make = make;
        this.model = model;
        this.year = year;  
        this.ownername = ownername;
    }

    displayDetails() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Ownername: ${this.ownername}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, ownername, doors) {
        super(make, model, year, ownername);
        this.doors = doors;
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Doors: ${this.doors}`);
    }
}

class NewCar extends Car { 
    constructor(make, model, year, ownername, doors) {
        super(make, model, year, ownername); 
        this.doors = doors;
        
    }

    displayDetails() {
        super.displayDetails();
        
    }
}

// Create an instance of the Vehicle class
const vehicle = new Vehicle('Ford', 'F-150', 2020, 'Angel Brase');

// Display vehicle details
console.log('Vehicle Details:'); 
vehicle.displayDetails();

// Create an instance of the Car class
const car = new Car('Honda', 'Accord', 2023, 'Angel Brase', 4);

// Create an instance of the NewCar class
const newCar = new NewCar('Highace', `white`, 2024, `Rica`, 4); 

// Display car details
console.log('Car Details:'); 
car.displayDetails();

// Display new car details
console.log('New Car Details:');
newCar.displayDetails(); 