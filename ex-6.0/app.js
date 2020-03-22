function describePerson(p) {
    console.log(`${p.name} tiene una edad de ${p.age} años y mide ${p.height}`);
}


let person = {
    name: 'Jair',
    age: 24,
    height: 190,
}

describePerson(person);