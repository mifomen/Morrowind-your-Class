import {className} from './data.js';
import {arrayQuestionsRusLng,arrayQuestionsEngLng} from './question-array.js';
import {resault,getRndInteger} from './utils.js';

const body = document.body;
const child=4;
let Language=true;

const test = function () { //eslint-disable-line
  return console.log('C=' + CombatIndex + ' M=' + MagicIndex + ' S=' + StealthIndex) //eslint-disable-line
};

let CombatIndex = 0;
let MagicIndex = 0;
let StealthIndex = 0;

const Combat = function () {
  CombatIndex++;
};
const Magic = function () {
  MagicIndex++;
};
const Stealth = function () {
  StealthIndex++;
};

const translate = function(rusWord) {
  return className[rusWord];
};
const tran = function() {
  if (Language) {
    document.querySelector('.combat').textContent = translate(document.querySelector('.combat').textContent,className);
    document.querySelector('.resault').textContent='AMAZING YOU ARE';
    document.querySelector('.PS').textContent='PRESS TAB ON SCREEN FOR RESTART';
  }
};

const CreateQuestion = function (Text,Answer1,Answer2,Answer3) {
  const NewDiv = document.createElement('div');
  NewDiv.classList='hidden';
  const NewP = document.createElement('p');
  NewP.classList='wd-90';
  NewDiv.appendChild(NewP);
  NewP.innerHTML=Text;

  const Create = function (AnswerOne,SummaPlus) {
    const newLink = document.createElement('a');
    newLink.href='#';
    newLink.textContent=AnswerOne;
    newLink.onclick = function (evt) {
      evt.preventDefault();
      arr[N-1].classList.remove('showing');
      arr[N].classList.add('showing');
      N++;
      if (SummaPlus === 'MagicIndex') {Magic();} else {
        if (SummaPlus === 'CombatIndex') {Combat();} else {
          if (SummaPlus === 'StealthIndex') {Stealth();}
        } }
      if  (CombatIndex + MagicIndex + StealthIndex === 10) {
        console.log(`CombatIndex + MagicIndex + StealthIndex ${CombatIndex} ${MagicIndex} ${StealthIndex})`);//eslint-disable-line
        resault(CombatIndex,MagicIndex,StealthIndex);
        tran();
      }
    };
    NewDiv.appendChild(newLink);
  };

  let RandomAnswer1 = getRndInteger(0,3);
  let RandomAnswer2 = getRndInteger(0,2);
  if (RandomAnswer1===0) {
    Create(Answer1,'CombatIndex');
    if (RandomAnswer2===1) {
      Create(Answer2,'MagicIndex');
      Create(Answer3,'StealthIndex');
    } else {
      Create(Answer3,'StealthIndex');
      Create(Answer2,'MagicIndex');
    }
  }

  if (RandomAnswer1===2) {
    Create(Answer3,'StealthIndex');
    RandomAnswer2=getRndInteger(0,2);

    if (RandomAnswer2===1) {
      Create(Answer1,'CombatIndex');
      Create(Answer2,'MagicIndex');
    } else {
      Create(Answer2,'MagicIndex');
      Create(Answer1,'CombatIndex');
    }
  }

  if (RandomAnswer1===1) {
    Create(Answer2,'MagicIndex');
    RandomAnswer2=getRndInteger(0,2);

    if (RandomAnswer2===1) {
      Create(Answer1,'CombatIndex');
      Create(Answer3,'StealthIndex');
    } else {
      Create(Answer3,'StealthIndex');
      Create(Answer1,'CombatIndex');
    }
  }

  body.insertBefore(NewDiv,body.children[child+1]);
};


let arr = document.getElementsByTagName('div');
let N=2;

document.querySelector('.russian-button').addEventListener('click', (evt) => {
  evt.preventDefault();
  Language=false;
  for( let Index=9; Index>-1; Index--) {
    CreateQuestion(arrayQuestionsRusLng[Index].Number,arrayQuestionsRusLng[Index].Question1,arrayQuestionsRusLng[Index].Question2,arrayQuestionsRusLng[Index].Question3);
  }
  const links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      arr[N-1].classList.remove('showing');
      arr[N].classList.add('showing');
    });
  }

  const NewDiv = document.createElement('div');
  const urlImage = 'img/background-image.jpg';
  NewDiv.style.backgroundImage=`background-image: url(${urlImage})`;
  NewDiv.classList='hidden russian-slide';
  const H1 =document.createElement('h1');
  H1.classList='visually-hidden';
  H1.textContent='Morrowind';
  NewDiv.appendChild(H1);
  const SPAN = document.createElement('span');
  SPAN.classList='title__img';
  NewDiv.appendChild(SPAN);
  const H2 = document.createElement('h2');
  H2.textContent='Опросник класса';
  NewDiv.appendChild(H2);
  const newP = document.createElement('p');
  newP.classList='wd-80';
  newP.textContent='Один из способов выбрать класс персонажа при старте новой игры заключается в ответе на опрос, который проводит Сокуциус Эргала. Вам будет предложено десять вопросов с тремя вариантами ответа на каждый из них. В зависимости от выбранных вариантов, вам будет предложен класс, который наилучшим образом соответствует вашим ответам. Вы всегда можете игнорировать его предложение и выбрать другой предопределенный класс, или создать свой собственный.';
  NewDiv.appendChild(newP);
  const newP2 = document.createElement('p');
  newP2.classList='wd-80';
  const questionTwo = 'Каждый вопрос содержит три варианта ответа, а каждый из ответов соотносится с одной из специализаций: Скрытность, Бой или Магия. Десять вопросов с тремя вариантами каждый означают, что есть шестьдесят шесть уникальные комбинации. Однако есть только двадцать один класс, так что некоторым классам соответствуют более одной комбинации. В частности, вор, воин или маг будет предлагаться для любой комбинации с не менее семи соответствующими ответами, относящимися к Скрытности, Бою или Магии';
  newP2.textContent=`${questionTwo}`;
  NewDiv.appendChild(newP2);
  const newLink = document.createElement('a');
  newLink.classList='start-russian';
  newLink.href='#';
  newLink.textContent='Начать';
  newLink.onclick = function (evt) {
    evt.preventDefault();
    document.querySelector('.russian-slide').classList.remove('showing');
    let arr = document.getElementsByTagName('div');
    arr[N-1].classList.remove('showing');
    arr[N].classList.add('showing');
  };
  NewDiv.appendChild(newLink);
  body.insertBefore(NewDiv,body.children[child+1]);
  document.querySelector('.first-slide').classList.remove('showing');
  document.querySelector('.russian-slide').classList.add('showing');
  document.querySelector('.last').classList.remove('showing');
});

document.querySelector('.english-button').addEventListener('click',(evt) => {
  evt.preventDefault();
  Language = true;
  for( let Index=9; Index>-1; Index--) {
    CreateQuestion(arrayQuestionsEngLng[Index].Number,arrayQuestionsEngLng[Index].Question1,arrayQuestionsEngLng[Index].Question2,arrayQuestionsEngLng[Index].Question3);
  }
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      arr[N-1].classList.remove('showing');
      arr[N].classList.add('showing');
    });
  }

  const arr = document.getElementsByTagName('div');
  const NewDiv = document.createElement('div');
  const urlImage = 'img/background-image.jpg';
  NewDiv.style.backgroundImage=`background-image:url(${urlImage})`;
  NewDiv.classList='hidden english-slide';
  const H1 =document.createElement('h1');
  H1.classList='visually-hidden';
  H1.textContent='Morrowind';
  NewDiv.appendChild(H1);
  const SPAN = document.createElement('span');
  SPAN.classList='title__img';
  NewDiv.appendChild(SPAN);
  const H2 = document.createElement('h2');
  H2.textContent='Class Quiz';
  NewDiv.appendChild(H2);
  const newP = document.createElement('p');
  newP.classList='wd-80';
  const questionOne = 'One of the ways to choose your character`s class at the start of the game is to allow Socucius Ergalla to give you a `personality test` of sorts. You will be asked ten multiple-choice questions, and he will suggest the class that best fits your answers. You can always ignore his suggestion and choose a different predefined class, or create your own';
  newP.textContent=`${questionOne}`;
  NewDiv.appendChild(newP);
  const newP2 = document.createElement('p');
  newP2.classList='wd-80';
  const questionTwo = 'Each question has three possible answers, and each answer indicates a preference for one of the specialties: Stealth, Combat, or Magic. Ten questions with three choices each means there are sixty-six unique combinations. There are only twenty-one different classes, so some classes correspond to more than one combination. In particular, the Thief, Warrior, or Mage will be suggested for any combination with at least seven matching answers of Stealth, Combat, or Magic, respectively';
  newP2.textContent=`${questionTwo}`;
  NewDiv.appendChild(newP2);
  const newLink = document.createElement('a');
  newLink.classList='start-english';
  newLink.href='#';

  newLink.textContent='Start';

  newLink.onclick = function (EVT) {
    EVT.preventDefault();
    document.querySelector('.english-slide').classList.remove('showing');
    const ARR = document.getElementsByTagName('div');
    ARR[N-1].classList.remove('showing');
    ARR[N].classList.add('showing');
  };
  NewDiv.appendChild(newLink);
  body.insertBefore(NewDiv,body.children[child+1]);
  document.querySelector('.first-slide').classList.remove('showing');
  document.querySelector('.english-slide').classList.add('showing');
  document.querySelector('.last').classList.remove('showing');
});

// slider on js
const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
const Interval = 8500; //time for change pictures
const slideInterval = setInterval(nextSlide,Interval);
// default time = 8500
function nextSlide() {
  slides[currentSlide].className = slides[currentSlide].className.replace(' showing-slide','');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className += ' showing-slide';
}

document.addEventListener('DOMContentLoaded', () => {
  const NewDiv = document.createElement('div');
  const urlImage = 'img/slide/slide3.jpg';
  NewDiv.style.backgroundImage= `background-image:url('${urlImage}');`;
  NewDiv.classList='last hidden center';
  const span =document.createElement('span');
  span.classList='resault';
  span.textContent='ВЕЛИКОЛЕПНО ВЫ';
  NewDiv.appendChild(span);
  const span2 =document.createElement('span2');
  span2.classList='combat resault red';
  span2.textContent='что-то пошло не так, напиши Mifomen';
  NewDiv.appendChild(span2);
  const span3 =document.createElement('span3');
  span3.classList='PS';
  span3.innerHTML='Tab по экрану <br>и начнешь заново';
  NewDiv.appendChild(span3);
  body.insertBefore(NewDiv,body.children[child+1]);
  document.querySelector('.last').addEventListener('click', () => {
    window.location.reload();
  });
});
