function FirstDecorator(message: string) {
    console.log('LOGGER FACTORY') // 1st
    return function(constructor: any) {
        console.log(message)
        console.log(constructor)
    }
}

function SecondDecorator(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY') // 2nd
    return function(constructor: any) {
        const personaje = new constructor()
        document.getElementById(hookId)!.innerHTML = template
        document.querySelector('h1')!.textContent = personaje.name
    }
}

@FirstDecorator('logging some code') // 4th
@SecondDecorator('<h1>This is a FragilePerson object</h1>', 'app') // 3rd
class FragilePerson {
    name = 'L'

    constructor() {
        console.log('I\'m a person!!')
    }
}

// the order of execution is:
// - the order in which we specify the decorators (First > Second)
// - then >>the execution of decorator functions<< happen from bottom up (Second > First)