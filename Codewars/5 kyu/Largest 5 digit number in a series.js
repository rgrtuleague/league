/**
 * Created by SEREGAVIKA on 27.03.2017.
 */
function solution(d){
    // Сделаем из числа массив
    var arr = (d+'').split('');
    //console.log('Вот массив цифр');
   // console.log(arr);
    var arrStorage = [];
    var arrTmp = [];

    // Запустим цикл, начнем с девяток. Будем искать числа
    for (var n=9;n>0; n--) {

            if (arr.indexOf(n+'') >= 0) { // Понеслась
                for (var j=0;j<5;j++) {   //Делаем цикл из 5 итераций - берем n и 4 следующих цифры, делаем из них число
                    arrTmp.push(arr[arr.indexOf(n+'')+j]);  // Закинули 5 цифр во временный массив
                }
                arrStorage.push(+(arrTmp.join('')));
                arrTmp = [];
            }
        }
        console.log(arrStorage);
        // Теперь найдем максимальное из чисел в arrStorage
        return Math.max.apply(null, arrStorage);



}
console.log(solution(12394599856656)); // 99856


console.log(Math.max.apply(null, [1,3,6,3,0]));