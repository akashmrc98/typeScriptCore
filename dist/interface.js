"use strict";
var _a;
var Persons = /** @class */ (function () {
    function Persons(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    Persons.prototype.greet = function (phrase) {
        console.log("hello! Hi There! " + phrase);
    };
    return Persons;
}());
var user1;
user1 = {
    name: "akash",
    age: 22,
    greet: function (phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi there!");
var coolPerson = new Persons("akash", 22, false);
coolPerson.greet("akash");
var e1 = {
    name: "akash",
    privileges: ["cool"],
    startDate: new Date(),
};
function adder_new(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
var interfaceResult1 = adder_new("akash", " avinash");
interfaceResult1.split(" ");
console.log(interfaceResult1);
function printEmployeeInformation(emp) {
    console.log("Name:" + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges" + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("StartDate", emp.startDate);
    }
}
printEmployeeInformation(e1);
// type guards
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading Cargo Amount:" + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        console.log(vehicle.loadCargo(100));
    }
}
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving Speed", speed);
}
moveAnimal({ type: "bird", flyingSpeed: 20 });
// type casting
var userFormInput = document.getElementById("userInput");
var userFormInput1 = document.getElementById("userInput1");
if (userFormInput) {
    userFormInput.value = "Avinash";
    console.log(userFormInput);
}
var errorBag = {
    email: "It is invalid email",
    userName: "It must start with small case",
    age: "must be number",
};
// optional chaining
var fetchedUserData = {
    id: "u1",
    name: "Akash",
    job: { title: "CEO", des: "cool" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// nullish coalescing
// const nullValue = null;
// const nullValue = undefined;
var nullValue = "";
var storedData = nullValue !== null && nullValue !== void 0 ? nullValue : "DEFAULT";
console.log(storedData);
