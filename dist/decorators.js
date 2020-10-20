"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Logger(target) {
    // * first before factory things will be executed in top down method
    console.log("LOGGER FACTORY");
    return function (constructor) {
        console.log(target);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    // ! first before factory things will be executed in top down method
    console.log("TEMPLATE FACTORY");
    // * returning a class in class decorator by using below method so the returning class code is executed only when instance object is created
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1").textContent = this.name;
                }
                console.log("hello world");
            }
        };
    };
}
// ! decorators executes in bottom up approach
let Person = /** @class */ (() => {
    let Person = class Person {
        constructor() {
            this.name = "Rendering Template!";
            console.log("new app");
        }
    };
    Person = __decorate([
        Logger("Hello world"),
        WithTemplate("<h1>Decorators</h1>", "main")
    ], Person);
    return Person;
})();
const person_one = new Person();
console.log(person_one);
function Log2(target, name, descriptor) {
    console.log("Accessor decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log3(target, name, descriptor) {
    console.log("Method decorator");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
function Log4(target, name, position) {
    console.log("Parameter decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}
function Log(target, propName) {
    console.log("property decorator");
    console.log(target, propName);
}
let Product = /** @class */ (() => {
    class Product {
        constructor(title, price) {
            this.title = title;
            this._price = price;
        }
        set price(value) {
            if (value > 0) {
                this._price = value;
            }
            else {
                throw new Error("Invalid Price!");
            }
        }
        getPriceWithTax(tax) {
            return this._price * (1 + tax);
        }
    }
    __decorate([
        Log
    ], Product.prototype, "title", void 0);
    __decorate([
        Log2
    ], Product.prototype, "price", null);
    __decorate([
        Log3,
        __param(0, Log4)
    ], Product.prototype, "getPriceWithTax", null);
    return Product;
})();
// ? decorators runs when class is defined not when instance object is created!
const p1 = new Product("Book", 19);
const p2 = new Product("Book2", 26);
// auto binding
function AutoBind(target, methodName, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
        },
    };
}
class Printer {
    constructor() {
        this.message = "This works";
    }
    showMessage() {
        console.log(this.message);
    }
}
const p = new Printer();
const button = document.querySelector("button");
button === null || button === void 0 ? void 0 : button.addEventListener("click", p.showMessage.bind(p));
