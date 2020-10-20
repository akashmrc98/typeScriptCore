"use strict";
const hello_world = "akash madduru";
console.log(hello_world);
function add(n1, n2) {
    console.log(n1 + n2);
}
add(22, 22);
var Role;
(function (Role) {
    Role[Role["Admin"] = 22] = "Admin";
    Role[Role["FullStack"] = 11] = "FullStack";
})(Role || (Role = {}));
const person = {
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
let anyArray = ["akash", 22, "akash", false];
console.log(anyArray);
function result(n1, n2, as) {
    let res;
    if (as === "as-num" && typeof n1 === "number" && typeof n2 === "number") {
        res = n1 + n2;
    }
    else if (as === "as-str" &&
        typeof n1 === "string" &&
        typeof n2 === "string") {
        res = n1.toString() + n2.toString();
    }
    return res;
}
function cool() {
    return 22;
}
function cooler() {
    console.log(cool());
}
let undef_val;
console.log(result(22, 33, "as-num"));
console.log(result("akash", "madduru", "as-str"));
let func;
func = add;
func(22, 332);
function adder(n1, n2) {
    return n1 + n2;
}
let funner;
funner = adder;
console.log(funner(22, 3));
// call backs
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
let c_result = addAndHandle(22, 11, (result) => {
    console.log(result);
});
let userInput;
function generateError(message, code) {
    throw { message: "error", errorCode: code };
}
const res = generateError("Error occurred", 22);
console.log(res);
