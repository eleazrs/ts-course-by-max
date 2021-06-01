interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[] // a list of validators ['required', 'positive', ...]
    }
}

const registeredValidators: ValidatorConfig = {}

function Required (target: any, propName: string) {
    // this overwrites the whole array ...
    /* registeredValidators[target.constructor.name] = {
        [propName]: ['required']
    } */
    // ... so we need to use spread operator '...'
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], 'required']
    }
}

function PositiveNumber (target: any, propName: string) {
    // this overwrites the whole array ...
    /* registeredValidators[target.constructor.name] = {
        [propName]: ['positive']
    } */
    // ... so we need to use spread operator '...'
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [...registeredValidators[target.constructor.name][propName], 'positive']
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig) return true // there's no object, then is valid
    // for in = loop through properties
    // for of = loop through array/collection objects
    let isValid = true
    for (const prop in objValidatorConfig) { // loop through >>properties<< inside objValidatorConfig
        //console.log(prop)
        //console.log(obj[prop])
        for (const validator of objValidatorConfig[prop]) { // loop through validators inside each property
            switch (validator) {
                case 'required':
                    isValid = isValid && !!obj[prop] // use of double !! to convert a property to a boolean if empty or not
                    if(!obj[prop]) alert("title is not valid or is empty")
                    break;
                case 'positive':
                    isValid = isValid && obj[prop] > 0
                    if(obj[prop] <= 0) alert("price is empty or less than zero")
                    break;
            }
        }
    }
    // return true //default return (mandatory)
    console.log(isValid)
    return isValid
}

class Course {
    @Required
    title: string
    @PositiveNumber
    price: number

    constructor(t: string, p: number) {
        this.title = t
        this.price = p
    }
}

const courseFrom = document.querySelector('form')!
courseFrom.addEventListener('submit', event => {
    event.preventDefault() //with this we overwrite the default behaviour of submitting a form
    const titleEl = document.getElementById('title') as HTMLInputElement
    const priceEl = document.getElementById('price') as HTMLInputElement

    const title = titleEl.value
    const price = +priceEl.value //with the '+' before element.property it converts the string value to a number

    const createdCourse = new Course(title, price)

    if(!validate(createdCourse))
        alert("please fix the input")
    else
        console.log(createdCourse)
})