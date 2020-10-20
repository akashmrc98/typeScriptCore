interface Person {
  name: string;
  readonly age: number;
  greet(phrase: string): void;
  limit?: number;
}

// interface extends N number of interfaces while class extends one

interface Admin extends Persons {
  role: boolean;
}

class Persons implements Person {
  name: string;
  age: number;
  role: boolean;

  constructor(name: string, age: number, role: boolean) {
    this.name = name;
    this.age = age;
    this.role = role;
  }
  greet(phrase: string) {
    console.log(`hello! Hi There! ${phrase}`);
  }
}

let user1: Person;
user1 = {
  name: "akash",
  age: 22,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user1.greet("Hi there!");

const coolPerson = new Persons("akash", 22, false);
coolPerson.greet("akash");

type AdminPerson = {
  name: string;
  privileges: string[];
};
type EmployeePerson = {
  name: string;
  startDate: Date;
};

// interface SuperEmployeeE extends AdminPerson, EmployeePerson{}
// intersection types
type SuperPerson = AdminPerson & EmployeePerson;
const e1: SuperPerson = {
  name: "akash",
  privileges: ["cool"],
  startDate: new Date(),
};

// type guards
type Combinable = string | number;
type Numeric = Combinable | boolean;
type Universal = Combinable & Numeric;

//function overloads
function adder_new(a: number, b: number): number;
function adder_new(a: string, b: string): string;
function adder_new(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const interfaceResult1 = adder_new("akash", " avinash");
interfaceResult1.split(" ");
console.log(interfaceResult1);

type UnknownEmployee = AdminPerson | EmployeePerson;

function printEmployeeInformation(emp: UnknownEmployee) {
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

  loadCargo(amount: number) {
    console.log("Loading Cargo Amount:" + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    console.log(vehicle.loadCargo(100));
  }
}

// function useVehicle_1(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     console.log(vehicle.loadCargo(100));
//   }
// }

// Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
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
const userFormInput = document.getElementById("userInput")! as HTMLInputElement;
const userFormInput1 = <HTMLInputElement>document.getElementById("userInput1")!;

if (userFormInput) {
  (userFormInput as HTMLInputElement).value = "Avinash";
  console.log(userFormInput);
}

// index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
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

console.log(fetchedUserData?.job?.title);

// nullish coalescing
// const nullValue = null;
// const nullValue = undefined;
const nullValue = "";
const storedData = nullValue ?? "DEFAULT";
console.log(storedData);
