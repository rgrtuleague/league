/**
 * Created by SEREGAVIKA on 01.04.2017.
 */


function rectangleRotation(a, b) {
    console.log('a =', a, ',', 'b =', b);

    var CONST_C = Math.sqrt(2)/2;

    for (var i=1;;i++) {
        if (i*CONST_C > a/2) {
            var na = i;
            break;
        }
    }
    for (var i=1;;i++) {
        if (i*CONST_C > b/2) {
            var nb = i;
            break;
        }
    }
    console.log('na =', na, ',',  'nb =', nb);
    var result = 0;
    /*if (na%2==0) return (na/2)*(nb-1)*4+1;   gc

    for (i=1;i<=nb;i++) {
        if (i%2 == 0) {
            result += (na-1)/2;
        }
        else {
            result += (na+1)/2;
        }
    }
    console.log('N/4=', result);
    result *= 4 - 1;*/
    result = Math.ceil(((2*na - 1)* (2*nb - 1))/2);
    return result;

}
console.log(rectangleRotation(8,6));