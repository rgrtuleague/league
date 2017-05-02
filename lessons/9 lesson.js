
/*

//ПРОВЕРКА НА ECMA6
var arg1=[1,2,3,4,5];
var arg2=[2,3];
console.log(plus(...arg1));
console.log(plus(1,...arg2,4,5));
*/





/*--------------------------------------------------------------------------------------
// CODEWARS
// Which are in?

/*Given two arrays of strings a1 and a2
return a sorted array r in lexicographical order
of the strings of a1 which are substrings of strings of a2.

    Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Notes:
    Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

    Beware: r must be without duplicates.*/
  /*

function inArray(array1, array2) {
    var res = [];
    for (var i=0;i<array1.length;i++) {
        if(array1[i] == undefined) continue;
        for (var j=0;j<array2.length; j++) {
            var reg = new RegExp(array1[i]);
            if (reg.test(array2[j])) {
                res.push(array1[i]);
                break;
            }
        }
    }
    return res.sort();
}
var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];

var a1 = ["live", "strong", "arp", undefined];

console.log(inArray(a1,a2));

------------------------------------------------------------*/


  //------------------------------------------------------------------------------------
  // CODEWARS
// Who likes it?

/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts,
    pictures or other items. We want to create the text that should be displayed next to such an item.

    Implement a function likes :: [String] -> String, which must take in input array,
    containing the names of people who like an item. It must return the display text as shown in the examples:

    likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"*/
/*
function likes(names) {
    if (names.length == 0) return 'no one likes this';
    if (names.length == 1) return names[0] + ' likes this';
    if (names.length == 2) return names[0] + ' and ' + names[1] + ' like this';
    if (names.length == 3) return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    if (names.length >=4) return names[0] + ', ' + names[1] + ' and ' + (names.length-2) + ' others like this';
}
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));*/
//--------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------
// CODEWARS
// Next Version
/*

You're fed up about changing the version of your software manually. Instead, you will create a little script that will make it for you.

Exercice

Create a function nextVersion, that will take a string in parameter, and will return a string containing the next version number.

    For example:

    nextVersion("1.2.3") === "1.2.4";
nextVersion("0.9.9") === "1.0.0.";
nextVersion("1") === "2";
nextVersion("1.2.3.4.5.6.7.8") === "1.2.3.4.5.6.7.9";
nextVersion("9.9") === "10.0";
Rules

All numbers, except the first one, must not be greater than 10: if there are, you have to set them to 0 and increment the next number in sequence.

    You can assume all tests inputs to be valid.
*/
/*

function nextVersion(version) {
    var v = version.split(".");
    console.log(v);
    for (var i = v.length - 1; i > -1; i--) {
        if (+v[i]+1 == 10 && i!=0)
            v[i] = 0;
        else
            {
                v[i]++;
                break;
            }
    }
    return v.join(".");
}
console.log(nextVersion("5.9.9.9.9"));
*/
//--------------------------------------------------------------------------------------------



//---------------------------------------------------------------------------------
// CODEWARS
// Complete The Pattern#1
/*
Task:

    You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

    Note:Returning the pattern is not the same as Printing the pattern.
    Rules/Note:

If n < 1 then it should return "" i.e. empty string.
    There are no whitespaces in the pattern.
    Pattern:

1
22
333
    ....
    .....
    nnnnnn*/
/*
function pattern(n){
    var output="";
    for (var i=1; i<=n;i++) {

        for (var j=0;j<i;j++) {
            output = output + i;
        }
        if (n>1) output = output + "\n";
    }
    if (n>1) return output.slice(0,-1);
    return output;
}
console.log(pattern(9));*/
//---------------------------------------------------------------------------


//------------------------------------------------------------------------------------
// CODEWARS
// Complete The Pattern #2

/*Task:
    You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

    Note:Returning the pattern is not the same as Printing the pattern.
    Rules/Note:
If n < 1 then it should return "" i.e. empty string.
    There are no whitespaces in the pattern.
    Pattern:
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
    ...............
    ..............
    (n)(n-1)(n-2)
    (n)(n-1)
    (n)*/
/*
function pattern(n) {
    var output = '';
    var t = 0;
    for (var j=n;j>0;j--) {
        for (var i = n; i > t;i--) {
            output += i;
        }
        t++;
        output += "\n";
    }
    return output.slice(0,-1);
}
console.log(pattern(1));*/
//-----------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------
// CODEWARS
// Complete The Pattern #3 (Horizontal Image of #2)

/*
 Task:

 You have to write a function pattern which creates the following pattern upto n number of rows.
 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

 Pattern:
 (n)
 (n)(n-1)
 (n)(n-1)(n-2)
 ................
 .................
 (n)(n-1)(n-2)....4
 (n)(n-1)(n-2)....43
 (n)(n-1)(n-2)....432
 (n)(n-1)(n-2)....4321

 Examples:

 pattern(4):
 4
 43
 432
 4321

 pattern(6):
 6
 65
 654
 6543
 65432
 654321
 Note: There are no blank spaces
 Hint: Use \n in string to jump to next line
 */

/*
function pattern(n){
    var output="";

    for (var j=0;j<n;j++) {
        var t = n;
        for (var i = 0;i<=j ; t--,i++) {
            output = output + t;
        }
        output += "\n";
    }
    return output.slice(0,-1);
}
console.log(pattern(9));*/
//------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------
// CODEWARS
// Complete The Pattern #5 - Even Ladder

