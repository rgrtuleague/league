/**
 * Created by Sergey on 19.04.2017.
 */
/*

Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
    You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

    Rules
1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

    Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(){
    var str = arguments[0];

    var temp = '';
    var arr = [];
    var letter = '';
    var start = '';
    var n =0;
    for (var i=0;i<str.length;i++) {
        if (str[i] == ' ') {
            start += ' ';
            continue;
        }
        if (str[i] == ',') {
            start += ',';
            continue
        }

            temp = str;
            letter = temp[i];
            temp = start + temp[i].toUpperCase() + temp.slice(i+1);
            arr[n] = temp;
            start += letter;
            n++;

    }
    return arr;
}
console.log(wave(' Gap , gAp , gaP '));