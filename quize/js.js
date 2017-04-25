/**
 * Created by SEREGAVIKA on 22.04.2017.
 */

// Сначала создадим форму генерации вопросов

var divMain = document.createElement('div');
divMain.setAttribute('id', 'main');
//divMain.innerHTML = 'Опрос';
document.body.appendChild(divMain);

// Создаим окно генерации вопроса
var formWindowSetQuestion = document.createElement('form');  // В этой форме будут: вопрос, выбор (один вариант ответа или несколько) и варианты ответа
    formWindowSetQuestion.setAttribute('id', 'WindowSetQuestion');
    formWindowSetQuestion.innerHTML = 'Enter the question';

    divMain.appendChild(formWindowSetQuestion);



var textQuestion = document.createElement('textarea');  //Поле для ввода вопроса
textQuestion.setAttribute('id', 'textQuestion');


 var radioQuestionType = document.createElement('input');  // Кнопка для выбора одного варианта
radioQuestionType.setAttribute('type', 'radio');
radioQuestionType.setAttribute('name', 'radioORcheckbox');
radioQuestionType.setAttribute('value','OneChoice');

var textRadioOneChoice = document.createTextNode('One choice');

var divOneChoice = document.createElement('div');
divOneChoice.setAttribute('id', 'divOneChoice');



var checkboxQuestionType = document.createElement('input'); // Кнопка для выбора нескольких вариантов
checkboxQuestionType.setAttribute('type', 'radio');
checkboxQuestionType.setAttribute('name', 'radioORcheckbox');
checkboxQuestionType.setAttribute('value','SeveralChoices');

var textRadioSeveralChoices = document.createTextNode('Several Choices');

var divSeveralChoices = document.createElement('div');
divSeveralChoices.setAttribute('id', 'divSeveralChoices');


formWindowSetQuestion.appendChild(textQuestion);

formWindowSetQuestion.appendChild(divOneChoice);
divOneChoice.appendChild(radioQuestionType);
divOneChoice.appendChild(textRadioOneChoice);

formWindowSetQuestion.appendChild(divSeveralChoices);
divSeveralChoices.appendChild(checkboxQuestionType);
divSeveralChoices.appendChild(textRadioSeveralChoices);


// Напишем две div-ки, которые будут отображатся по одной в зависимости от переключения кнопок 'One choice' и 'Several Choices'
var divVariantsOneChoice = document.createElement('div'); // div-ка для вариантов с одним правильным
divVariantsOneChoice.classList.add('variants');
divVariantsOneChoice.innerHTML = 'Here it will be one true variant';


var divVariantsSeveralChoices = document.createElement('div'); // div-ка для вариантов с несколькими правильными
divVariantsSeveralChoices.classList.add('variants');
divVariantsSeveralChoices.innerHTML = 'Here it will be maybe several true variants';


radioQuestionType.addEventListener('click', setDivOfOneChoice);
checkboxQuestionType.addEventListener('click', setDivOfSeveralChoice);


function setDivOfOneChoice(){ // эта функция будет показывать div-ку с одним правильным вариантом
    formWindowSetQuestion.appendChild(divVariantsOneChoice);
    formWindowSetQuestion.removeChild(divVariantsSeveralChoices);
}
function setDivOfSeveralChoice(){ // эта функция будет показывать div-ку с несколькими правильным вариантами
    formWindowSetQuestion.removeChild(divVariantsOneChoice);
    formWindowSetQuestion.appendChild(divVariantsSeveralChoices);
}


var divFieldVariants = document.createElement('div'); // div-ка, в которой будут все варианты ответа

var variant = document.createElement('input'); // строка с вариантом
variant.setAttribute('id', 'trueVariant');
variant.setAttribute('type', 'text');