/*
Task:
    You have to write a function pattern which creates the following pattern upto n number of rows.

    If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
    If any odd number is passed as argument then the pattern should last upto the largest even number which is smaller than the passed odd number.
    If the argument is 1 then also it should return "".

    Examples:
pattern(8):
22
4444
666666
88888888

pattern(5):
22
4444

Note: There are no spaces in the pattern
Hint: Use \n in string to jump to next line
*/
/*

function pattern(n) {
    var output = "";
    var t = 1;
    if (n%2 > 0) n--;
    for (var i=2;i<=n;i+=2) {
        for (var j=i;t<=j;t++) {
            output = output + j
        }
        output += "\n";
        t=1;
    }
    return output.slice(0,-1);
}
console.log(pattern(5));
*/
//---------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------
// CODEWARS
//Complete The Pattern #6 - Odd Ladder

/*Task:
    You have to write a function pattern which creates the following pattern (see examples) up to the desired number of rows.
    If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
    If any even number is passed as argument then the pattern should last upto the largest odd number which is smaller than the passed even number.
    Examples:

pattern(9):
1
333
55555
7777777
999999999

pattern(6):
1
333
55555

Note: There are no spaces in the pattern
Hint: Use \n in string to jump to next line*/

/*
function pattern(n) {
    var output = "";
    var t = 1;
    if (n%2 == 0) n--;
    for (var i=1;i<=n;i+=2) {
        for (var j=i;t<=j;t++) {
            output = output + j
        }
        output += "\n";
        t=1;
    }
    return output.slice(0,-1);
}
console.log(pattern(9));
*/
//-------------------------------------------------------------------------


//----------------------------------------------------------------------------------
// CODEWARS
// Complete The Pattern #7 - Cyclical Permutation
/*

Task:
    You have to write a function pattern which creates the following pattern(See Examples) upto desired number of rows.
    If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
    Examples:

pattern(9):
123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678

pattern(5):
12345
23451
34512
45123
51234

Note: There are no spaces in the pattern
Hint: Use \n in string to jump to next line
*/
/*

function pattern(n){
    var output="";
    var d = "";
    for (var i=1;i<=n;i++) {
        for (var j=i;j<=n;j++) {
            output += j;
        }
        output += d + "\n";
        d = d + i;
    }
    return output.slice(0,-1);
}
console.log(pattern(9));
*/
//---------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------
// CODEWARS
// Complete The Pattern #8 - Number Pyramid

/*Description:
    Task:
        You have to write a function pattern which creates the following Pattern(See Examples) upto n(parameter) number of rows.
    Rules/Note:
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
    All the lines in the pattern have same length i.e equal to the number of characters in the last line.
    Range of n is (-∞,100]

Examples:
    pattern(5):
1
121
12321
1234321
123454321

pattern(10):
1
121
12321
1234321
123454321
12345654321
1234567654321
123456787654321
12345678987654321
1234567890987654321*/

/*function pattern(n){
    var output="";
    var space = n;
    var x = '';
    var y = '';
    var f = '';
    var s = '';

    for (var i=1;i<=n;i++) {

            for (var t = space;t>1;t--) {
                x = x + '.';
            }
            for (var first=1;first<=i;first++) {
                f = f + first%10;
            }
            for (var second=i-1;second>=1;second--) {
                s = s + second%10;
            }

        if (s == 0) s = '';
        output = output + x + f + s + x + "\n";
        space--;
        x = '';
        f = '';
        s = '';
    }
    return output.slice(0,-1);
}
console.log(pattern(12));*/
//----------------------------------------------------------------------------------





//---------------------------------------------------------------------------------
// CODEWARS
// Complete The Pattern #9 - Diamond

/*Task:

    You have to write a function pattern which returns the following Pattern(See Examples) upto (2n-1) rows, where n is parameter.

    Rules/Note:

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
    All the lines in the pattern have same length i.e equal to the number of characters in the longest line.
    Range of n is (-∞,100]
Examples:

    pattern(5):

1
121
12321
1234321
123454321
1234321
12321
121
1
pattern(10):

1
121
12321
1234321
123454321
12345654321
1234567654321
123456787654321
12345678987654321
1234567890987654321
12345678987654321
123456787654321
1234567654321
12345654321
123454321
1234321
12321
121
1
pattern(15):

1
121
12321
1234321
123454321
12345654321
1234567654321
123456787654321
12345678987654321
1234567890987654321
123456789010987654321
12345678901210987654321
1234567890123210987654321
123456789012343210987654321
12345678901234543210987654321
123456789012343210987654321
1234567890123210987654321
12345678901210987654321
123456789010987654321
1234567890987654321
12345678987654321
123456787654321
1234567654321
12345654321
123454321
1234321
12321
121
1*/
/*
function pattern(n){
    var output="";
    var space = n;
    var x = '';
    var y = '';
    var f = '';
    var s = '';

    for (var i=1;i<=n;i++) {

        for (var t = space;t>1;t--) {
            x = x + ' ';
        }
        for (var first=1;first<=i;first++) {
            f = f + first%10;
        }
        for (var second=i-1;second>=1;second--) {
            s = s + second%10;
        }

        if (s == 0) s = '';
        output = output + x + f + s + x + "\n";
        space--;
        x = '';
        f = '';
        s = '';
    }
    var output2 = output.split('\n').reverse().slice(2);

    var res2 = output2.join("\n");
    output += res2;

    return output;//.slice(0,-1);
    }

console.log(pattern(10));
*/
//--------------------------------------------------------------------------


