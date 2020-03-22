function table() {
    let base = parseInt(prompt("Inserte que tabla de multiplicar quiere realizar"));
    let limit = parseInt(prompt("Ingrese el límite de la tabla de multiplicar"));
    for (let i = 1; i <= limit; i++) {
        let result = base * i;

        console.log(base + " x " + i + "  = " + result);
    }
}

table();