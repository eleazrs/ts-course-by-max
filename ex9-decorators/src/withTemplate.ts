function WithTemplate(template: string, hookId: string) {
    // '_' indicates to JS that we don't need this argument inside function
    return function(constructor: any) {
        const personaje = new constructor()
        document.getElementById(hookId)!.innerHTML = template
        document.querySelector('h1')!.textContent = personaje.name
    }
}

@WithTemplate('<h1>This is a CustomPerson object</h1>', 'app')
class CustomPerson {
    name = 'L'

    constructor() {
        console.log('I\'m a person!!')
    }
}