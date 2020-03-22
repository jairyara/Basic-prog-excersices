let numbers = [1, 6, 8, 4, 2, 7, 10, 3, 5];


for (let i = 0; i < numbers.length; i++) {
    let numberPair = numbers[i];
    if (numberPair % 2 === 0) {
        console.log("El número " + numberPair + " es par");
    } else {
        console.log("El número " + numberPair + " es impar");
    }
}