type Admin = {
    name: string
    privileges: string[]
}

type Employee = {
    name: string
    startDate: Date
}

// intersection types get common properties and singular ones and mix in one class...
type ElevatedEmployee = Admin & Employee
// ...is the same as written below
interface IElevatedEmployee extends Admin, Employee {}

// with intersection
const e1: ElevatedEmployee = {
    name: 'L',
    privileges: ['create-server'],
    startDate: new Date()
}

// with interface
const e2: IElevatedEmployee = {
    name: 'L',
    privileges: ['create-server'],
    startDate: new Date()
}