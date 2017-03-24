/**
 * Created by Sergey on 24.03.2017.
 */
var widget = {
    foo: "bar"
};

var gadget = {
    bar: "foo"
};

var thingamabob = {
    bar: "food"
};
function GetNote () {}
GetNote.prototype.description = "TODO: GIVE ME A DESCRIPTION";

widget.__proto__ = Object.create(GetNote.prototype);

gadget.__proto__ = Object.create(GetNote.prototype);

thingamabob.__proto__ = Object.create(GetNote.prototype);

console.log(widget.description);
console.log(gadget.description);
console.log(thingamabob.description);








