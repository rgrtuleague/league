/**
 * Created by Sergey on 25.03.2017.
 */
/*
 Define a class named MyClass inside a namespace MyNamespace.
 The class constructor should accept a single string argument.
 It should also have a function named sayHello that returns the string passed into the constructor.

 Example:
 var myObject = new MyNamespace.MyClass('Hello!');
 var phrase = myObject.sayHello(); // phrase should be 'Hello!'

 The interesting part is that MyClass should only be accessible via the namespace
 and should not define any extra global variables. Code should not redefine an existing namespace,
 but should also function if the namespace is not previously defined.
 */

var MyNamespace = MyNamespace || {};
   MyNamespace.MyClass = function (string) {
        this.sayHello = function() {
            return string;
        }
    };

var myObject = new MyNamespace.MyClass('Hello!');
var phrase = myObject.sayHello(); // phrase should be 'Hello!'
console.log(phrase);


