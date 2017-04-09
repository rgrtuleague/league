/**
 * Created by SEREGAVIKA on 01.04.2017.
 */


function rectangleRotation(a, b) {
    console.log('a =', a, ', b =', b);
    var na = Math.ceil(a/Math.sqrt(2));
    var nb = Math.ceil(b/Math.sqrt(2));
    console.log('na =', na, ', nb =', nb);

    var result = na*nb+(na-1)*(nb-1);
    if (na%2 != nb%2) result-=1;
    return result;
}
console.log(rectangleRotation(30,2)); // 65

