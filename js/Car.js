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

}