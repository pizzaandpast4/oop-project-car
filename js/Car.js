export class Car {
    constructor(pavadinimas, modelis, spalva, bakoTalpa, kuroSanaudos) {
        this.make = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTank = bakoTalpa;
        this.fuelConsumption = kuroSanaudos;
        this.engineOn = false;
        this.defaultSpeed = 0;
    }

}