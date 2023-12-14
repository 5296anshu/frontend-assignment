// Base constructor function for Automobile
function Automobile() {
    this.fuelType = "Petrol";
    this.wheels = 4;
}

Automobile.prototype.start = function () {
    console.log("Engine started.");
};

Automobile.prototype.stop = function () {
    console.log("Engine stopped.");
};

// Derived constructor function for Car
function Car(type) {
    this.type = type;
}

Car.prototype = new Automobile();
Car.prototype.drive = function () {
    console.log("Car is in motion.");
};

// Example usage
let myCar = new Car("Sedan");
myCar.start();
myCar.drive();
myCar.stop();
