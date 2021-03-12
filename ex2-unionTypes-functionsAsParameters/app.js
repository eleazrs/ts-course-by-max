function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number')
        throw new Error('Incorrect input!');
    return n1 + n2;
}
//commented code below in the combine function parameters
//union types get more than 1 type in parameters
//literal with 3rd parameter
//3rd parameter optional with '?' suffix to parameter name
function combine(first, //number | string,
second, //number | string, 
resultConversion //'as-text' | 'as-number'
) {
    if (resultConversion === 'as-text')
        return first.toString() + " & " + second.toString();
    if (typeof first === 'number' && typeof second === 'number' || resultConversion === 'as-number')
        return +first + +second; //'+' prefix force conversion to number
}
console.log(combine(30, 26, 'as-text'));
console.log(combine('30', '26', 'as-number'));
console.log(combine('L', 'Isamara', 'as-text'));
//function as a type
var combineValues;
combineValues = combine;
console.log(combineValues(5, 6));
