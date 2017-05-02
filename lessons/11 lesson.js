/**
 * Created by SS on 07.03.2017.
 */




/*

 //ПРОВЕРКА НА ECMA6
 "use strict";
 var arg1=[1,2,3,4,5];
 var arg2=[2,3];
 console.log(plus(...arg1));
 console.log(plus(1,...arg2,4,5));
*/




//--------------------------------------------------------------------------------------------------------------------
// УТИНАЯ ТИПИЗАЦИЯ
// Иногда нам нужен какой-то метод. Можно не узнавать тип объекта этого метода, а сразу проверить наличие этого метода
/*
"use strict";
 let something = [1,2,3];
 if (something.splice) {
  console.log('Кря-Кря! Это Массив');
 }
 */
//--------------------------------------------------------------------------------------




//--------------------------------------------------------------------
 // JSON
/*

var obj = {
 's': 'Me',
    'd': 'He',
    toJSON: function() {return this.s}
};
var j = JSON.stringify(obj);
console.log(j);
var obj2 = JSON.parse(j);
console.log(obj2);
*/
//-------------------------------------------------------------------------



//---------------------------------------------------------------
// ТАЙМЕРЫ
/*
function func() {
 "use strict";
 console.log('Hello');
}

setTimeout(func, 100); // Запустит функцию через 100 мс

var timeId = setTimeout(function() {console.log(1)}, 1000);
console.log(timeId);
*/
/*

var timerInt = setInterval(func, 500); // Будет запускать функцию func каждые 500 мс
setTimeout(function() {
 "use strict";
 clearInterval(timerInt);
 console.log('stop');
}, 5510);   // Через 5 сек остановить повторы

// Рекурсивный TimeOut
 var timerId = setTimeout(function tick() {
 console.log( 'пиу' );
 setTimeout(tick, 500);
 }, 10);
 console.log(timerId);
*/

/*
 // EVAL
 var a = 1;
 (function() {
 "use strict";
 var a = 2;
 eval(console.log(a));
 })();
 */


// TRY ... CATCH
// Поиск ошибок
/*

 var obj = {};
 try {
 console.log('Начинаем...');
 console.log(lalala);
 if (!obj.name) {
 throw new SyntaxError('not');
 }
 console.log('...Заканчиваем');
 } catch(e) {
 if (e.name == 'SyntaxError') console.log('лох');
 else console.log('норм');
 //console.log('Ошибка! '+ e.name + ':' + e.message);
 var lalala;
 }
 */


// check





//-----------------------------------------------------------------------------------
// http://learn.javascript.ru/settimeout-setinterval
// Вывод чисел каждые t мс от i до n с шагом step
/*

function printNumbersInterval (i,n,step, t) {

    var timer = setInterval(func, t);
function func() {
     console.log(i);
    i+= step;
     if (i>n) {
      clearInterval(timer);
     }
 }
}
printNumbersInterval(400,1030,56, 500);
*/

//------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------
// Функция delay задерживает выполнение функции f  на ms миллисекунд
/*

function delay(f, ms) {
    return function() {
        var savedThis = this;
        var savedArgs = arguments;

        setTimeout(function() {
            f.apply(savedThis, savedArgs);
        }, ms);
    };
}

function f(x) {
    console.log( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 2500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
*/

//--------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------
// Функция debounce вызывается не чаще чем в n миллисекунд
/*

function debounce(func, ms) {
    var state = true;

    return function () {
        "use strict";
        if (!state) return;
        func.apply(this, arguments);

        state = false;
        setTimeout(function(){
            state = true;
        }, ms)
    }
}
function f(x) {
    "use strict";
    console.log(x);
}
var f = debounce(f, 1000);

f(1); // выполнится сразу же
f(2); // игнор

setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
setTimeout( function() { f(4) }, 1100); // выполнится
setTimeout( function() { f(5) }, 1500); // игнор
setTimeout( function() { f(6) }, 2500); // игнор
setTimeout( function() { f(7  ) }, 2600); // игнор
*/

//---------------------------------------------------------------
// Функция- конструктор

function Factory(color) {

    this.color = color || 'green';
    this.size = 600;

    this.name = this.color + this.size;

    this.fill = function(vol, temp) {
        this.vol = vol;
        this.temp = temp;
    }
}
var cup1 = new Factory('blue');


cup1.fill(300, 90);


var stakan = {color: 'transparant'};

cup1.fill.call(stakan, 600, 60);
console.log(cup1);
console.log(stakan);
















