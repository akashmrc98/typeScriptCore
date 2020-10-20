"use strict";
var _a;
class Persons {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    greet(phrase) {
        console.log(`hello! Hi There! ${phrase}`);
    }
}
let user1;
user1 = {
    name: "akash",
    age: 22,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hi there!");
const coolPerson = new Persons("akash", 22, false);
coolPerson.greet("akash");
const e1 = {
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
const interfaceResult1 = adder_new("akash", " avinash");
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
class Car {
    drive() {
        console.log("Driving");
    }
}
class Truck {
    drive() {
        console.log("Driving");
    }
    loadCargo(amount) {
        console.log("Loading Cargo Amount:" + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        console.log(vehicle.loadCargo(100));
    }
}
function moveAnimal(animal) {
    let speed;
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
const userFormInput = document.getElementById("userInput");
const userFormInput1 = document.getElementById("userInput1");
if (userFormInput) {
    userFormInput.value = "Avinash";
    console.log(userFormInput);
}
const errorBag = {
    email: "It is invalid email",
    userName: "It must start with small case",
    age: "must be number",
};
// optional chaining
const fetchedUserData = {
    id: "u1",
    name: "Akash",
    job: { title: "CEO", des: "cool" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// nullish coalescing
// const nullValue = null;
// const nullValue = undefined;
const nullValue = "";
const storedData = nullValue !== null && nullValue !== void 0 ? nullValue : "DEFAULT";
console.log(storedData);
