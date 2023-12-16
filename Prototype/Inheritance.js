// Vehicle constructor function
function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed || 0;
    this.fuelType = fuelType || 'Unknown';
}

// Adding common methods to the Vehicle prototype
Vehicle.prototype.accelerate = function (increaseSpeed) {
    this.speed += increaseSpeed || 5;
    console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.brake = function (decreaseSpeed) {
    this.speed -= decreaseSpeed || 5;
    console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.refuel = function () {
    console.log(`${this.brand} ${this.model} is refueling.`);
};

// Car constructor function
function Car(brand, model, speed, fuelType, numberOfWheels) {
    // Inheriting properties from the Vehicle constructor
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels || 4;
}

// Inheriting methods from the Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);

// Adding an additional method to the Car prototype
Car.prototype.honk = function () {
    console.log(`${this.brand} ${this.model} is honking.`);
};

// Airplane constructor function
function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    // Inheriting properties from the Vehicle constructor
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines || 2;
    this.hasLandingGear = hasLandingGear || true;
}

// Inheriting methods from the Vehicle prototype
Airplane.prototype = Object.create(Vehicle.prototype);

// Adding an additional method to the Airplane prototype
Airplane.prototype.takeOff = function () {
    console.log(`${this.brand} ${this.model} is taking off.`);
};

// Creating instances of Car and Airplane
const myCar = new Car('Toyota', 'Camry', 40, 'Gasoline');
const myAirplane = new Airplane('Boeing', '747', 500, 'Jet', 4, true);

// Demonstrating method invocation
myCar.accelerate();
myCar.brake();
myCar.refuel();
myCar.honk();

myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
