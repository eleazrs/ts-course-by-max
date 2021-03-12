interface Person {
    readonly name?: string
    age: number
    readonly parents: string[]
    isParent?: boolean //optional parameter even in interface, lol!

    greet(phrase: string): void
}

class Individual implements Person {
    name?: string
    age = 33
    parents: string[]

    constructor(name: string, parents: string[]){
        if(name) this.name = name
        this.parents = parents
    }

    greet(phrase: string) {
        console.log(phrase)
    }
}

//interface as functions
//classic
type AddFn = (a: number, b: number) => number
let add: AddFn = (n1: number, n2: number) => { return n1 + n2 }
//as interface
interface IAddFn {
    (a: number, b:number): number
}
let addI: IAddFn = (n1: number, n2: number) => { return n1 + n2 }