var buttonEndQuestion = document.createElement('input'); // Эта кнопка заканчивает формирование вопроса и отправляет его в список
buttonEndQuestion.setAttribute('id', 'buttonEndQuestion');
buttonEndQuestion.setAttribute('type', 'button');
buttonEndQuestion.setAttribute('value', 'Next question');
buttonEndQuestion.style.marginLeft = '60px';
buttonEndQuestion.style.marginTop = '10px';

var buttonOK = document.createElement('input'); // Кнопка OK будет создавать новую строку с вариантом
buttonOK.setAttribute('id', 'buttonOK');
buttonOK.setAttribute('value', 'OK');
buttonOK.setAttribute('type', 'button');


divFieldVariants.appendChild(variant);
divFieldVariants.appendChild(buttonOK);
divVariantsOneChoice.appendChild(divFieldVariants);
divVariantsOneChoice.appendChild(buttonEndQuestion);


// Функция при нажатии на кнопку OK добавляет снизу новую строку (максимум 10)
divVariantsOneChoice.addEventListener('click', addVariant);

function addVariant(event) {
    if (divVariantsOneChoice.children.length > 10) return;

    var target = event.target;
    if (target.id == 'buttonOK') {
        var newVariant = document.createElement('input'); //  новая строка с вариантом
        newVariant.setAttribute('type', 'text');

        var newButtonOK = document.createElement('input'); //  новая кнопка OK
        newButtonOK.setAttribute('id', 'buttonOK');
        newButtonOK.setAttribute('value', 'OK');
        newButtonOK.setAttribute('type', 'button');
        //newButtonOK.addEventListener('click', addVariant);


        var newDivFieldVariants = document.createElement('div');

        newDivFieldVariants.appendChild(newVariant);
        newDivFieldVariants.appendChild(newButtonOK);
        divVariantsOneChoice.insertBefore(newDivFieldVariants, buttonEndQuestion);
    }
}

// Зададим действие для кнопки окончания формирования текущего вопроса
buttonEndQuestion.addEventListener('click', setQuestionOnBoard);

function setQuestionOnBoard(event) {  // Функция добавляет при клике на кнопку Next Question вопрос с вариантами на доску

    var arrVariants = [];
    var target = event.target; // кнопка Next question
    var parent = target.parentElement;
     for (var i=0;i<parent.children.length-1;i++) {
         arrVariants.push(parent.children[i].children[0])
     }
    shuffle(arrVariants);  // перетасовываем массив вариантов

    var liQuestion = document.createElement('li');  // Очередной вопрос
    var pTextQuestion = document.createElement('p'); //  Текст вопроса
    var ulVariants = document.createElement('ul');  // Неупорядоченный список вариантов

    pTextQuestion.innerHTML = textQuestion.value;
    for (var j=0;j<arrVariants.length;j++) {
        var liVariant = document.createElement('li');
        liVariant.innerHTML = arrVariants[j].value;
        ulVariants.appendChild(liVariant);
    }
    liQuestion.appendChild(pTextQuestion);
    liQuestion.appendChild(ulVariants);

    olQuestions.appendChild(liQuestion);
}

// div-ка для получившихся вопросов и вариантами
var divQuestions = document.createElement('div'); // div-ка с вопросами
divQuestions.setAttribute('id', 'question');
divMain.insertBefore(divQuestions, formWindowSetQuestion);

var olQuestions = document.createElement('ol');  // Упорядоченный список вопросов
divQuestions.appendChild(olQuestions);







// Функция SHUFFLE перетасовывает массив
 function shuffle(arr) {
 // console.log(arr);
 // Для начала определим два произвольных элемента в массиве
 // Все это будет в цикле из arr.length посторений
 for (var i=0;i<arr.length;i++) {
 var i1 = Math.floor(Math.random() * arr.length);
 var i2 = Math.floor(Math.random() * arr.length);
 // console.log(i1, i2);
 if (i1 == arr.length) i1--;
 if (i2 == arr.length) i2--;
 var q = arr[i1];
 arr[i1] = arr[i2];
 arr[i2] = q;
 }
 return arr
 }











