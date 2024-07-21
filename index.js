import { Car } from "./js/Car.js";

const bulka = new Car('Audi', '80', 'Black', '70', '70', '7');

console.log(bulka);

console.log(bulka.startEngine());
console.log(bulka);

console.log(bulka.startEngine());
console.log(bulka);

console.log(bulka.stopEngine());
console.log(bulka);

console.log(bulka.stopEngine());
console.log(bulka);

console.log(bulka.startDriving());
console.log(bulka);

console.log(bulka.startEngine());
console.log(bulka.startDriving());
console.log(bulka.stopDriving());
console.log(bulka);



