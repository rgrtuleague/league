/**
 * Created by SEREGAVIKA on 27.03.2017.
 */
/*

In the following 6 digit number:
    283910
91 is the greatest sequence of 2 digits.
    Complete the solution so that it returns the largest five digit number found within the number given..
    The number will be passed in as a string of only digits. It should return a five digit integer.
    The number passed may be as large as 1000 digits.
*/

function solution(d){
    // Сделаем из числа массив
    var arr = (d+'').split('');
    //console.log('Вот массив цифр');
   // console.log(arr);
    var arrStorage = [];
    var arrTmp = [];

    // Запустим цикл, начнем с девяток. Будем искать числа
 outer:   for (var n=9;n>0; n--) {
        if (arr.indexOf(n + '') === -1) break;
        for (;;) {
            if (arr.indexOf(n + '') >= 0) { // Понеслась
                for (var j = 0; j < 5; j++) {   //Делаем цикл из 5 итераций - берем n и 4 следующих цифры, делаем из них число
                    arrTmp.push(arr[arr.indexOf(n + '') + j]);  // Закинули 5 цифр во временный массив
                }
                arrStorage.push(+(arrTmp.join('')));
                arrTmp = [];
                delete arr[arr.indexOf(n + '')];
                if (arr.indexOf(n + '') === -1) break outer;
            } else break;
        }
    }
        console.log(arrStorage);
        // Теперь найдем максимальное из чисел в arrStorage
        return Math.max.apply(null, arrStorage);



}
console.log(solution(39599856656)); // 99856