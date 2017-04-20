/**
 * Created by Sergey on 20.04.2017.
 */
var buttons = document.getElementsByClassName('panel')[0];
var str = document.getElementsByClassName('tablo')[0];
buttons.onclick = function(event) {
    var target = event.target;

    if (target.parentNode.className == 'panel') {

        if (target.innerHTML != '=') {
            str.innerHTML += target.innerHTML;
        }
        else {
            str.innerHTML = getSolution(str.innerHTML);
        }
    }
};

var clearButton = document.getElementsByClassName('clearButton')[0];
clearButton.onclick = function(event) {
    var target = event.target;
    if (target.innerHTML == 'C') {
        str.innerHTML = '';

    }
};

function getSolution(str) {
    var arrNumbers = str.match(/[-+]?\d+\.?\d*/g);
    console.log(arrNumbers);

    /*if (str.search(/[^\*\/]/) > -1) {
        return +arrNumbers[0] + +arrNumbers[1];
    }*/
    if (str.search(/\//) > 0) {
        return +arrNumbers[0] / +arrNumbers[1];
    }
    if (str.search(/\*/) > 0) {
        return +arrNumbers[0] * +arrNumbers[1];
    }
    return (+arrNumbers[0] + +arrNumbers[1]).toFixed(5);
}















