// here we can see the Log Decorator functionality

function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator')
    console.log(target, propertyName)

}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator')
    console.log(target)
    console.log(name)
    console.log(descriptor)

}

class Product {

    @Log
    title: string
    private _price: number
    
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

    getPriceWithTax(tax: number) {
        return this._price * (1 + (tax / 100))
    }
}