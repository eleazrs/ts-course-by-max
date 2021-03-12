type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable | Numeric

const add = (a: Combinable, b: Combinable) => {
    //next line is type guard: it allows to use union types and ensure that code runs correctly @ runtime. but typeof is only valid with native types, not with objects
    if(typeof a === 'string' || typeof b === 'string')
        return `${a} ${b}`
    
    return a + b
}

// type guard with types

type Owner = {
    name: string
    privileges: string[]
}

type ITEmployee = {
    name: string
    accessTo: string
}

type UnknownEmployee = Owner | ITEmployee

const printEmployeeInformation = (emp: UnknownEmployee) => {
    console.log(`Name: ${emp.name}`)
    //we need to check an attribute as string with 'in' keyword as shown in next ternary. it only works with methods and properties
    console.log('privileges' in emp ?
                `Privileges: ${emp.privileges}` : 
                `Access: ${emp.accessTo}`)
}

// type guard with classes
class Car {
    drive() {
        console.log('Driving...')
    }
}

class Truck extends Car {
    loadCargo(amount: number) {
        console.log(`Loading: ${amount}`)
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

const userVehicle = (vehicle: Vehicle) => {
    //...or we can check by 'instanceof' keyword. it works with >>only<< with classes, not even with interfaces
    vehicle.drive()
    if(vehicle instanceof Truck) vehicle.loadCargo(200)
}