abstract class Depto {
    static fiscalYear = 2020
    protected employees: string[] = []

    constructor(protected readonly id: string, public name: string) { }

    static createEmployee(name: string) {
        return { name: name }
    }

    abstract describe(this: Depto): void

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepto extends Depto {
    private static instance: ITDepto

    // singleton classes have private constructor
    constructor(public admins: string[], itName: string) {
        super('It1', itName)
    }

    // singleton classes return an instance
    static getInstance(): ITDepto {
        if(ITDepto.instance) return this.instance
        
        this.instance = new ITDepto(['L', 'I', 'P2', 'M'], 'itDepto1');
        return this.instance
    }

    describe(this: Depto): void {
        console.log('Depto description')
    }

    public paintAdmins() {
        console.log(`Admins registered in depto (${this.id}): ${this.admins.join(", ")}`)
    }

}

//const itDepto = new ITDepto(['L', 'I', 'P2', 'M'], 'itDepto1');
const itDepto = ITDepto.getInstance()
itDepto.paintAdmins()