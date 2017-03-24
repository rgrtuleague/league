/**
 * Created by Sergey on 24.03.2017.
 */
/*
Create a class Ghost
Ghost objects are instantiated without any arguments.
    Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated
*/
var Ghost = function() {
    this.color = function() {
        var colors = ['white', 'yellow', 'purple', 'red'];
        var rand = Math.round(Math.random()*3);
        return colors[rand];
    }
};
var ghost = new Ghost();
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());
console.log(ghost.color());

/*
// Решение на Codewars
function Ghost() {
    var colors = ['white', 'yellow', 'purple', 'red'];
    var rand = Math.round(Math.random()*3);
    this.color = colors[rand];
}
*/















