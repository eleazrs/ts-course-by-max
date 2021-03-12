"use strict";
class Depto {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Depto.fiscalYear = 2020;
class ITDepto extends Depto {
    constructor(admins, itName) {
        super('It1', itName);
        this.admins = admins;
    }
    static getInstance() {
        if (ITDepto.instance)
            return this.instance;
        this.instance = new ITDepto(['L', 'I', 'P2', 'M'], 'itDepto1');
        return this.instance;
    }
    describe() {
        console.log('Depto description');
    }
    paintAdmins() {
        console.log(`Admins registered in depto (${this.id}): ${this.admins.join(", ")}`);
    }
}
const itDepto = ITDepto.getInstance();
itDepto.paintAdmins();
//# sourceMappingURL=singleton.js.map