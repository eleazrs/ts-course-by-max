// with '!' mark we tell ts compiler never yield null
// casting with angle brackets
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!
userInputElement.value = 'test button angle'

// casting with 'as' keyword
const userInputElementAs = document.getElementById('user-input')! as HTMLInputElement 
userInputElementAs.value = 'test button as'

// but what if could be null?
const userInputElementNullable = document.getElementById('user-input')
// use if checking
if(userInputElementNullable)
    // cast inside parenthesis with 'as' keyword...
    (userInputElementNullable as HTMLInputElement).value = 'test button nullable'

if(userInputElementNullable)
    // ...or with angle brackets
    (<HTMLInputElement>userInputElementNullable).value = 'test button nullable'
