const hello_world: string = "akash madduru";
console.log(hello_world);

function add(n1: number, n2: number) {
  console.log(n1 + n2);
}

add(22, 22);

enum Role {
  Admin = 22,
  FullStack = 11,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "akash",
  age: 22,
  hobbies: ["coding", "more coding"],
  role: [Role.Admin, "don't know"],
};

console.log(person.name);
console.log(person.age);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
let anyArray: any[] = ["akash", 22, "akash", false];
console.log(anyArray);

type combine = number | string;
type checker = "as-num" | "as-str";

function result(n1: combine, n2: combine, as: checker) {
  let res;
  if (as === "as-num" && typeof n1 === "number" && typeof n2 === "number") {
    res = n1 + n2;
  } else if (
    as === "as-str" &&
    typeof n1 === "string" &&
    typeof n2 === "string"
  ) {
    res = n1.toString() + n2.toString();
  }
  return res;
}

function cool(): number {
  return 22;
}

function cooler(): void {
  console.log(cool());
}

let undef_val: undefined;

console.log(result(22, 33, "as-num"));
console.log(result("akash", "madduru", "as-str"));

let func: Function;
func = add;
func(22, 332);

function adder(n1: number, n2: number) {
  return n1 + n2;
}

let funner: (n1: number, n2: number) => number;
funner = adder;
console.log(funner(22, 3));

// call backs
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  const result = n1 + n2;
  callback(result);
}

let c_result = addAndHandle(22, 11, (result) => {
  console.log(result);
});

let userInput: unknown;

function generateError(message: string, code: number): never {
  throw { message: "error", errorCode: code };
}

const res = generateError("Error occurred", 22);
console.log(res);
