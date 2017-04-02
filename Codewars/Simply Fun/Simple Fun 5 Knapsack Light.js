/**
 * Created by SEREGAVIKA on 29.03.2017.
 */
/*
Description:
    Task
You found two items in a treasure chest! The first item weighs weight1 and is worth value1,
and the second item weighs weight2 and is worth value2.
What is the total maximum value of the items you can take with you,
assuming that your max weight capacity is maxW and you can't come back for the items later?
Example
For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) === 10

You can only carry the first item.
    For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be
knapsackLight(value1, weight1, value2, weight2, maxW) === 16

You're strong enough to take both of the items with you.
Input/Output
    [input] integer value1
Constraints: 2 ≤ value1 ≤ 50.
    [input] integer weight1
Constraints: 2 ≤ weight1 ≤ 30.
    [input] integer value2
Constraints: 2 ≤ value2 ≤ 50.
    [input] integer weight2
Constraints: 2 ≤ weight2 ≤ 30.
    [input] integer maxW
Constraints: 1 ≤ maxW ≤ 50.
    [output] an integer
*/

function knapsackLight(p1,w1,p2,w2,maxW) {
    console.log(p1,w1,p2,w2,maxW);

    if (w1>maxW && w2>maxW) return 0;
}
console.log(knapsackLight(10,5,6,4,8));





























