/**
 * Created by Sergey on 02.04.2017.
 */
/*
Description:

    Task
You're given an arbitrary 32-bit integer n. ' +
'Swap each pair of adjacent bits in its binary representation and return the result as a decimal number.
Example

For n = 13, the output should be 14
1310 = 11012 ~> 11102 = 1410

For n = 74, the output should be 133
7410 = 010010102 ~> 100001012 = 13310

Note
the preceding zero written in front of the initial number:
    since both numbers are 32-bit integers, they have 32 bits in their binary representation.
    The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.
*/

function swapAdjacentBits(n) {
    console.log('Дано число:', n);
    n = n.toString(2);

    // Если количество символов нечетное, добавим справа ноль
    if (n.length %2 != 0) {
        n = '0' + n;
    }
    console.log('в двоичной системе:', n);

    // Разобьем число на массив по 2 цифры в каждом элементе
    var arr = n.match(/\d\d/g);
    console.log('Разделим на массив по 2 цифры:');
    console.log(arr);

    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i].replace(/(^.)(.$)/, '$2$1');
    }
    console.log('После реверса имеем: ');
    console.log(arr);
    var str = '0' + arr.join('');
    return parseInt(str, 2);
}
console.log(swapAdjacentBits(56)); // 52