/*---------------------------------------------------------------------------------
// CODINGAME
// Функция выводит разницу ближайших друг к другу чисел
function nearPower (str) {
    "use strict";
    var arr = str.split(" ").sort((a,b)=>a-b);
    console.log(arr);
    var res = [];
    for (var i=1;i < arr.length; i++) {
        res[i-1] = arr[i] - arr[i-1];
    }
    return res.sort((a,b)=>a-b)[0];
}
console.log(nearPower("1 45 74 9"));
------------------------------------------------------------------------------------*/




//-------------------------------------------------------------------------------------------
// CODEWARS
// Two fighters, one winner.

/*Create a function that returns the name of the winner in a fight between two fighters.
    Each fighter takes turns attacking the other and whoever kills the other first is victorious.
    Death is defined as having health <= 0.
    Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
    Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0.
    You can mutate the Fighter objects.*/
/*

function Fighter (name, health, damagePerAttack) {
    "use strict";
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() {return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {
    "use strict";

    while (fighter1.health > 0 || fighter2.health > 0) {
        if (firstAttacker == fighter1.name) {
            fighter2.health -= fighter1.damagePerAttack;
            firstAttacker = fighter2.name;
        } else {
            fighter1.health -= fighter2.damagePerAttack;
            firstAttacker = fighter1.name;
        }
    }
    return firstAttacker;
}
console.log(declareWinner(new Fighter("One", 10, 2), new Fighter("Two", 10, 3), "One"));
*/
//-------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------
// CODEWARS
//Strings, strings, strings (Easy)
/*
Background

Oh no, there were some problems with your computer and now you cannot convert any data type to strings!

 Task

The toString() method has been disabled for booleans, numbers, arrays and objects.
    Your goal is to retrive toString() for the following data types.

    I. Booleans

For booleans:
    true should be converted to "true"
false should be converted to "false"

II. Numbers
For numbers, conversion should be as follows:
// e.g.
(3).toString() === "3"
(3.14).toString() === "3.14"
(-78).toString() === "-78"
Math.PI.toString() === "3.141592653589793"

III. Arrays
For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings.
    However, on top of fixing it, we would also like to improve it as well.
    We would like to keep the square brackets ([]) around the "stringified" array as it would be seen in Javascript code. For example:

// e.g.
    [].toString() === "[]"
        [1].toString() === "[1]"
        [2,4,8,17].toString() === "[2, 4, 8, 17]"
        [Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"
As you may have noticed in the examples above, when the array has more than one element,
    some of the strings have spaces as well as commas separating each item but some strings do not.
    For the purposes of this Kata whether there are whitespaces or not does not matter for stringified arrays -
before conducting the tests your input is stripped of all whitespace.

    Final Note - IMPORTANT
Your recovered toString() methods should only return the stringified version of the input -
it should NOT alter the original value. Test cases have been created to confirm this.
*/
/*
Number.prototype.toString = function () {
    "use strict";
    return  this + "";
};
String.prototype.toString = function () {
    "use strict";
    return  this + "" ;
};

Boolean.prototype.toString = function () {
    "use strict";
    return  this + "";
};
Array.prototype.toString = function () {
    "use strict";
    return "[" + this.join(",") + "]";
};
*/
//-------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------
// CODEWARS
// Competitive eating scoreboard

/*You are the judge at a competitive eating competition and you need to choose a winner!

    There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

Chickenwings: 5 points
Hamburgers: 3 points
Hotdogs: 2 points
Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

[
    {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
    {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
]
It should return "name" and "score" properties sorted by score; if scores are equals, sort alphabetically by name.

    [
    {name: "Big Bob", score: 134},
    {name: "Habanero Hillary", score: 98}
    ]*/
