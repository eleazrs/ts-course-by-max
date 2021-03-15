const names: Array<string> = ['L', 'I'] //same as string[]
names[0].split(',') //compilator detects the array is a string type, then it gets string functions

const promise: Promise<number> = new Promise ((resolve) => {
    setTimeout(() => { resolve(10) }, 2000)
})

promise.then(data => { console.log(data) })