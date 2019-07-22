'use strict'
// var elms = document.getElementsByTagName("*");
// var n = elms.length;
// for(var i = 0; i < n; i ++) {
//     if(window.getComputedStyle(elms[i]).cursor == "pointer") {
//         elms[i].style.cursor = "url(img/cursor.ico)";
//     }
// }
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.red').classList.remove('red')
});


var test = function () {
  return console.log('C=' + CombatIndex + ' M=' + MagicIndex + ' S=' + StealthIndex)
}
// console.log('work')
var CombatIndex=0
var MagicIndex=0
var StealthIndex=0


var Combat = function () {
  CombatIndex++
}
var Magic = function () {
  MagicIndex++
}
var Stealth = function () {
  StealthIndex++
}

var restart = function () {
  // console.log(arr)
  arr[N-1].classList.remove('showing')
  N=1
  arr[0].classList.add('showing')
  CombatIndex=0
  MagicIndex=0
  StealthIndex=0
}
var resault = function() {

  if (CombatIndex>6 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>-1 && StealthIndex<4) {
    document.querySelector('.combat').textContent = 'Воин';
  } else {
    if (CombatIndex>-1 && CombatIndex<4 && MagicIndex>6 && StealthIndex>-1 && StealthIndex<4) {
      document.querySelector('.combat').textContent = 'Маг';
    } else {
      if (CombatIndex>-1 && CombatIndex<4 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>6) {
        document.querySelector('.combat').textContent = 'Вор';
      } else {
        if (CombatIndex==6 && MagicIndex==4 && StealthIndex==0) {
          document.querySelector('.combat').textContent = 'Рыцарь';
        } else {
          if (CombatIndex==6 && MagicIndex==3 && StealthIndex==1) {
            document.querySelector('.combat').textContent = 'Варвар';
          } else {
            if (CombatIndex==6 && MagicIndex==2 && StealthIndex==2) {
              document.querySelector('.combat').textContent = 'Рыцарь';
            } else {
              if (CombatIndex==6 && MagicIndex==1 && StealthIndex==3) {
                document.querySelector('.combat').textContent = 'Паладин';
              } else {
                if (CombatIndex==6 && MagicIndex==0 && StealthIndex==4) {
                  document.querySelector('.combat').textContent = 'Рыцарь';
                } else {
                  if (CombatIndex==5 && MagicIndex==5 && StealthIndex==0) {
                    document.querySelector('.combat').textContent = 'Лучник';
                  } else {
                    if (CombatIndex==5 && MagicIndex==4 && StealthIndex==1) {
                      document.querySelector('.combat').textContent = 'Лучник';
                    } else {
                      if (CombatIndex==5 && MagicIndex==3 && StealthIndex==2) {
                        document.querySelector('.combat').textContent = 'Лучник';
                      } else {
                        if (CombatIndex==5 && MagicIndex==2 && StealthIndex==3) {
                          document.querySelector('.combat').textContent = 'Разведчик';
                        } else {
                          if (CombatIndex==5 && MagicIndex==1 && StealthIndex==4) {
                            document.querySelector('.combat').textContent = 'Лучник';
                          } else {
                            if (CombatIndex==5 && MagicIndex==0 && StealthIndex==5) {
                              document.querySelector('.combat').textContent = 'Лучник';
                            } else {
                              if (CombatIndex==4 && MagicIndex==6 && StealthIndex==0) {
                                document.querySelector('.combat').textContent = 'Целитель';
                              } else {
                                if (CombatIndex==4 && MagicIndex>-1 && MagicIndex<6 && StealthIndex>-1 && StealthIndex<7)  {
                                  document.querySelector('.combat').textContent = 'Жулик';
                                } else {
                                  if (CombatIndex==3 && MagicIndex==6 && StealthIndex==1) {
                                    document.querySelector('.combat').textContent = 'Целитель';
                                  } else {
                                   if (CombatIndex==3 && MagicIndex==5 && StealthIndex==2) {
                                    document.querySelector('.combat').textContent = 'Инквизитор';
                                  } else {
                                   if (CombatIndex==3 && MagicIndex==4 && StealthIndex==3) {
                                    document.querySelector('.combat').textContent = 'Воин Слова';
                                  } else {
                                   if (CombatIndex==3 && MagicIndex==3 && StealthIndex==4) {
                                    document.querySelector('.combat').textContent = 'Бард';
                                  } else {
                                   if (CombatIndex==3 && MagicIndex==2 && StealthIndex==5) {
                                    document.querySelector('.combat').textContent = 'Пилигрим';
                                  } else {
                                   if (CombatIndex==3 && MagicIndex==1 && StealthIndex==6) {
                                    document.querySelector('.combat').textContent = 'Шпион';
                                  } else {
                                   if (CombatIndex==2 && MagicIndex==6 && StealthIndex==2) {
                                    document.querySelector('.combat').textContent = 'Чародей';
                                  } else {
                                   if (CombatIndex==2 && MagicIndex==5 && StealthIndex==3) {
                                    document.querySelector('.combat').textContent = 'Инквизитор';
                                  } else {
                                   if (CombatIndex==2 && MagicIndex==4 && StealthIndex==4) {
                                    document.querySelector('.combat').textContent = 'Воин Слова';
                                  } else {
                                   if (CombatIndex==2 && MagicIndex==3 && StealthIndex==5) {
                                    document.querySelector('.combat').textContent = 'Монах';
                                  } else {
                                   if (CombatIndex==2 && MagicIndex==2 && StealthIndex==6) {
                                    document.querySelector('.combat').textContent = 'Акробат';
                                  } else {
                                   if (CombatIndex==1 && MagicIndex==6 && StealthIndex==3) {
                                    document.querySelector('.combat').textContent = 'Боевой маг';
                                  } else {
                                   if (CombatIndex==1 && MagicIndex==5 && StealthIndex==4) {
                                    document.querySelector('.combat').textContent = 'Инквизитор';
                                  } else {
                                   if (CombatIndex==1 && MagicIndex==4 && StealthIndex==5) {
                                    document.querySelector('.combat').textContent = 'Воин Слова';
                                  } else {
                                   if (CombatIndex==1 && MagicIndex==3 && StealthIndex==6) {
                                   document.querySelector('.combat').textContent = 'Ассассин';
                                   } else {
                                   if (CombatIndex==0 && MagicIndex==6 && StealthIndex==4) {
                                   document.querySelector('.combat').textContent = 'Боевой маг';
                                   } else {
                                   if (CombatIndex==0 && MagicIndex==5 && StealthIndex==5) {
                                   document.querySelector('.combat').textContent = 'Инквизитор';
                                   } else {
                                   if (CombatIndex==0 && MagicIndex==4 && StealthIndex==6) {
                                   document.querySelector('.combat').textContent = 'Меч ночи';
                                   } else {
                                   }
                                   }
                                   }
                                 }
                               }
                             }
                           }
                         }
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       }
     }
   }
 }
}
}
}
}
}
}
}
}
}
}
}
}
}
}

}


var ArrayOfQestion = [
{
  Number:'<strong>Вопрос 1:</strong>Вы натыкаетесь на странного зверя, который угодил лапой в капкан. Судя по тому, сколько крови он потерял, долго ему не протянуть.',
  Question1:'Вытаскиваете кинжал, чтобы милосердно прервать его мучения одним ударом?',
  Question2:'Используете растения, которые у вас есть, чтобы усыпить его?',
  Question3: 'Не вмешиваетесь в естественный ход событий, однако, используете эту ситуацию, чтобы изучить странное животное, которое видите первый раз в жизни?'
},
{
  Number:'<strong>Вопрос 2:</strong> Прекрасный летний день. Отец предлагает вам выбрать, какой работой по дому заняться.',
  Question1:'Работать с ним в кузнице, отливая железо для нового плуга?',
  Question2:'Собирать растения для матери, которая готовит обед?',
  Question3:'Пойти ловить рыбу с помощью сети и удочки?'
},
{
  Number:'<strong>Вопрос 3:</strong> Ваш двоюродный брат придумал для вас очень обидное прозвище, и, что еще хуже, он называет вас так перед вашими друзьями. Вы попросили его прекратить, но ему очень нравится видеть, как вы краснеете.',
  Question1:'Вы побьете своего брата и скажете ему, что если он еще раз назовет вас так, ему будет еще хуже.',
  Question2:'Вы придумаете историю, которая сделает ваше прозвище достойным, а не унизительным.',
  Question3:'Вы придумаете для брата еще более обидное прозвище и будете называть его так, пока он не поймет, что был не прав'
},
{
  Number:'<strong>Вопрос 4:</strong> В местной таверне активно обсуждают группу людей, которые называются \u0027Телепаты\u0027. Их наняли короли Города-Государства. Ходят слухи, что эти Телепаты могут читать мысли людей, и нужны для того, чтобы хозяева знали, говорят ли им правду.',
  Question1:'Это ужасно. Мысли человека - его личное дело, и даже у короля нет права вторгаться в сознание другого человека.',
  Question2:'Верным подданным Короля нечего бояться Телепатов. Необходимо уметь находить наемных убийц и шпионов, пока еще не поздно.',
  Question3:'В наши времена - это необходимое зло. Вы не обязаны быть в восторге от этой идеи, но у Телепатов есть явные преимущества во время войны, они нужны, чтобы отличать невинных от виновных.'
},
{
  Number:'<strong>Вопрос 5:</strong> Ваша мать посылает вас на рынок со списком того, что нужно купить. Купив все, вы обнаруживаете, что торговец случайно ошибся в вашу пользу, давая вам сдачу.',
  Question1:'Вы вернетесь в магазин и вернете ему деньги, объяснив, в чем дело?',
  Question2:'Вы решите потратить эти деньги во благо и купите что-то, что нужно вашей семье?',
  Question3:'Вы прикарманите лишние деньги, зная, что торговцы очень часто обсчитывают своих покупателей?'
},
{
  Number:'<strong>Вопрос 6:</strong> Вы были на рынке и увидели, как вор срезал кошелек у дворянина. Дворянин заметил это и позвал стражу. Пытаясь сбежать, вор роняет кошелек рядом с вами. Как ни странно, кажется, никто не замечает мешочка с деньгами у ваших ног.',
  Question1:'Вы поднимете кошелек и позовете стражу, зная, что благородному человеку полагается вернуть деньги их законному владельцу?',
  Question2:'Вы оставите кошелек на месте, решив, что лучше не вмешиваться?',
  Question3:'Вы поднимете кошелек и заберете его себе, зная, что эти деньги могут помочь вашей семье в трудные времена?'
},
{
  Number:'<strong>Вопрос 7:</strong> Ваш отец дает вам задание, которое вы ненавидите всей душой: почистить конюшню. Вооружившись вилами, вы идете туда и по дороге встречаете своего друга, который живет по соседству. Он предлагает вам сделать за вас эту работу в обмен на услугу в будущем на его усмотрение.',
  Question1:'Отказываетесь, зная, что ваш отец хочет, чтобы именно вы выполнили эту работу, и лучше не быть в долгу?',
  Question2:'Просите его помочь вам, зная, что два человека могут сделать все гораздо быстрее, и соглашаетесь помочь ему с одним заданием на его усмотрение?',
  Question3:'Принимаете его предложение, решив, что если конюшня будет вычищена, какая разница, кто это сделал?'
},
{
  Number:'<strong>Вопрос 8:</strong> Ваша мать просит вас починить печь. Пока вы работаете, горячая труба соскальзывает со своего места и падает на нее.',
  Question1:'Встаете между трубой и матерью?',
  Question2:'Хватаете горячую трубу и пытаетесь отбросить ее в сторону?',
  Question3:'Отталкиваете мать?'
},
{
  Number:'<strong>Вопрос 9:</strong> В городе пекарь дает вам сладкий рулет. Вы несете его в укромное место, чтобы съесть, но на вас налетает шайка из трех парней вашего возраста. Главарь шайки требует, чтобы вы отдали ему рулет, иначе они побьют вас и заберут лакомство сами.',
  Question1:'Кидаете рулет на землю, наступаете на него и готовитесь к драке?',
  Question2:'Без вопросов отдаете ему рулет, зная, что позже вы сможете привести с собой своих друзей и тогда он получит по заслугам?',
  Question3:'Делаете вид, что собираете отдать ему рулет, но в последний момент подкидываете его в воздух, надеясь, что это отвлечет их ровно настолько, чтобы вы успели ударить главаря?'
},
{
  Number:'<strong>Вопрос 10:</strong> Входя в город вы видите хорошо одетого человека, который убегает от толпы. Он просит вас о помощи. Толпа за его спиной, кажется, в ярости.',
  Question1:'Присоединяетесь к толпе, не вникая в подробности происходящего?',
  Question2:'Отходите в сторону, рассудив, что лучше не вмешиваться, пропускаете, и человека и толпу?',
  Question3:'Немедленно спешите на помощь человеку, не вникая в подробности происходящего?'
}
]





// var Memory=0;
var f1=0,f2=0,f3=0;
// console.log(getRndInteger(0,3))
var CombatIndex=0
var MagicIndex=0
var StealthIndex=0

var CreateQuestion = function (Text,Answer1,Answer2,Answer3) {
  var NewDiv = document.createElement('div');
  NewDiv.classList="hidden"
  var NewP = document.createElement('p')
  NewP.classList="wd-90"
  NewDiv.appendChild(NewP);
  NewP.innerHTML=Text

  var Create = function (AnswerOne,SummaPlus) {
   var NewLink = document.createElement('a')
   NewLink.href="#"
   NewLink.textContent=AnswerOne 
   NewLink.onclick = function (evt) {
     evt.preventDefault();
     arr[N-1].classList.remove('showing')
     arr[N].classList.add('showing')
     N++
     if (SummaPlus === 'MagicIndex') {Magic()} else {
       if (SummaPlus === 'CombatIndex') {Combat()} else {
        if (SummaPlus === 'StealthIndex') {Stealth()}
      } } 
    if  (CombatIndex + MagicIndex + StealthIndex === 10) {
      resault();
    }
  }
  NewDiv.appendChild(NewLink);
}

var getRndInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var RandomAnswer1 = getRndInteger(0,3) 
var RandomAnswer2 = getRndInteger(0,2) 
// console.log('RandomAnswer1= ' + RandomAnswer1 +  'RandomAnswer2= ' + RandomAnswer2)
if (RandomAnswer1===0) {
  Create(Answer1,'CombatIndex')

  if (RandomAnswer2===1) {
    Create(Answer2,'MagicIndex')
    Create(Answer3,'StealthIndex')
  } else {
    Create(Answer3,'StealthIndex')
    Create(Answer2,'MagicIndex')
  }
}
if (RandomAnswer1===2) {
  Create(Answer3,'StealthIndex')
  RandomAnswer2=getRndInteger(0,2)

  if (RandomAnswer2===1) {
    Create(Answer1,'CombatIndex')
    Create(Answer2,'MagicIndex')
  } else {
    Create(Answer2,'MagicIndex')
    Create(Answer1,'CombatIndex')
  }
}
if (RandomAnswer1===1) {
  Create(Answer2,'MagicIndex')
  RandomAnswer2=getRndInteger(0,2)

  if (RandomAnswer2===1) {
    Create(Answer1,'CombatIndex')
    Create(Answer3,'StealthIndex')
  } else {
    Create(Answer3,'StealthIndex')
    Create(Answer1,'CombatIndex')
  }
}


// Create(Answer1,'CombatIndex')
// Create(Answer2,'MagicIndex')
// Create(Answer3,'StealthIndex')


body.insertBefore(NewDiv,body.children[3]);

}



var arr = document.getElementsByTagName('div')
var N=1

var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();

    arr[N-1].classList.remove('showing')
    arr[N].classList.add('showing')
    N++

    document.querySelector('.combat').textContent = CombatIndex;


  })
};

document.addEventListener("DOMContentLoaded", function () {
  // document.querySelector('.red').classList.remove('red')
  // 
  for( var Index=9; Index>-1; Index--) {
    CreateQuestion(ArrayOfQestion[Index].Number,ArrayOfQestion[Index].Question1,ArrayOfQestion[Index].Question2,ArrayOfQestion[Index].Question3)
  }
  

});
// test()