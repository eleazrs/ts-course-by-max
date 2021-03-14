type OvCombinable = string | number
type OvNumeric = number | boolean
type OvUniversal = Combinable | Numeric

//we can overload by referencing the function signature above the main function implementation, as follows...
function ovAdd(a: number, b: number): number;
function ovAdd(a: string, b: string): string;
function ovAdd(a: string, b: number): string;
function ovAdd(a: number, b: string): string;
function ovAdd(a: OvCombinable, b: OvCombinable) {
    if(typeof a === 'string' || typeof b === 'string')
        return `${a} ${b}`
    
    return a + b
}