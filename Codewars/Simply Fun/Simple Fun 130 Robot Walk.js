/**
 * Created by Sergey on 16.04.2017.
 */
/*
Description:
    Task
A robot is standing at the (0, 0) point of the Cartesian plane
and is oriented towards the vertical (y) axis in the direction of increasing y values (in other words, he's facing up, or north). ' +
'The robot executes several commands each of which is a single positive integer. ' +
'When the robot is given a positive integer K it moves K squares forward and then turns 90 degrees clockwise.
The commands are such that both of the robot's coordinates stay non-negative.
Your task is to determine if there is a square that the robot visits at least twice after executing all the commands.

    Example
For a = [4, 4, 3, 2, 2, 3], the output should be true.
   */

function robotWalk(a) {
    if (a.length <= 3) return false;

    for (var i=1;i<a.length;i++) {
        if (a[i] <= a[i+2]) return true;
    }
    return false;
}













