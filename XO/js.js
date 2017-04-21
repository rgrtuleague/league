/**
 * Created by Sergey on 21.04.2017.
 */
var field = document.getElementsByTagName('table')[0];
console.log(field);
var count = 1;
field.onclick = function(event) {
    var target = event.target;
    if (target.nodeName == 'TD') {
        if (count % 2 == 0) {
            target.innerHTML = 'X';
        } else {
            target.innerHTML = 'O';
        }
        count++;
    }
};

var button = document.getElementsByClassName('buttonAgain')[0];
button.addEventListener('click', getClearField);

function getClearField () {
    var tds = document.getElementsByTagName('TD');
    for (var i=0; i<tds.length;i++) {
        tds[i].innerHTML = '';
    }
}
console.log(button);