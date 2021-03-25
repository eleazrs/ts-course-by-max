function LoggerBasic(logString: string) {
    return (constructor: Function) => {
        console.log(logString)
        console.log(constructor)
    }
}

@LoggerBasic('LOGGING [PERSON]')
class Person2 {
    name = 'L'

    constructor() {
        console.log('Creating L object...')
    }
}

const personaje2 = new Person2()
console.log(personaje2)