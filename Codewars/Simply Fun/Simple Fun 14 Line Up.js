/**
 * Created by Sergey on 06.04.2017.
 */

/*

Description:
    Task
To prepare his students for an upcoming game, the sports coach decides to try some new training drills.
    To begin with, he lines them up and starts with the following warm-up exercise:

    when the coach says 'L', he instructs the students to turn to the left.
    Alternatively, when he says 'R', they should turn to the right.
    Finally, when the coach says 'A', the students should turn around.
    Unfortunately some students (not all of them, but at least one) can't tell left from right, ' +
'meaning they always turn right when they hear 'L' and left when they hear 'R'. ' +
'The coach wants to know how many times the students end up facing the same direction.

Given the list of commands the coach has given,
    count the number of such commands after which the students will be facing the same direction.
    Example

For commands = "LLARL", the output should be 3.

Let's say that there are 4 students, and the second one can't tell left from right.
    In this case, only after the second, third and fifth commands will the students face the same direction.
*/

function lineUp(commands) {
    var arr = commands.split('');
    console.log(arr);

    var s1 = 0; // начальные позиции студентов
    var s2 = 0;
    var count = 0;

    function r(n) { // поворот направо
        n+=1;
        if (n==4) n=0;
        return n;
    }
    function l(n) {  //поворот налево
        n-=1;
        if (n==-1) n=3;
        return n;
    }
    function a(n) { // разворот
        n+=2;
        if (n==4) n=0;
        if (n==5) n=1;
        return n;
    }

    for (var i=0;i<arr.length;i++) {
        if (arr[i]=="R") {
            s1=r(s1);
            s2=l(s2);
        }
        if (arr[i]=="L") {
            s1=l(s1);
            s2=r(s2);
        }
        if (arr[i]=="A") {
            s1=a(s1);
            s2=a(s2);
        }
        if (s1 == s2) {
            count++;
        }
    }
    return count;
}
console.log(lineUp('LLARL')); // 3

















