export class Car {
    constructor(pavadinimas, modelis, spalva, bakoTalpa, kuroLikutis, kuroSanaudos) {
        this.make = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTank = bakoTalpa;
        this.fuelLeft = kuroLikutis;
        this.fuelConsumption = kuroSanaudos;
        this.engineOn = false;
        this.speed = 0;
    }

    startEngine() {
        if (this.engineOn === false) {
            this.engineOn = true;
            return `Engine is turned on.`;
        } else {
            return `Engine is already on.`;
        }
    }

    stopEngine() {
        if (this.speed > 0) {
            return `Cannot stop engine, you are driving. Please stop first!`;
        }
        if (this.engineOn === true) {
            this.engineOn = false;
            return `Engine is now off.`;
        }
        if (this.engineOn === false) {
            return `Engine is already turned off.`;
        }
    }

    startDriving() {
        if (this.engineOn === false) {
            return `Turn on the engine before driving.`;
        } else {
            this.speed = 50;
            return `You are now driving.`;
        }
    }

    stopDriving() {
        if (this.speed > 0) {
            this.speed = 0;
            return `You have stopped.`;
        } else {
            return `You are not moving.`
        }
    }
}



