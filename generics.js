"use strict";
const names = ["Akash", "Madduru"];
const ages = [22, 17];
const combine = [22, 22];
//promise works only on es6, change target to es6 from es5
const promise = new Promise((resolve, reject) => {
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
function Merge(objA, objB) {
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
function countAndPrint(element) {
    let text = "";
    if (element.length > 0) {
        text = "Element is not empty and containing";
    }
    else if (element.length === 0)
        text = "Element is empty";
    return [element, text];
}
console.log(countAndPrint(["hi", "there!"]));
function extractAndConvert(obj, key) {
    return "Value:" + obj[key];
}
console.log(extractAndConvert({ name: "akash" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    // can use generics in class methods
    testItem() { }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("akash madduru");
textStorage.addItem("avinash madduru");
textStorage.removeItem("akash madduru");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
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
const objectStorage = new DataStorage();
const akashObj = { name: "akash" };
const avinashObj = { name: "avinash" };
objectStorage.addItem(akashObj);
objectStorage.addItem(avinashObj);
objectStorage.removeItem(akashObj);
console.log(objectStorage.getItems());
// to much strictness
function createCourseGoal(title, description, completeUntil) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;
    return courseGoal;
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
const namers = ["Max", "Akash"];
// namers.push("Avinash");
