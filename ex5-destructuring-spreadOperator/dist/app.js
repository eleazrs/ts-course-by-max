"use strict";
const sum = (a = 2, b) => {
    return a + b;
};
console.log(sum(undefined, 3));
//spread operator with arrays
const hobbies = ['chess', 'reading', 'cooking']; //we have an array
const pastHobbies = ['walking w/ dog', 'watch movies']; //and another array
hobbies.push(...pastHobbies); //we can push the second array inside first with '...' before array name
//spread operator with objects (it makes a real copy, not a pointer)
const originalL = {
    firstName: 'L',
    age: 30
};
const aNewL = Object.assign({}, originalL);
//rest parameters (undefined number of parameters)
const add = (...numbers) => {
    return numbers.reduce((result, numberValue) => {
        return result + numberValue;
    }, 0);
};
const addedNumbers = add(0, 1, 2, 3, 4, 5);
console.log(addedNumbers);
//destructuring (array) -> copies the elements, it doesn't move them
//    [1st   , 2nd   ]
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2);
console.log(remainingHobbies);
//destructuring (object) -> copies the elements, it doesn't move them
//    [1st   , 2nd   ]
const { firstName: username, age } = originalL;
console.log(`${username}: ${age}`);
