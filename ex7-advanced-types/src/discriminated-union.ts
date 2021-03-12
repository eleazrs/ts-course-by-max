//this is how discriminate between interfaces as union types
interface Bird {
    animalType: 'bird'
    flyingSpeed: number
}

interface Horse {
    animalType: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
    let speed

    switch (animal.animalType) {
        case 'bird':
            speed = animal.flyingSpeed
            break;
    
        default:
            speed = animal.runningSpeed
            break;
    }
    console.log(`Moving at speed ${speed}`)
}

moveAnimal( {animalType: 'bird', flyingSpeed: 10} )