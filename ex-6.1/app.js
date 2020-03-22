let person1 = {
    name: 'Jair',
    age: 24
}

let person2 = {
    name: 'Angélica',
    age: 24
}

let person3 = {
    name: 'Andrés',
    age: 27
}

let persons = [person1, person2, person3];


for (let i = 0; i < persons.length; i++) {
    let person = persons[i];
    console.log(`${person.name} - - ${person.age}`);
}