let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let great = 0;

// Los arreglos por lo general empiezan en 0. Por eso i =0;
//
for (let i = 0; i <= numbers.length; i++) {
    //La condición se pone entre llaves cuadradas porque asi se vincula al ciclo for
    if (numbers[i] >= great) {
        great = numbers[i];
    }

}

document.write(great);