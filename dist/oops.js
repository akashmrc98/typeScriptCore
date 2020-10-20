"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, roll, employees) {
        this.name = name;
        this.roll = roll;
        this.employees = employees;
        this.name = name;
        this.roll = roll;
        this.employees = employees;
    }
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
var Top = /** @class */ (function (_super) {
    __extends(Top, _super);
    // singleton private constructor use private in front of the constructor
    function Top(name, roll, employees, admins) {
        var _this = _super.call(this, name, roll, employees) || this;
        _this.admins = admins;
        _this.admins = admins;
        return _this;
    }
    Top.founder = function () {
        console.log("this company founded by " + this.company + " on " + this.year);
    };
    Top.getInstance = function () {
        if (Top.instance) {
            return this.instance;
        }
        this.instance = new Top("akash", 2, ["cool", "hot", "mild"], ["cool", "hot"]);
    };
    Object.defineProperty(Top.prototype, "mostRecentAdmin", {
        get: function () {
            return this.admins[this.admins.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Top.prototype, "rollNo", {
        set: function (roll) {
            if (!roll) {
                throw Error("Set valid value");
            }
            else {
                this.newRoll(roll);
            }
        },
        enumerable: false,
        configurable: true
    });
    Top.prototype.newRoll = function (roll) {
        this.roll = roll;
    };
    Top.prototype.describe = function () {
        console.log(this.name, this.roll, this.employees, this.admins);
    };
    Top.prototype.addAdmin = function (admin) {
        this.admins.push(admin);
    };
    Top.company = "akash madduru";
    Top.year = 1998;
    return Top;
}(Department));
var topper = new Top("akash", 2, ["cool", "hot", "mild"], ["cool", "hot"]);
topper.describe();
topper.addAdmin("mild");
topper.describe();
console.log(topper.mostRecentAdmin);
topper.rollNo = 3;
Top.founder();
var topper2 = new Top("akash", 2, ["cool", "hot", "mild"], ["cool", "hot"]);
// just to know
// const accountCopy = {
//   name: "coffee",
//   roll: 2,
//   employees: ["sal", "mann", "khan"],
//   describe: Top.describe,
// };
// accountCopy.describe;
