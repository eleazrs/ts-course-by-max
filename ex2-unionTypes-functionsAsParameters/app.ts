function add(n1: any, n2: number) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number')
        throw new Error('Incorrect input!')
    return n1 + n2
}

//console.log(add('5', 2.8))

type Combinable = number | string
type Conversion = 'as-text' | 'as-number'
//commented code below in the combine function parameters

//union types get more than 1 type in parameters
//literal with 3rd parameter
//3rd parameter optional with '?' suffix to parameter name
function combine(
    first: Combinable, //number | string,
    second: Combinable, //number | string, 
    resultConversion?: Conversion //'as-text' | 'as-number'
) {
    if (resultConversion === 'as-text')
        return `${first.toString()} & ${second.toString()}`
    if (typeof first === 'number' && typeof second === 'number' || resultConversion === 'as-number')
        return +first + +second //'+' prefix force conversion to number
}

console.log(combine(30, 26, 'as-text'))
console.log(combine('30', '26', 'as-number'))
console.log(combine('L', 'Isamara', 'as-text'))

//function as a type
//accept a Function type
let combineValuesFunction: Function
//accept a Function with no parameters, and return a number
let combineValuesNoParameters: () => number
//accept a Function with 2 parameters, and return a number
let combineValuesParameters: (arg0: number, arg1: number) => number

combineValuesFunction = combine;
//combineValuesNoParameters = combine; //error, has parameters
//combineValuesParameters = combine; //error, has more parameters than allowed in the declaration

console.log(combineValuesFunction(5, 6))

const printResult = (result: any): void => {
    console.log(result)
}

function addAndHandle(n1: number, n2: number, cb: (result: any) => void) {
    const sum = n1 + n2;
    cb(sum);
}

addAndHandle(10, 20, (result) => {
    console.log(result)
})