/*

function scoreboard (whoAteWhat) {
    "use strict";
    var result = [];
    // chickenwings = 5 points,
    // hamburgers = 3 point,
    // hotdogs = 2 points

        var score = [];
    for (var i=0; i<whoAteWhat.length; i++) {
       // for (var key in whoAteWhat[i]) {
            score[i] = whoAteWhat[i].chickenwings*5 + whoAteWhat[i].hamburgers*3 + whoAteWhat[i].hotdogs*2;
            result[i] = {name: whoAteWhat[i].name, score: score[i]};
      //  }
    }
    console.log(result);
    result.sort(function(x,y) {
        if (x.score < y.score) return 1;
        else if (x.score > y.score) return -1;
        if (x.name > y.name && x.score == y.score) return 1;
        return 0;
    });
    return result;
}
var inputArr = [{name: "C", chickenwings: 8, hamburgers: 8, hotdogs: 17},
                {name: "B",chickenwings: 8, hamburgers: 8, hotdogs: 19},
                {name: "A",chickenwings: 8, hamburgers: 8, hotdogs: 17} ];
console.log(scoreboard(inputArr));
*/
//------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------------
// CODEWARS
// Another one down—the Survival of the Fittest!
/*
Given an array of integers, remove the n smallest. If there are multiple elements with the same value,
    remove the ones with a lower index first. If n is greater than the length of the array/list,
return an empty list/array. If n is zero or less, return the original array/list.
    Don't change the order of the elements that are left.

Examples
removeSmallest (-10) [1,2,3,4,5] = [1,2,3,4,5]
removeSmallest 0 [1,2,3,4,5] = [1,2,3,4,5]
removeSmallest 2 [5,3,2,1,4] = [5,3,4]
removeSmallest 3 [5,3,2,1,4] = [5,4]
removeSmallest 3 [1,2,3,4,5] = [4,5]
removeSmallest 5 [1,2,3,4,5] = []
removeSmallest 9 [1,2,3,4,5] = []

removeSmallest 2 [1,2,1,2,1] = [2,2,1]*/
/*

function removeSmallest(n, arr) {
    "use strict";
    if (n<=0) return arr;
    if (n>arr.length) return [];
    console.log('length =' , arr.length);
    var obj = {};
    for (var i=0, k=0;i<arr.length;i++, k++) {
        obj[k] = arr[i]
    }
   var arr_key = [];
    for (var key in obj) {
        arr_key.push(key);
    }
    console.log(arr_key);
    arr_key.sort(function (a,b) {return obj[b] - obj[a] || b-a});
    for (var t=0;t<n;t++) {
        arr_key.pop();
    }
    arr_key.sort(function(a,b) {return a-b});
    console.log(arr_key);
    var result = [];
    for (var m=0;m<arr_key.length;m++) {
        result[m] = obj[arr_key[m]];
    }
    console.log(obj);
    return (result);
}
console.log(removeSmallest(1,[2,4,2,2,4,2,2])); // 4,2,2,4,2,2
*/
//-----------------------------------------------------------------------------------------




//----------------------------------------------------------------------------------------
// CODEWARS
// Duplicate Arguments
/*
Complete the solution so that it returns true if it contains any duplicate argument values.
    Any number of arguments may be passed into the function. The solution should implement the most optimal algorithm possible.

solution(1, 2, 3) // returns false
solution(1, 2, 3, 2) // returns true
solution('1', '2', '3', '2') // returns true
The array values passed in will only be strings or numbers. The only valid return values are true and false.
    */
/*

function solution() {
    "use strict";
    var slice = [].slice;
    var arr = slice.apply(arguments);
    arr.sort();
    for (var i=0;i<arr.length;i++) {
        if (arr[i] == arr[i+1])
            return true;
    }
    return false;
}
console.log(solution(1,{a:3},3, "array", {a:3},3));
*/
//--------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------
// Codewars
// Holiday Shopping Priority Queue
/*

Example:
var giftList = new HolidayPriorityQueue();
giftList.addGift( { gift: 'Water gun', priority: 1} );// => returns 1
giftList.addGift( { gift: 'Toy truck', priority: 4 } );// => returns 2
giftList.addGift( { gift: 'Roller Skates', priority: 3 } );// => returns 3

giftList.buyGift();// => returns 'Water gun'
giftList.buyGift();// => returns 'Roller Skates'
giftList.buyGift();// => returns 'Toy truck'
*/
/*
function HolidayPriorityQueue() {
}
var array_gift = [];
var list = [];
var i = 0;
HolidayPriorityQueue.prototype.addGift = function(gift) {
        list.push(gift);

    list.sort(function(a,b){return a.priority - b.priority});
       // array_gift.push(gift.name);


        return list.length;
};
HolidayPriorityQueue.prototype.buyGift = function() {
    var res = '';
    res = list[i].name;
    list.shift();
    return res;
};*/
//------------------------------------------------------------------------------------------






//--------------------------------------------------------
// CODEWARS
// Find the missing letter
/*function findMissingLetter(array)
{
    var arr_code = array.map(function (a) {return a.charCodeAt(0)}).sort(function(a,b){return a-b});
    console.log(arr_code);
    for (var i=0;i<arr_code.length;i++) {
        if (arr_code[i] != arr_code[i+1]-1) {
            return String.fromCharCode(arr_code[i+1]-1);
        }
    }

    return arr_code;
}
console.log(findMissingLetter(['b','c','e','f']));*/
//--------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------
// CODEWARS
// Find the missing term in an Arithmetic Progression
/*var findMissing = function (list) {
    list.sort (function (a,b) {return a-b});
    console.log(list);
    var delta = 0;
    var diff01 = list[1] - list[0];
    var diff12 = list[2] - list[1];
    if (diff01 <= diff12) {
        delta = diff01;
    }
    else {
        delta = diff12;
        return list[0] + delta;
    }
    for (var i=1;i<list.length;i++) {
        if (list[i] != list[i+1] - delta) {
            return list[i] + delta;
        }
    }
    return 0;
};
console.log(findMissing([78,84,80]));*/
//----------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------
// CODEWARS
// Length of missing array
/*function getLengthOfMissingArray(arrayOfArrays) {
    console.log(arrayOfArrays);
    if (!arrayOfArrays || !arrayOfArrays.length) return 0;
    for (var i=0;i<arrayOfArrays.length;i++) {
        if (!arrayOfArrays[i] || !arrayOfArrays[i].length) {
            return 0;
        }
    }
    var list = arrayOfArrays.map(function(a) {return a.length;}).sort(function (a,b) {return a-b;});
    if (list.length == 2) {
        return list[1] - list[0];
    }
    var delta = 0;
    var diff01 = list[1] - list[0];
    var diff12 = list[2] - list[1];
    if (diff01 <= diff12) {
        delta = diff01;
    }
    else {
        delta = diff12;
        return list[0] + delta;
    }
    for (var i=1;i<list.length;i++) {
        if (list[i] != list[i+1] - delta) {
            return list[i] + delta;
        }
    }

}

console.log(getLengthOfMissingArray([ null, [ null, null, null ] ]));*/
//--------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------


