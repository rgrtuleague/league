/**
 * Created by Sergey on 25.03.2017.
 */
/*
// https://www.codewars.com/kata/this-is-an-other-problem/javascript
Description:

    After you've solved @priyankaherur's problem ( http://www.codewars.com/kata/this-is-a-problem/javascript )
// you may try to solve this other one.

The problem :

    Having created a function NamedOne which takes first & last names as parameters
and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName )
properties which should be all accessibles, we discovered that "accessible" also means "mutable".

    If, for example, we've got a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
    ...properties may be changed :

    namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
    ...but all properties are not updated !

    namedOne.fullName  // -> "Naomi Wang"
//-- Oh no ! we want fullName == "John Doe" now !
Your mission

So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

    If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
    Note : "input format" to .fullName will be firstName + space+ lastName.
    If given fullName isn't valid then no property is changed.

Examples:

    var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
*/


function NamedOne(name, surname) {
    this.firstName = name;
    this.lastName = surname;
    function get_full_name() {
        return this.firstName + ' ' + this.lastName
    }


    function set_full_name(new_name) {
        var names = new_name.trim().split(/\s+/);
        if (names.length == 2) {
            this.firstName = names[0] || '';
            this.lastName = names[1] || '';
        }
    }
    Object.defineProperty(this, 'fullName', {
        get: get_full_name
        , set: set_full_name
        , configurable: true
        , enumerable:   true })
}

var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John";
namedOne.lastName = "Doe";
// ...then...
console.log(namedOne.fullName); // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith";
// ...then...
console.log(namedOne.firstName); // -> "Bill"
console.log(namedOne.lastName);  // -> "Smith"

// -- But :
namedOne.fullName = "Tom"; // -> no : lastName missing
namedOne.fullName = "TomDonnovan"; // -> no : no space between first & last names
console.log(namedOne.fullName); // -> "Bill Smith" (unchanged)

































