// Base class for Automobile
const Automobile = {
    fuelType: "Petrol",
    wheels: 4,

    start: function () {
        console.log("Engine started.");
    },

    stop: function () {
        console.log("Engine stopped.");
    }
};

// Derived class for Car
const Car = Object.create(Automobile);
Car.type = "Sedan";
Car.drive = function () {
    console.log("Car is in motion.");
};

// Example usage
let myCar = Object.create(Car);
myCar.start();
myCar.drive();
myCar.stop();
