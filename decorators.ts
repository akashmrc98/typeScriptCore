function Logger(target: string) {
  // * first before factory things will be executed in top down method
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(target);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  // ! first before factory things will be executed in top down method
  console.log("TEMPLATE FACTORY");
  // * returning a class in class decorator by using below method so the returning class code is executed only when instance object is created
  return function <T extends { new (..._: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
        console.log("hello world");
      }
    };
  };
}

// ! decorators executes in bottom up approach
@Logger("Hello world")
@WithTemplate("<h1>Decorators</h1>", "main")
class Person {
  name = "Rendering Template!";
  constructor() {
    console.log("new app");
  }
}

const person_one = new Person();
console.log(person_one);

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
  console.log("Parameter decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

function Log(target: any, propName: string | Symbol) {
  console.log("property decorator");
  console.log(target, propName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid Price!");
    }
  }
  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// ? decorators runs when class is defined not when instance object is created!
const p1 = new Product("Book", 19);
const p2 = new Product("Book2", 26);

// auto binding
function AutoBind(
  target: any,
  methodName: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button");
button?.addEventListener("click", p.showMessage);

