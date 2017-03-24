/**
 * Created by Sergey on 23.03.2017.
 */

// Проттипное программирование

var Vehicle = {
    canRoll: true
};

var Moto = {
    places: 2
};

Moto.__proto__ = Vehicle;

console.log(Moto.canRoll);
console.log(Moto.places);
console.dir(Moto);


var fuel = Object.create(null);  // создаем объект без внутренних свойств (т.е. свойств объекта, по умолчанию)

fuel.gas = 22;
fuel.dis = 40;
console.log(fuel.toString);




































































