// CODEWARS
// Prize Draw
/*Description:

    To participate in a prize draw each one gives his/her firstname.
    Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1,
    B and b rank 2 and so on.
    The length of the firstname is added to the sum of these ranks hence a number n. An array of random weights is
linked to the firstnames and each n is multiplied by its corresponding weight to get what they call a winning number.

    Example: names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1]
PAUL -> n = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The weight associated with PAUL is 2 so Paul's winning number is 54 * 2 = 108.
Now one can sort the firstnames in decreasing order of the winning numbers.
    When two people have the same winning number sort them alphabetically by their firstnames.

    Task:
parameters: st a string of firstnames, we an array of weights, n a rank
return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:
    names: COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH weights: [1, 4, 4, 5, 2, 1] n: 4
The function should return: PauL

Note:
    If st is empty return "No participants".
    If n is greater than the number of participants then return "Not enough participants".
    */
/*

function rank(st, we, n) {
    if (st == '') return "No participants";
    var arr_parts = st.split(',');
    if (arr_parts.length < n) return "Not enough participants";
    var sum = 0;

    var res = [];
    for (var i=0; i<arr_parts.length;i++) {
        arr_parts[i] = arr_parts[i].toLowerCase();
        sum = 0;
        for (var j=0;j<arr_parts[i].length;j++) {
            sum += arr_parts[i].charCodeAt(j) - 96;
        }
        sum += arr_parts[i].length;
        sum *= we[i];

        res.push([arr_parts[i],sum]);
    }
    console.log(res);
    res.sort(function(a,b) {
        if (a[1] > b[1]) return -1;
        else if (a[1] < b[1]) return 1;
        return a[0]-b[0];
    });
    console.log('После сортировки ');
    console.log(res);

    return res[n-1][0];
}
console.log(rank("Lyli,Lily,Olivai,Olivia,Willaim,William", [3,3,4,4,5,5], 6));
*/


//---------------------------------------------------------------------------

// CODEWARS
// up AND down

/*You are given a string s made up of substring s(1), s(2), ..., s(n) separated by whitespaces. Example: "after be arrived two My so"
Task
Return a string t having the following property:
    length t(O) <= length t(1) >= length t(2) <= length t(3) >= length t(4) .... (P)
where the t(i) are the substring of s; you must respect the following rule:
    at each step from left to right, you can only move either already consecutive strings or strings
that became consecutive after a previous move. The number of moves should be minimum.

    arrange("after be arrived two My so") should return "be ARRIVED two AFTER my SO"*/
/*

function arrange(string) {
    var arr = string.split(' ');
    //  console.log('Имеем :');
    //  console.log(arr);
    for (var i=0;i<arr.length-1;i++) {
        var t = i+1;
        if (t % 2 != 0) {
            if (arr[i].length > arr[i+1].length) {
                arr.exchange(i,i+1);
            }
          //  arr[i+1] = arr[i+1].toUpperCase();
        }
        else {
            if (arr[i].length < arr[i + 1].length) {
                arr.exchange(i, i + 1);
            }
           // arr[i+1] = arr[i+1].toLowerCase();
        }
        //  console.log('Итерации: ');
        // console.log(arr);
    }
    for (var j=0;j<arr.length;j++) {
        if (j %2 != 0) {
            arr[j] = arr[j].toUpperCase();
        }
        else arr[j] = arr[j].toLowerCase();
    }
    return arr.join(' ');
}
Array.prototype.exchange = function (a, b) {

    if (this[a] && this[b]) {
        var c = this[a];
        this[a] = this[b];
        this[b] = c
    }
    return this;
};

console.log(arrange('after be arrived two My so'));
*/


//-----------------------------------------------------------------------------------------------------
// CODEWARS
// Make a Palindrome
/*Write a function makePalindrome that takes a string as the argument
and then returns the shortest possible palindrome made from that string without modifying the original string.
    If more than one palindrome can be made,
    the function should return the solution where the given string appears at the beginning of the palindrome.
 */
