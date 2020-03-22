function max(a, b, c) {

    let major;

    if (a > b) {
        if (a > c) {
            major = a;
        } else {
            major = c;
        }
    }
    if (b > c) {
        if (b > c) {
            major = b;
        } else {
            major = c;
        }
    }
    return major;
}

let major = max(5, 2, 6);

console.log("El número mayor es " + major);