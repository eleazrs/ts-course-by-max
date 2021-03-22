function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedObj = merge({name: 'L'}, {age: 30})
console.log(mergedObj)

// what if I want to constraint a generic type?
// we only have to extend the object type we want to constraint to, like the next signature:
// function merge<T extends object, U extends object>(objA: T, objB: U)

// function with auto object conversion
// we care just about of 'length' property
interface Lengthy {
    length : number
}

function countAndDescribe<T extends Lengthy>(element: T) {
    let descriptionText = `${element.length} element/s`
    return [element, descriptionText]
}

console.log(countAndDescribe(['Red Hats']))

// if we want to get a 
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return `Value: ` + obj[key]
}

extractAndConvert({ name: 'L'}, 'name')
// extractAndConvert({ name: 'L'}, 'age') error because key name is not equals to 'age' string