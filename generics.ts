const names: Array<string> = ["Akash", "Madduru"];
const ages: Array<number> = [22, 17];
const combine: Array<string | number> = [22, 22];

//promise works only on es6, change target to es6 from es5
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(resolve, reject);
  }, 2000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

function Merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// multiple interfaces and types as holders *constraints
// function Merge<T extends Person, U extends number | string>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// use of generics
// const mergedObject = Merge<{ name: string }, { age: number; des: string }>(
//   { name: "Max" },
//   { age: 30, des: "akash" }
// );

const mergedObject = Merge({ name: "Max" }, { age: 30, des: "akash" });
console.log(mergedObject);

interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let text: string = "";
  if (element.length > 0) {
    text = "Element is not empty and containing";
  } else if (element.length === 0) text = "Element is empty";
  return [element, text];
}

console.log(countAndPrint(["hi", "there!"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value:" + obj[key];
}

console.log(extractAndConvert({ name: "akash" }, "name"));

class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  // can use generics in class methods
  testItem<T extends string | number>() {}
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("akash madduru");
textStorage.addItem("avinash madduru");
textStorage.removeItem("akash madduru");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());

// typescript does not able to find the object passed to remove
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({ name: "akash" });
// objectStorage.addItem({ name: "avinash" });
// objectStorage.removeItem({ name: "akash" });
// console.log(objectStorage.getItems());

// this is the only way to pass and remove object
const objectStorage = new DataStorage<object>();
const akashObj = { name: "akash" };
const avinashObj = { name: "avinash" };
objectStorage.addItem(akashObj);
objectStorage.addItem(avinashObj);
objectStorage.removeItem(akashObj);
console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// to much strictness
function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = completeUntil;
  return courseGoal as CourseGoal;
}

// function createCourseGoal(
//   title: string,
//   description: string,
//   completeUntil: Date
// ): CourseGoal {
//   return {
//     title: title,
//     description: description,
//     completeUntil: completeUntil,
//   };
// }

const courseGoalNew = createCourseGoal("akash", "cool", new Date());
console.log(courseGoalNew);

const namers: Readonly<string[]> = ["Max", "Akash"];
// namers.push("Avinash");
