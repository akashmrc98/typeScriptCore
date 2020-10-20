"use strict";
class Department {
    constructor(name, roll, employees) {
        this.name = name;
        this.roll = roll;
        this.employees = employees;
        this.name = name;
        this.roll = roll;
        this.employees = employees;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class Top extends Department {
    // singleton private constructor use private in front of the constructor
    constructor(name, roll, employees, admins) {
        super(name, roll, employees);
        this.admins = admins;
        this.admins = admins;
    }
    static founder() {
        console.log(`this company founded by ${this.company} on ${this.year}`);
    }
    static getInstance() {
        if (Top.instance) {
            return this.instance;
        }
        this.instance = new Top("akash", 2, ["cool", "hot", "mild"], ["cool", "hot"]);
    }
    get mostRecentAdmin() {
        return this.admins[this.admins.length - 1];
    }
    set rollNo(roll) {
        if (!roll) {
            throw Error("Set valid value");
        }
        else {
            this.newRoll(roll);
        }
    }
    newRoll(roll) {
        this.roll = roll;
    }
    describe() {
        console.log(this.name, this.roll, this.employees, this.admins);
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
}
Top.company = "akash madduru";
Top.year = 1998;
const topper = new Top("akash", 2, ["cool", "hot", "mild"], ["cool", "hot"]);
topper.describe();
topper.addAdmin("mild");
topper.describe();
console.log(topper.mostRecentAdmin);
topper.rollNo = 3;
Top.founder();
const topper2 = new Top("akash", 2, ["cool", "hot", "mild"], ["cool", "hot"]);
// just to know
// const accountCopy = {
//   name: "coffee",
//   roll: 2,
//   employees: ["sal", "mann", "khan"],
//   describe: Top.describe,
// };
// accountCopy.describe;
