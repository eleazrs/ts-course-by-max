"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
}
const developing = new Department('developer_dept');
developing.describe();
const copyDept = { describe: developing.describe };
copyDept.describe();
class Department2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeesInformation() {
        console.log(`There are right now ${this.employees.length} employee/s`);
        console.log(`Here are the employees: ${this.arrayToStringWithComma(this.employees)}`);
    }
    arrayToStringWithComma(stringArray) {
        return stringArray.join(", ");
    }
}
const developing2 = new Department2('d1', 'developer_dept');
developing2.describe();
const copyDept2 = { name: 'x', describe: developing2.describe };
copyDept2.describe();
developing2.addEmployee('L');
developing2.addEmployee('I');
developing2.printEmployeesInformation();
class ITDept extends Department2 {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
}
const itdept = new ITDept('it1', ['L', 'I', 'P2']);
//# sourceMappingURL=app.js.map