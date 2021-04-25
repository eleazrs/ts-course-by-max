// here we can see the decorator functionality: it executes on the definition (when method/function/parameter is registered in memory) @ runtime

// property decorator, with default parameters target & propertyName
function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator')
    console.log(target, propertyName)

}

// accessor decorator, with default parameters target, name & descriptor
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// method decorator, with default parameters target, name & descriptor
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// method decorator, with default parameters target, name & descriptor
function Log3Autobind(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator')
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// parameter decorator, with default parameters target, name & position (the position as paremeter in the function calling, as index)
function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator')
    console.log(target)
    console.log(name)
    console.log(position)
}

class Product {

    @Log
    title: string
    private _price: number // by convention use of '_' means that a property or method is private
    
    @Log2
    set price(val: number) {
        if (val > 0)
        this._price = val
        else
        throw new Error('Invalid price - should be positive!')
    }
    
    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }
    
    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + (tax / 100))
    }
    
}