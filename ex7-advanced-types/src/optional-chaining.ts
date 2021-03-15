//if we have a class with a structure defined (a blueprint), and an object doesn't represent all the attributes/properties defined in the class we may have an error. we have to avoid a null pointer/undefined error by writing a optional '?' chaining, as follows

const fetchedUserData = {
    id: '0',
    name: 'L',
    job: { title: 'backend & devops engineer', description: 'I weave the code'}
 // what if job property isn't here??
}

console.log(fetchedUserData?.job?.title)