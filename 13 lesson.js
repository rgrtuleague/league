/**
 * Created by Sergey on 17.03.2017.
 */

// ООП в функциональном стиле
/*

function CoffeeMachine(power) {
    this.waterAmount = 0; // Количество воды в кофеварке

    var WATER_HEAT_CAPACITY = 20;

    console.log('Создана кофеварка мощностью: '+ power + 'Вт');

    var getBoilTime = function (){   // Внутренний интерфейс
        return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }.bind(this);

    function onReady() {   // Внутренний интерфейс
        console.log('Кофе готов!');
    }


    this.run = function() {  // Внешний интерфейс
        setTimeout(onReady, getBoilTime());
    };
}

// Создаем новую кофеварку
var coffeeMachine1 = new CoffeeMachine(100);

// Залить воды
coffeeMachine1.waterAmount = 200;
coffeeMachine1.run();
*/

//---------------------------------------------------------------------
// Создадим конструктор User для создания объектов
/*

function User() {
    var firstName = '';
    var surname = '';

    this.setFirstName = function (fName) {
        firstName = fName;
    };

    this.setSurname = function(sName) {
        surname = sName;
    };

    this.getFullName = function() {
        return firstName + ' ' + surname;
    }
}
var user = new User();
user.setFirstName('Peter');
user.setSurname('Ivanov');

console.log(user.getFullName());
*/

//---------------------------------------------------------------------


// Функциональное наследование

function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function() {
        self._enabled = true;
    };

    this.disable = function() {
        self._enabled = false;
    };
}

// Класс КОФЕВАРКА
function CoffeeMachine(power, capacity) {
    Machine.call(this);

    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var timerId;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 0.5 / power;
    }
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error('Значение должно быть положительным');
        }
        if (amount > capacity) {
            throw new Error('Нельзя залить воды больше, чем ' + capacity);
        }
         waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function() {
        return power + ' Вт';
    }

    function onReady() {
        console.log('Кофе готов!');
    }

    this.setOnReady = function(func) {
        onReady = func;
    };

    this.run = function() {
        if (this._enabled == false) {
            console.log('Ошибка. Кофеварка выключена!');
        }
        if (this._enabled == true) {
        timerId = setTimeout(function() {
            timerId = null;
            onReady();
        }, getTimeToBoil());
      }
    };

    var parentDisable = this._disable;
    this._disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
    }   // Может останавливать машину, когда она запущена

    this.isRunning = function() {
       return !!timerId;
    };

    this.addWater = function(water_add) {
        this.setWaterAmount(waterAmount + water_add);
    }
}

// Класс ХОЛОДИЛЬНИК
function Fridge(power) {
    Machine.call(this);

    var food = [];
    maxFood = power/100;
    console.log('Максимальное кол-во еды: ' + maxFood);

    this.addFood = function() {
        if (!this._enabled) {
            throw new Error('Ошибка! Нельзя добавить еду! Холодильник выключен!')
        }
        for (var i=0; i<arguments.length; i++) {
            if (food.length+1 > maxFood) {
                throw new Error('Холодильник переполнен! Не могу добавить больше!')
            }
            food.push(arguments[i]);
        }
        console.log(food.length);
    };

    this.getFood = function() {
        return food.slice();
    }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log(fridgeFood); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");
console.log(fridgeFood);

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье





































