// we define the property signature we work with
// ['prop' keyword: type of property]: type of parameter inside property
interface ErrorContainer {
    [prop: string]: string,
    // [prop: number]: number, // invalid because we can't use a number as a varaible with number as a value
    [prop: number]: string
}

const errorCont: ErrorContainer = {
    email: 'Invalid email, dude!',
    // username: 3, // invalid because we define the properties are of stringName: stringValue
    3: 'kind of value?'
}