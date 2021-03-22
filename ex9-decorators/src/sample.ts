function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

@Logger
class Person {
    name = 'L'

    constructor() {
        console.log('Creating L object...')
    }
}

const personaje = new Person()