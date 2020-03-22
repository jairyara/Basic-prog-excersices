let calif
let califLetter
let estimate


calif = parseInt(prompt("Inserta la calificación del estudiante"));

if (calif >= 0 && calif <= 100) {
    if (calif <= 100 && calif >= 90) {
        califLetter = "A";
        estimate = "Excelente";
        document.write("Su calificación es de " + calif + " " + "letra " + califLetter + " estimación " + estimate);
    } else if (calif >= 80) {
        califLetter = "B";
        estimate = "Sobresaliente";
        document.write("Su calificación es de " + calif + " " + "letra " + califLetter + " estimación " + estimate);
    } else if (calif >= 70) {
        califLetter = "C";
        estimate = "Tibio";
        document.write("Su calificación es de " + calif + " " + "letra " + califLetter + " estimación " + estimate);
    } else if (calif >= 60) {
        califLetter = "D";
        estimate = "Aceptable";
        document.write("Su calificación es de " + calif + " " + "letra " + califLetter + " estimación " + estimate);
    } else {
        califLetter = "F";
        estimate = "Deficiente";
        document.write("Su calificación es de " + calif + " " + "letra " + califLetter + " estimación " + estimate);
    }
} else {
    document.write("No sea toche mano. Nota ingresada no válida");
}