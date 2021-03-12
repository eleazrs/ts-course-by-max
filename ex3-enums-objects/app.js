var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["OWNER"] = 1] = "OWNER";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
    Role[Role["WRITE_ONLY"] = 3] = "WRITE_ONLY";
    Role[Role["MODIFY"] = 4] = "MODIFY";
})(Role || (Role = {}));
var person = {
    name: 'L',
    age: 33,
    hobbies: ['Chess', 'Read', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.name);
//person.roles.push('owner')
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
console.log(person.role);
