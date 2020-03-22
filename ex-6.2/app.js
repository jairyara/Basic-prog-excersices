let car1 = {
    mark: 'Tesla',
    type: 'Sedán',
    doors: 4
}


class Car {
    constructor(mark, type, doors) {
        this.mark = mark;
        this.type = type;
        this.doors = doors;

        this.made = 'today';
        this.turnOn = false;
        this.gasoline = 100;
    }

    turnOnCar() {
        if (this.turnOn != true) {
            this.turnOn = true;
            console.log("El carro está encendido");
        } else {
            console.log("El carro ya se encuentra encendido, no se puede encender 2 veces");
        }
        return this;
    }

    travel(consume) {
        if (!this.turnOn) return "Encender vehículo";

        if (consume > this.gasoline) return "Recargar tanque";

        this.gasoline = this.gasoline - consume;
        return 'le queda ' + this.gasoline;

    }


}


let car = new Car('Audi', 'Sport', 4);

console.log(Car);