/**
 * Created by Sergey on 02.04.2017.
 */
/*
 Task
 Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
 Example
 For n = 6, l = 2 and r = 4, the output should be 2
 There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4:
 6 = 2 + 4 and 6 = 3 + 3
*/
function countSumOfTwoRepresentations(n, l, r) {
    console.log('Дано:', n,l,r);
    var count = 0;

    for (var i = l; i <= r; i++) {
        if (l <= n-i && n-i <= r) {
            count++;
        }
    }
    return Math.ceil(count/2);
}
console.log(countSumOfTwoRepresentations(93,24,58));