/*

function makePalindrome(text) {
    if (text.length == 1) {
        return text;
    }
    if (isPal(text)) return text;

    var term = '';
   // Будем отсекать по одной букве с конца строки и проверять оставшуюся часть на палиндром
    for (var i=1;i<text.length-1;i++) {
        var word = text;
        term += word[word.length-i];
       if( isPal(word.slice(0,-i))) {
            return term + text;
       }
    }
    term = '';
    // Теперь будем отсекать буквы с начала строки
    for (i=1;i<text.length-1;i++) {
        word = text;
        term += word[i-1];
        if( isPal(word.slice(i))) {
            return text + term.split('').reverse().join('');
        }
    }
    // Если дошли до этого места, значит, text не содержит ни палиндром, ни часть палиндрома.
    term = text;
    for (i=1;i<text.length;i++) {
        term += text[text.length-1-i];
    }
    return term;
}
// Вспомогательная функция - проверка строки на палиндром
function isPal(t) {
    for (var i=0,j= t.length-1; i<Math.ceil((t.length)/2); i++,j--) {
        if (t[i] == t[j]) {
            if (i == Math.floor(t.length/2) || i == j-1){
                return true;
            }
        }
        else break;
    }
    return false;
}
console.log(makePalindrome('abb'));
---------------------------------------------------------------------------------------------*/



//-----------------------------------------------------------------
// COSEWARS
// RESISTOR COLOR CODES
/*

function decodeResistorColors(bands) {
    var band_arr = bands.split(' ');
    console.log(band_arr);
    var digits = band_arr.map(function(x) {
        switch(x) {
            case 'black': return '0'; break;
            case 'brown': return '1'; break;
            case 'red': return '2'; break;
            case 'orange': return '3'; break;
            case 'yellow': return '4'; break;
            case 'green': return '5'; break;
            case 'blue': return '6'; break;
            case 'violet': return '7'; break;
            case 'gray': return '8'; break;
            case 'white': return '9'; break;
            case 'silver': return '10%'; break;
            case 'gold': return '5%'; break;
        }
    });
    console.log(digits);
    var resist = (digits[0] + digits[1]) * Math.pow(10, +digits[2]);
    console.log(resist);
    if(resist>=1000 && resist < 1000000) {
        resist = resist/1000 + 'k';
    }
    if(resist >= 1000000) {
        resist = resist/1000000 + 'M';
    }
    console.log(resist);
    var result = resist + ' ohms, ' + (digits[3]||'20%');
    return result;
}
console.log(decodeResistorColors('red black green'));
*/

//---------------------------------------------------------------------------------------


//------------------------------------------------------------------------
// CODEWARS
// Tortoise racing
/*
 Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour.
 Young B knows she runs faster than A and furthermore has not finished her cabbage.
 When she starts, at last, she can see that A has a 70 feet lead but B speed is 850 feet per hour.
 How long will it take B to catch A?
 More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0)
 and a lead g (integer > 0) how long will it take B to catch A?
 The result will be an array [h, mn, s] where h, mn, s is the time needed in hours,
 minutes and seconds (don't worry for fractions of second). If v1 >= v2 then return nil, ' +
 'nothing, null, None or {-1, -1, -1} for C++.

 Examples:
 race(720, 850, 70) => [0, 32, 18]
 race(80, 91, 37) => [3, 21, 49]
 */
/*
 function race(v1, v2, g) {
 var result = [];
 var t = g/(v2-v1);
 var m = (t - (Math.floor(t)))*10000*0.006;
 var s = ((m - Math.floor(m))*10000*0.006).toFixed(2);
 result[2] = Math.floor(s);
 result[1] = Math.floor(m);
 result[0] = Math.floor(t);
 if (result[2] == 60) {
 result[2] = 0;
 result[1] += 1;
 }
 console.log('h = ', t);
 console.log('m = ', m);
 console.log('s = ', s);
 return result;
 }
 console.log(race(820, 850, 550));
 */
//--------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
// CODEWARS
// First non-repeating letter

// Эта функция принимает строку и возвращает первый неповторяющийся символ в этой строке
/*

function firstNonRepeatingLetter (s) {
    console.log('s =', s);
    var arr = s.split('');
    console.log('перед сортировкой (arr2): ');
    console.log(arr);
    // Сделаем копию массива arr
    var arr2 = [];
    for(var p=0;p<arr.length;p++) {
        arr2[p] = arr[p];
    }
   arr.sort(function(a,b) {
       if (a.toUpperCase() > b.toUpperCase()) return 1;
       if (a.toUpperCase() < b.toUpperCase()) return -1;
       return 0;
   });
    console.log("После сортировки:");
console.log(arr);

    for (var i=0;i<arr.length;i++) {
        if (arr[i+1]) {
            if (arr[i].toUpperCase() == arr[i + 1].toUpperCase()) {
                var b = 2;
                for (;;) {

                        if (arr[i+b] && (arr[i].toUpperCase() == arr[i + b].toUpperCase())) {
                            b++;
                        }
                        else {
                            arr.splice(i, b);
                            i--;
                            break
                        }

                }
            }
            }
        }
    console.log("Удалим повторяющиеся элементы (arr):");
    console.log(arr);
    // Произведем поиск первого неповторяющегося элемента
    for (var t=0;t<arr2.length;t++) {
        for (var d=0;d<arr.length;d++) {
            if (arr2[t] == arr[d]) {
                return arr[d];
            }
        }
    }
    return '';
}
console.log(firstNonRepeatingLetter('stress'));
*/

//-------------------------------------------------------------------------------------




