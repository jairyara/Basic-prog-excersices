let calif = 5;


if (calif >= 60) {
    if (calif >= 80) {
        document.write("Eres un excelente alumno. Has aprobado la materia con " + calif + ". Felicidades Nerd");
    }
    if (calif >= 70 && calif < 80) {
        document.write("Has aprobado la materia con " + calif + " Felicidades");
    }
    if (calif >= 60 && calif < 70) {
        document.write("Has aprobado la materia con " + calif + " Chiripero");
    }
} else {
    if (calif >= 50 && calif < 60) {
        document.write("Has perdido la materia, a repetir cabrón");
    }
    if (calif < 50) {
        document.write("Estudie vago");
    }
}