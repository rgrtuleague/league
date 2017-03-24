/**
 * Created by Sergey on 24.03.2017.
 */

// Синглтон по определению — объект, который может присутствовать в системе только в единственном числе.
/*

var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1
*/


function Singleton () {
    if (Singleton.instance) {
        return Singleton.instance
    }
    Singleton.instance = this;
}






















