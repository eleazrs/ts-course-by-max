class Printer {
    message = 'This works!'

    showMessage() {
        console.log(this.message)
    }
}

const p = new Printer()

const button = document.querySelector('button')!
// with this approach it gets 'this' from the addEventListener context, not from the object
// button.addEventListener('click', p.showMessage)

// we can solve by doing this, binding the object created manually from the function itself
button.addEventListener('click', p.showMessage.bind(p))

// can we build a thing to get autobind functionality? yes! with decorators!

// declare decorator
function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
    // get the method to bind from annotated decorator trigger
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        get() {
            // bind the method by its name
            const boundFunction = originalMethod.bind(this)
        }
    }
}

class PrinterAutobinded {
    message = 'This works!'

    showMessage() {
        console.log(this.message)
    }
}
