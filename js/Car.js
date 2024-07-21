export class Car {
    constructor(pavadinimas, modelis, spalva, bakoTalpa, kuroSanaudos) {
        this.make = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTank = bakoTalpa;
        this.fuelConsumption = kuroSanaudos;
        this.engineOn = false;
        this.speed = 0;
    }

    startEngine() {
        if (this.engineOn === false) {
            this.engineOn = true;
            return `Engine is turned on.`;
        } else {
            return `Failed to start. Engine is already on.`
        }
    }

    stopEngine() {
        if (this.speed !== 0) {
            return `Cannot stop engine, you are driving.`
        }
        if (this.engineOn === true) {
            this.engineOn = false;
            return `Engine is now off.`
        }
        if (this.engineOn === false) {
            return `Engine is already turned off.`;
        }
    }

}