//-------------------------------------------------------------------------
// CODEWARS
// Resistor Color Codes, Part 2
/*

function encodeResistorColors(str) {
    console.log(str);
    // Запомним омы, килоомы или мегаомы мы имеем
    var stepen = 0;
    if (str.match(/k/g)) {
        stepen = 3;
    }
    if (str.match(/M/g)) {
        stepen = 6;
    }
    if (str.match(/\./g)) {
        stepen--;
        str = str.replace(/\./, '');
    }
    console.log('stepen =', stepen);
    // Выделим число из нашей входной строки
    var num = parseInt(str);
    console.log(num);

    // Преобразуем наше число к истинному
    num = num * Math.pow(10, stepen);
    console.log(num);

    // Создаим массив. Первые два элемента  - первые две цифры числа. Третий элемент - количество оставшихся нулей
    var arr = (num + '').split('');
    console.log(arr);

    arr = [arr[0], arr[1], (arr.length - 2)+'', '10']; // в функции dw заменим '10' на 'gold'
    console.log(arr);

    // Теперь поменяем цифры на слова
    var result = arr.map(function (x) {
        switch (x) {
            case '0':
                return 'black';
                break;
            case '1':
                return 'brown';
                break;
            case '2':
                return 'red';
                break;
            case '3':
                return 'orange';
                break;
            case '4':
                return 'yellow';
                break;
            case '5':
                return 'green';
                break;
            case '6':
                return 'blue';
                break;
            case '7':
                return 'violet';
                break;
            case '8':
                return 'gray';
                break;
            case '9':
                return 'white';
                break;
            case '10':
                return 'gold';
                break;
        }
    });
    return result.join(' ');
}
console.log(encodeResistorColors('1k ohms'));
*/
//---------------------------------------------------------------------------------


//------------------------------------------------------------------------------
// CODEWARS
// Loose Charge (Part 2)
// Есть набор монеток (номиналов, т.е. можно сколько угодно использовать каждый номинал)
// Нужно выяснить, сколькими монетами (минимальное количество) можно собрать загадываемое число(второй параметр)
/*

function loose_change(list, amount) {
    list = list.sort((a,b) => b-a);
    console.log(list);
    // Проверим, не является какой-либо элемент из массива делителем нашей суммы
    for (var t=0;t<list.length; t++) {
        if (amount % list[t] == 0) {
            var test = amount/list[t];
            break;
        }
    }
    var N=0;
    var s = 0; // Текущая стоимость
    for (var i=0; i<list.length;i++) {
        for (var j=1;s < amount;j++) {
            if (s+list[i] <= amount) {
                N++;
                s += list[i];
            }
            else break;
        }
    }
    if (test < N)
    return test;
    return N;
}
console.log(loose_change([1, 4, 5, 10], 8));
*/

//-------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------
// CODEWARS
// Descendling Order
// Дано число, отсортировать его в порядке убывания цифр
/*

function descendingOrder(n) {
    "use strict";
    console.log(n);
    n = n.toString().split('');
    console.log(n);
    n.sort(function(a,b){return b-a});
    return +(n.join(''));
}
console.log(descendingOrder(384601));
*/

//-------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------
// Пузанков. Урок 10. Задача №1
// Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив состоящий только из чисел или строк.
// Написать метод extractNumber или extractString, который будет возвращать массив.
/*

Object.prototype.extractNumber = function () {
    "use strict";
    var arr = [];
    //var keys = Object.keys(obj);
    for (var keys in this) {
        if (this[keys] == +(this[keys])) {
            arr.push(this[keys]);
        }
    }
    return arr;
}
Object.prototype.extractString = function (obj) {
    "use strict";
    var arr = [];
    //var keys = Object.keys(obj);
    for (var keys in obj) {
        if (typeof obj[keys] == 'string') {
            arr.push(obj[keys]);
        }
    }
    return arr;
}
var ob = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};


console.log(extractString(ob));
console.log(ob.extractNumber());
*/

//------------------------------------------------------------------------------------


//------------------------------------------------------------------------
// Пузанков. Урок 10, задача 7
// Функция SHUFFLE перетасовывает массив
/*

function shuffle(arr) {
   // console.log(arr);
    // Для начала определим два произвольных элемента в массиве
    // Все это будет в цикле из arr.length посторений
    for (var i=0;i<arr.length;i++) {
        var i1 = Math.floor(Math.random() * arr.length);
        var i2 = Math.floor(Math.random() * arr.length);
       // console.log(i1, i2);
        if (i1 == arr.length) i1--;
        if (i2 == arr.length) i2--;
        var q = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = q;
    }
    return arr
}
console.log(shuffle([1,2,3,4,5,6,7,8,9,10]));
*/

//-----------------------------------------------------------------------------





//--------------------------------------------------------------------------
// Пузанков. Урок 10, задача 8
// Функуия getUnic из массива имен делает массив уникальных имен, т.е. без повторений,
// и сортирует их в порядке убывания часто встречающихся имен
/*

function getUnic(arr) {
    console.log('Имеем массив: ');
    console.log(arr);
    arr.sort(function(a,b) {
        if (a == b) return -1;
        return 1;
    });
    // Вставим все уникальные имена в отдельные массивы
    var newArr = [];
    for (var i=0;i<arr.length;i++) {
        var arrStep = [];
        arrStep.push(arr[i]);
        if (arr[i] != arr[i+1]) {
            newArr.push(arrStep);
        }
        else
            for (var j=1;;j++) {
                arrStep.push([arr[i+j]]);
                if (arr[i] != arr[i+j+1]) {
                    newArr.push(arrStep);
                    i = i+j;
                    break;
                }
            }
        //break;
    }
    //console.log(newArr);
    newArr.sort(function(x,y) {return y.length - x.length});
    //console.log(newArr);
    var result = [];
    for(var k=0; k< newArr.length;k++) {
        result[k] = newArr[k][0];
    }
    console.log('Получим: ');
    return result;
}
console.log(getUnic(['footer','menu__item','link', 'menu', 'footer','menu__item', 'header','link', 'footer', 'sidebar', 'link', 'footer','menu__item']));
*/
//---------------------------------------------------------------------------


