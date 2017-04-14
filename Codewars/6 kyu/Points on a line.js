/**
 * Created by Sergey on 14.04.2017.
 */
/*
Given some points (cartesian coordinates), return true if all of them lie on a line.
Treat both an empty set and a single point as a line.

onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
onLine([[1,2], [-3, -14], [22, 9]]);              // returns false
*/

function onLine(points) {
    if (points.length == 0) return true;
    if (points.length === 1) return true;

    if (points.length == 2 && ((points[0][0] == points[1][0]) && (points[0][1] == points[1][1]))) return true;
    // y = kx + b
    //console.log(points);

    //arr[0].toString() === arr[1].toString()

    for (var j=0;j<points.length;j++) {
        if ((points[j][0] != points[j+1][0]) || (points[j][1] != points[j+1][1])) break;
    }
    //console.log('j =',j);

    var k = ( points[j+1][1] - points[j][1] ) / (points[j+1][0] - points[j][0]);
    var b = points[j][1] - k * points[j][0];
    //console.log(k , b);

    for (var i=j;i<points.length;i++) {
        if (isNaN(k) || k == Infinity || k == -Infinity) continue;//точки совпадают
        if (points[i][1].toFixed(6) != (k*points[i][0]+b).toFixed(6)) { return false}
    }
    //console.log('true');
    return true;
}
console.log(onLine([[1,2], [7, 4], [22, 9]])); // true
console.log(onLine([[1,2], [-3, -14], [22, 9]])); // false