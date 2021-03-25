// a decorator is a function applied to a class in a certain way

function Logger(constructor: Function) {
    console.log('Logging...')
    console.log(constructor)
}

// decorators (starting with prefix '@') activated in experimentalDecorators switch and required at least ES7+
// decorators run when JS finds the class definition, in this case it runs when constructor function is find by JS
@Logger
class Person {
    name = 'L'

    constructor() {
        console.log('Creating L object...')
    }
}

const personaje = new Person()
console.log(personaje)