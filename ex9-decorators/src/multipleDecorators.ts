function FirstDecorator(message: string) {
    console.log('LOGGER FACTORY') // 1st
    return function (constructor: any) {
        console.log(message)
        console.log(constructor)
    }
}

function SecondDecorator(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY') // 2nd
    return function (constructor: any) {
        const personaje = new constructor()
        document.getElementById(hookId)!.innerHTML = template
        document.querySelector('h1')!.textContent = personaje.name
    }
}

@FirstDecorator('logging some code') // 4th
@SecondDecorator('<h1>This is a FragilePerson object</h1>', 'appFragile') // 3rd
class FragilePerson {
    name = 'L'

    constructor() {
        console.log('I\'m a person!!')
    }
}

console.log("test")

// also we can modify decorator to return a new constructor, like an inheritance from a class
// with this decorator function we are applying a framework like behaviour

function ThirdDecorator(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY w/ constructor modified') // 2nd
    return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super()
                // const personaje = new originalConstructor() <-- don't need this anymore
                document.getElementById(hookId)!.innerHTML = template
                document.querySelector('h1')!.textContent = this.name
            }
        }
    }
}

@ThirdDecorator('<h1>This is a PoppyPerson object</h1>', 'appPoppy') // 4th
class PoppyPerson {
    name = 'L'

    constructor() {
        console.log('I\'m a poppy person!!')
    }
}

// the order of execution is:
// - the order in which we specify the decorators (First > Second)
// - then >>the execution of decorator functions<< happen from bottom up (Second > First)

const poppyPersonaje = new PoppyPerson()