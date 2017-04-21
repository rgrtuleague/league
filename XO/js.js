/**
 * Created by Sergey on 21.04.2017.
 */
var field = document.getElementsByTagName('table')[0];
console.log(field);

var winGo = document.getElementById('winGo');
winGo.innerHTML = 'GO!!!';
var count = 1, winX = 0, winO = 0, clicks = 0, drawGames = 0;
field.addEventListener('click', setNote);
 function setNote(event) { // Ставим крестики и нолики
     clicks++;
     var target = event.target;

     if (target.innerHTML == 'X' || target.innerHTML == 'O') return; // Если мы уже нажимали на эту кнопку, то изменить ее нельзя
     if (target.nodeName == 'TD') { // Организуем поочередность ходов
         if (count % 2 == 0) {
             target.innerHTML = 'X';
             winGo.innerHTML = 'Move O';
         } else {
             target.innerHTML = 'O';
             winGo.innerHTML = 'Move X';
         }
         count++;

         if (checkWin() == 'x') { // Функция проверяет условие победы
             winGo.innerHTML = ' WIN X';
             field.removeEventListener('click', setNote);  // После победы одного из участников запретить кликать по клеткам
             document.getElementById('winX').innerHTML = ++winX;
             if (clicks == 9) clicks = 0;
         }
         if (checkWin() == 'o') { // Функция проверяет условие победы
             winGo.innerHTML = 'WIN O';
             field.removeEventListener('click', setNote);  // После победы одного из участников запретить кликать по клеткам
             document.getElementById('winO').innerHTML = ++winO;
             if (clicks == 9) clicks = 0;
         }
         if (clicks > 8) { // Ничья
             document.getElementById('draws').innerHTML = ++drawGames;
             winGo.innerHTML = 'DRAW';
         }
     }
 }

var button = document.getElementsByClassName('buttonAgain')[0];
button.addEventListener('click', getClearField);

function getClearField () { // Чистим поле
    winGo.innerHTML = 'GO!!!';
    clicks = 0;
    var tds = document.getElementsByTagName('TD');
    for (var i=0; i<tds.length;i++) {
        tds[i].innerHTML = '';
    }
    field.addEventListener('click', setNote); // После зачистки поля разрешим кликать по клеткам снова
}
console.log(button);

function checkWin() {  // Проверка кто выиграл
    var n1 = document.getElementById('n1').innerHTML;
    var n2 = document.getElementById('n2').innerHTML;
    var n3 = document.getElementById('n3').innerHTML;
    var n4 = document.getElementById('n4').innerHTML;
    var n5 = document.getElementById('n5').innerHTML;
    var n6 = document.getElementById('n6').innerHTML;
    var n7 = document.getElementById('n7').innerHTML;
    var n8 = document.getElementById('n8').innerHTML;
    var n9 = document.getElementById('n9').innerHTML;

    if ((n1 == 'X' && n2 == 'X' && n3 == 'X') ||
        (n4 == 'X' && n5 == 'X' && n6 == 'X') ||
        (n7 == 'X' && n8 == 'X' && n9 == 'X') ||
        (n1 == 'X' && n4 == 'X' && n7 == 'X') ||
        (n2 == 'X' && n5 == 'X' && n8 == 'X') ||
        (n3 == 'X' && n6 == 'X' && n9 == 'X') ||
        (n1 == 'X' && n5 == 'X' && n9 == 'X') ||
        (n3 == 'X' && n5 == 'X' && n7 == 'X') ) {
        return 'x';
    }
     if ((n1 == 'O' && n2 == 'O' && n3 == 'O') ||
        (n4 == 'O' && n5 == 'O' && n6 == 'O') ||
        (n7 == 'O' && n8 == 'O' && n9 == 'O') ||
        (n1 == 'O' && n4 == 'O' && n7 == 'O') ||
        (n2 == 'O' && n5 == 'O' && n8 == 'O') ||
        (n3 == 'O' && n6 == 'O' && n9 == 'O') ||
        (n1 == 'O' && n5 == 'O' && n9 == 'O') ||
        (n3 == 'O' && n5 == 'O' && n7 == 'O')) {
    return 'o'}
    return false;
}
























