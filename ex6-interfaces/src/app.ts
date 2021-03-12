class Department {
    name: string

    constructor(n: string) {
        this.name = n
    }

    describe() {
        console.log(`Department: ${this.name}`)
    }
}

const developing = new Department('developer_dept')

developing.describe()

const copyDept = { describe: developing.describe }
copyDept.describe() //undefined, because it points to a 'this' global scope (i.e.: nav), and in this case we have no 'name' property declared inside the class

//------------------------
class Department2 {
    // we can switch the explicit declaration of properties and post declaration inside constructor arguments
    // private name: string
    private employees: string[] = []

    // readonly is used only in constructor instruction
    constructor(private readonly id: string, public name: string) {
        // all next code remains as empty function
        // this.name = n
    }

    describe() { //(this: Department2) optional -> it's implicit
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string){
        this.employees.push(employee)
    }

    printEmployeesInformation() {
        console.log(`There are right now ${this.employees.length} employee/s`)
        console.log(`Here are the employees: ${this.arrayToStringWithComma(this.employees)}`)
    }

    private arrayToStringWithComma(stringArray: string[]){
        return stringArray.join(", ")
    }
}

const developing2 = new Department2('d1', 'developer_dept')

developing2.describe()

const copyDept2 = { name: 'x', describe: developing2.describe }
copyDept2.describe() //it works, because it points to a 'this' in department2 scope, as signed in method describe inside class (implicitly). also, it gets the 'this' scope from 'name' property declared inside. finally, 'describe' contains the functionality, not the result

developing2.addEmployee('L')
developing2.addEmployee('I')

developing2.printEmployeesInformation()

// inherite from department2 and specialize a class iwth "extend" keyword
class ITDept extends Department2 {
    // admins: string[] = [] <-- put inside constructor argument
    constructor(id: string, public admins: string[]){
        super(id, 'IT')
    }
}

const itdept = new ITDept('it1', ['L', 'I', 'P2'])

//note #1: class B cannot access private methods/properties from inhertied class A. only private methods/properties are accesible by the same class level
//note #2: class B can access protected methods/properties from inherited class A