//--------------------------------------------------------------------------------
// CODEWARS
// Find Duplicates
// Функция из исходного массива строит новый массив, состоящих из дубликатов исходного массива. 5 не равно '5'
/*

function duplicates(arr) {
    console.log(arr);
    var result = [];
    arr.sort(function(a,b) {return a-b});

    for(var i=0;i<arr.length;i++) {
        if (arr[i] === arr[i+1])
            result.push(arr[i]);
    }
    console.log(result);
    var res = [];
    for(var j=0;j<result.length;j++)
        if (res.indexOf(result[j]) === -1) {
            res.push(result[j]);
        }

    return res;
}
console.log(duplicates([1,2,3,4,5,6,3]));
*/
//---------------------------------------------------------------------------------


//-------------------------------------------------------------------------
// CODEWARS
// Detect Pangram
// Функция определяет, встречаются ли в строке все символы English-алфавита хотя бы один раз.
/*

function isPangram(string) {
    console.log(string);
    string = string.replace(/\s/g, '');
    string = string.replace(/[^a-zA-Z]/g, '');
    console.log(string);
    string = string.split('');
    for (var i=0; i<string.length;i++) {
        string[i] = string[i].toLowerCase();
    }
    var stek = [];
    for (var j=0;j<string.length;j++) {
        if (stek.indexOf(string[j]) === -1) {
            stek.push(string[j]);
        }
    }
    if (stek.length == 26) return true;
    return false;
}
console.log(isPangram('The quick bro,wn fox jumps over the lazy dog.'));
*/
//-----------------------------------------------------------------------------------




//----------------------------------------------------------------------
// CODEWARS
// Complete Fibonacci Series
// Функция возвращает массив из чисел Фибоначи от 0 до n
/*

function fibonacci(n) {
    if (n == 1) return [0];
    if (n == 2) return [0,1];
    if (n < 1) return [];

    var result = [0,1];
    var x1 = 0;
    var x2 = 1;
    for (var i=0;i<n-2;i++) {
        var x3 = x1 + x2;
        result.push(x3);
        x1 = x2;
        x2 = x3;
    }
    return result;
}
console.log(fibonacci(90));
*/
//-----------------------------------------------------------------------------------



//----------------------------------------------------------------------------
// CODEWARS
// Count characters in your string
// Функция берет строку и считает каждый элемент в ней
/*

function count (string) {
    console.log(string);
    var arr = string.split('');
    console.log(arr);
    var obj = {};
    for (var i=0;i<arr.length;i++) {
        var keys = Object.keys(obj);
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }
    return obj;

}
console.log(count('adhdjhdserea'));
*/
//--------------------------------------------------------------------------------------


//-----------------------------------------------------------------------------------
// CODEWARS
// Typer.js
// Функция  и ее методы проверяют аргумент на тип

/*

var typer = function(obj) {};

typer.isNumber =    function(x) {    if ({}.toString.call(x).slice(8, -1) == 'Number' && (isNaN(x) == false)) return true; return false;};
typer.isString =    function(x) {    if ({}.toString.call(x).slice(8, -1) == 'String') return true; return false;};
typer.isArray =     function(x) {    if ({}.toString.call(x).slice(8, -1) == 'Array') return true; return false;};
typer.isFunction =  function(x) {    if ({}.toString.call(x).slice(8, -1) == 'Function') return true; return false;};
typer.isDate =      function(x) {    if ({}.toString.call(x).slice(8, -1) == 'Date') return true; return false;};
typer.isRegExp =    function(x) {    if ({}.toString.call(x).slice(8, -1) == 'RegExp') return true; return false;};
typer.isBoolean =   function(x) {    if ({}.toString.call(x).slice(8, -1) == 'Boolean') return true; return false;};
typer.isError =     function(x) {    if ({}.toString.call(x).slice(8, -1) == 'Error') return true; return false;};
typer.isNull =      function(x) {    if ({}.toString.call(x).slice(8, -1) == 'Null') return true; return false;};
typer.isUndefined = function(x) {    if ({}.toString.call(x).slice(8, -1) == 'Undefined') return true; return false;};


var s;
var func = function(){};
var d = new Date();
console.log(typer.isNumber(34));
console.log(typer.isString('g'));
console.log(typer.isArray([1,2]));
console.log(typer.isFunction(func));
console.log(typer.isDate(d));
console.log(typer.isRegExp(/4r/));
console.log(typer.isBoolean(false));
console.log(typer.isError(Error()));
console.log(typer.isNull(null));
console.log(typer.isUndefined(s));
*/
//-----------------------------------------------------------------------------------------------------




























