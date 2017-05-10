/**
 * Created by SEREGAVIKA on 10.05.2017.
 */
/*
 Mothers arranged dance party for children in school.On that party there are only mothers and their children.
 All are having great fun on dancing floor when suddenly all lights went out.
 Its dark night and no one can see eachother.
 But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

 Legend:
 -Uppercase letters stands for mothers,lowercase stand for their children. I.E "A" mothers children are "aaaa".
 -Function input:String contain only letters,Uppercase letters are unique.

 Task:
 Place all people in alphabetical order where Mothers are followed by their children.I.E "aAbaBb" => "AaaBbb".
* */


function findChildren(str){

    var arr = str.toLowerCase().split('').sort();

    arr[0] = arr[0].toUpperCase();

    for (var i=2;i<arr.length;i++) {
        if (arr[i] != arr[i-1].toLowerCase()) {
            arr[i] = arr[i].toUpperCase();
        }
    }

    str = arr.join('');

    return str;
}
console.log(findChildren('rNRtnnrTn')); // NnnnRrrTt
