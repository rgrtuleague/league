/**
 * Created by Sergey on 24.03.2017.
 */

// Создать метод, возвращающая строку в верхнем регистре

String.prototype.myNewMethod = function() {
    return this.toUpperCase();
};

console.log('abc'.myNewMethod());



