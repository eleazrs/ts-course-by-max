const userInput = '' //empty string
const userInputNull = null
const storedData = userInput || 'DEFAULT' //it treats an empty string as a false input
const storedNotNullOrUndefined = userInputNull ?? 'DEFAULT' //it treats as a false input ONLY if null or undefined

console.log(storedData) // prints ''
console.log(storedNotNullOrUndefined) // prints 'DEFAULT'