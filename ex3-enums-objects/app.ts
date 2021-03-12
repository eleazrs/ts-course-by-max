enum Role {
    ADMIN, OWNER, READ_ONLY, WRITE_ONLY, MODIFY
}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    //roles: [number, ...Array<string>];
    role: Role;
} = {
    name: 'L',
    age: 33,
    hobbies: ['Chess', 'Read', 'Cooking'],
    role: Role.ADMIN
}

console.log(person.name)

//person.roles.push('owner')

for(const hobby of person.hobbies) {
    console.log(hobby)
}

console.log(person.role)
