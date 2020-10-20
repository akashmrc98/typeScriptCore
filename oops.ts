abstract class Department {
  constructor(
    public readonly name: string,
    protected roll: number,
    public employees: string[]
  ) {
    this.name = name;
    this.roll = roll;
    this.employees = employees;
  }

  abstract describe(this: Department): void;

  addEmployee(this: Department, employee: string): void {
    this.employees.push(employee);
  }
}

class Top extends Department {
  private static instance: Top;
  static company: string = "akash madduru";
  static year: number = 1998;
  static founder() {
    console.log(`this company founded by ${this.company} on ${this.year}`);
  }

  static getInstance() {
    if (Top.instance) {
      return this.instance;
    }
    this.instance = new Top(
      "akash",
      2,
      ["cool", "hot", "mild"],
      ["cool", "hot"]
    );
  }

  // singleton private constructor use private in front of the constructor
  constructor(
    name: string,
    roll: number,
    employees: string[],
    public admins: string[]
  ) {
    super(name, roll, employees);
    this.admins = admins;
  }

  get mostRecentAdmin() {
    return this.admins[this.admins.length - 1];
  }

  set rollNo(roll: number) {
    if (!roll) {
      throw Error("Set valid value");
    } else {
      this.newRoll(roll);
    }
  }

  newRoll(this: Top, roll: number) {
    this.roll = roll;
  }

  describe(this: Top): void {
    console.log(this.name, this.roll, this.employees, this.admins);
  }

  addAdmin(this: Top, admin: string): void {
    this.admins.push(admin);
  }
}

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
