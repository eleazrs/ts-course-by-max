class Printer {
    message = 'This works! ... but in old style binding way'

    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer()

const button = document.getElementById('old-button')!
// with this approach it gets 'this' from the addEventListener context, not from the object
// button.addEventListener('click', p.showMessage)

// we can solve by doing this, binding the object created manually from the function itself
button.addEventListener('click', p.showMessage.bind(p))

// can we build a thing to get autobind functionality? yes! with decorators!

// declare decorator
function Autobind(_1: any, _2: string, descriptor: PropertyDescriptor) {
    // get the method to bind from annotated decorator trigger
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false, //not an iterator ;)
        get() {
            // bind the method by its name
            // 'this' will refer to whatever is responsible for triggering the scatter method
            // ------------------
            // the getter method will be triggered by the concrete object to which it belongs.
            // it will always refer to the object on which we defined to gather.
            // nothing will overwrite this binding because the getter is an extra layer between
            // the function that's being executed and the object to which it belongs, and the event listener
            const boundFunction = originalMethod.bind(this)
            return boundFunction
        }
    }
    return adjDescriptor
}

class PrinterAutobinded {
    message = 'This works awesomely! yesss!! autobinding works!'

    @Autobind
    showMessage() {
        console.log(this.message)
    }
}
//instantiate the printerAutobinded class...
const autobinded = new PrinterAutobinded()

//now get the button and create the trigger
const newButton = document.getElementById('new-button')!
newButton.addEventListener('click', () => autobinded.showMessage())