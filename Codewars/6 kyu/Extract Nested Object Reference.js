/**
 * Created by Sergey on 27.03.2017.
 */
/*
Description:

    You are given a complex object that has many deeply nested variables.
    You don't want to go the usual if obj.property == null route. ' +
'Create a prototype method that given a nested path, either return the value or undefined.
*/

Object.prototype.hash = function(route) {
    var routeArr = route.split('.');
    console.log(routeArr);
    var result = this;
    for (var i=0;i<routeArr.length;i++) {
        if (result[routeArr[i]]) {
            result = result[routeArr[i]];
        }
        else return undefined;
    }
    return result;
};

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined











