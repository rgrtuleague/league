/**
 * Created by SEREGAVIKA on 22.04.2017.
 */

// Сначала создадим форму генерации вопросов

var divMain = document.createElement('div');
divMain.setAttribute('id', 'main');
divMain.innerHTML = 'Опрос';
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
buttonOK.addEventListener('click', addVariant);

function addVariant() {
    if (divVariantsOneChoice.children.length > 10) return;
        var newVariant = divFieldVariants.cloneNode(true); // Делаем клон div-ки с полем ввода варианта и кнопкой ОК
        newVariant.children[0].removeAttribute('id');    // Удаляем id верного варианта
    newVariant.children[1].setAttribute('value', 'OK');  // текущий последний вариант всегда будет кнопкой OK

    this.removeEventListener('click', addVariant);
    newVariant.children[0].value = '';
    newVariant.children[1].addEventListener('click', addVariant);
    divVariantsOneChoice.insertBefore(newVariant, buttonEndQuestion);
    newVariant.previousElementSibling.children[1].setAttribute('value', 'Delete');
    newVariant.previousElementSibling.children[1].classList.add('delete');
}


// С помощью делегирования повесим на предок кнопок DELETE обработчик
divVariantsOneChoice.addEventListener('click', deleteVariant);

function deleteVariant(event) {
    var target = event.target;
    if (target.className == 'delete') { // надо исправить баг: скласс DELETE нужно присвоить ПОСЛЕ того как нажали OK
        console.log('yeah BITCH!!');
    }
}










