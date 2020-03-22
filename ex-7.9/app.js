function heroesFilter(arr, letter) {

    let newArr = [];


    for (let i = 0; i < arr.lenght; i++) {
        let name = arr[i];

        if (name[0] === letter) {
            newArr.push(name);
        }
    }
    return newArr;

}


let heroes = ['Doom', 'Dr. Strange', 'She Hulk', 'Spiderman', 'Captain Marvel'];

let heroesWith = heroesFilter(heroes, 'S');
console.log(heroesWith);