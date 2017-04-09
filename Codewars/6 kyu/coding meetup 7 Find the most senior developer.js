/**
 * Created by Sergey on 09.04.2017.
 */
/*

You will be given an array of objects representing data about developers
who have signed up to attend the next coding meetup that you are organising.

    Your task is to return an array which includes the developer who is the oldest.
    In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.

    For example, given the following input array:

    var list1 = [
        { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
        { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
        { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
        { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    ];
your function should return the following array:

    [
        { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
        { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
    ]
Notes:
    The input array will always be valid and formatted as in the example above.
*/

    function findSenior(list) {
   var max = -Infinity;
   for (var i=0;i<list.length;i++) {
       if (list[i].age > max) {
           max = list[i].age
       }
   }
   var result = [];
   for (var j=0; j<list.length;j++) {
       if (list[j].age == max) {
           result.push(list[j]);
       }
   }
   return result;
}
console.log(findSenior([{"firstName":"Rimas","lastName":"C.","country":"Jordan","continent":"Asia","age":44,"language":"Java"},
    {"firstName":"Maria","lastName":"S.","country":"Peru","continent":"Americas","age":30,"language":"C"},
    {"firstName":"Alexander","lastName":"F.","country":"Russia","continent":"Europe","age":89,"language":"Java"},
    {"firstName":"Sara","lastName":"Y.","country":"Montenegro","continent":"Europe","age":89,"language":"C"},
    {"firstName":"Fatemeh","lastName":"Z.","country":"Iran","continent":"Asia","age":29,"language":"Java"},
    {"firstName":"Maria","lastName":"I.","country":"Greece","continent":"Europe","age":32,"language":"C"},
    {"firstName":"Emily","lastName":"A.","country":"Northern Ireland","continent":"Europe","age":32,"language":"JavaScript"},
    {"firstName":"Nikola","lastName":"H.","country":"Serbia","continent":"Europe","age":29,"language":"Python"},
    {"firstName":"Gabriel","lastName":"T.","country":"Luxembourg","continent":"Europe","age":28,"language":"Java"},
    {"firstName":"Sumayah","lastName":"M.","country":"Tajikistan","continent":"Asia","age":30,"language":"Ruby"},
    {"firstName":"Jakub","lastName":"I.","country":"Slovakia","continent":"Europe","age":28,"language":"Java"},
    {"firstName":"Marija","lastName":"U.","country":"Republic of Macedonia","continent":"Europe","age":42,"language":"JavaScript"},
    {"firstName":"Maia","lastName":"S.","country":"Tahiti","continent":"Oceania","age":28,"language":"Clojure"},
    {"firstName":"Krishna","lastName":"G.","country":"Nepal","continent":"Asia","age":22,"language":"Java"},
    {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
    {"firstName":"Oliver","lastName":"Q.","country":"Australia","continent":"Oceania","age":19,"language":"PHP"},
    {"firstName":"Mariam","lastName":"B.","country":"Egypt","continent":"Africa","age":89,"language":"Python"},
    {"firstName":"Agustín","lastName":"M.","country":"Chile","continent":"Americas","age":37,"language":"C"},
    {"firstName":"Shufen","lastName":"L.","country":"Taiwan","continent":"Asia","age":35,"language":"PHP"},
    {"firstName":"Gabriel","lastName":"X.","country":"Monaco","continent":"Europe","age":29,"language":"PHP"},
    {"firstName":"Joshua","lastName":"O.","country":"Isle of Man","continent":"Europe","age":39,"language":"Clojure"},
    {"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},
    {"firstName":"Odval","lastName":"F.","country":"Mongolia","continent":"Asia","age":38,"language":"Python"},
    {"firstName":"Mohamed","lastName":"F.","country":"Morocco","continent":"Africa","age":40,"language":"Ruby"},
    {"firstName":"Emma","lastName":"Z.","country":"Netherlands","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Anna","lastName":"R.","country":"Liechtenstein","continent":"Europe","age":32,"language":"JavaScript"},
    {"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
    {"firstName":"Mohammad","lastName":"N.","country":"United Arab Emirates","continent":"Asia","age":39,"language":"C"},
    {"firstName":"Stevenson","lastName":"O.","country":"Haiti","continent":"Americas","age":22,"language":"Ruby"},
    {"firstName":"Luka","lastName":"J.","country":"Slovenia","continent":"Europe","age":29,"language":"Clojure"},
    {"firstName":"Ellen","lastName":"E.","country":"Finland","continent":"Europe","age":55,"language":"Ruby"},
    {"firstName":"Sebastian","lastName":"W.","country":"Venezuela","continent":"Americas","age":28,"language":"Python"},
    {"firstName":"Sofia","lastName":"W.","country":"Moldova","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Althea","lastName":"I.","country":"Philippines","continent":"Asia","age":31,"language":"Python"},
    {"firstName":"Sofija","lastName":"Q.","country":"Latvia","continent":"Europe","age":29,"language":"Ruby"},
    {"firstName":"Noa","lastName":"A.","country":"Israel","continent":"Asia","age":40,"language":"Ruby"},
    {"firstName":"Noel","lastName":"O.","country":"Albania","continent":"Europe","age":23,"language":"Python"},
    {"firstName":"Madison","lastName":"U.","country":"United States","continent":"Americas","age":32,"language":"Ruby"},
    {"firstName":"Hugo","lastName":"K.","country":"Spain","continent":"Europe","age":39,"language":"Python"},
    {"firstName":"Nareh","lastName":"Q.","country":"Armenia","continent":"Europe","age":30,"language":"Clojure"},
    {"firstName":"Yusuf","lastName":"N.","country":"Turkey","continent":"Europe","age":22,"language":"Python"},
    {"firstName":"Sofia","lastName":"A.","country":"Denmark","continent":"Europe","age":19,"language":"Python"},
    {"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":89,"language":"JavaScript"},
    {"firstName":"Margret","lastName":"M.","country":"Iceland","continent":"Europe","age":28,"language":"Java"},
    {"firstName":"Oliver","lastName":"P.","country":"Wales","continent":"Europe","age":29,"language":"JavaScript"},
    {"firstName":"Viktoria","lastName":"W.","country":"Bulgaria","continent":"Europe","age":28,"language":"PHP"},
    {"firstName":"Jing","lastName":"X.","country":"China","continent":"Asia","age":39,"language":"Ruby"},
    {"firstName":"Precious","lastName":"G.","country":"South Africa","continent":"Africa","age":22,"language":"JavaScript"},
    {"firstName":"Chloe","lastName":"K.","country":"Guernsey","continent":"Europe","age":28,"language":"Ruby"},
    {"firstName":"Mia","lastName":"H.","country":"Germany","continent":"Europe","age":39,"language":"Ruby"}]));


