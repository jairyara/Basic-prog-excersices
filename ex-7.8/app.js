function moreLarge(arr) {
    let nameLarge = ' ';
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        if (name.length > nameLarge.length) {
            nameLarge = name;
        }
    }
    return nameLarge;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let heroLarge = moreLarge(heroes);
console.log(heroLarge);