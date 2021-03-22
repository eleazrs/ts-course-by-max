class DataStorage<T> {
    private data: T[] = []

    addItem(item: T) {
        this.data.push(item)
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }

    removeObjItem(item: T) {
        if(this.data.indexOf(item) === -1)
            return
        this.data.splice(this.data.indexOf(item), 1)
    }

    getItems() {
        return [...this.data]
    }
}

const textStorage = new DataStorage<string>()
const numberStorage = new DataStorage<number>()
const objStorage = new DataStorage<object>()

objStorage.addItem({name: 'L'})
objStorage.addItem({name: 'I'})

// if we use this code:
// this.data.splice(this.data.indexOf(item), 1)
// in removeItem function, we can't point to inner object in objStorage array, because the object passed as argument and the inner object in array have different addresses
// objStorage.removeItem({name: 'L'})

// so we have to use the removeObjItem implementation and use the function with parameter, not argument
const newL = {name: 'newL'}
objStorage.addItem(newL)
// that way we can assure we remove the same object addressed
objStorage.removeItem(newL)