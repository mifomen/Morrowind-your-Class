'use strict'
// var child=4
// var 1
var child=4
var Language=true
// var elms = document.getElementsByTagName("*");
// var n = elms.length;
// for(var i = 0; i < n; i ++) {
//     if(window.getComputedStyle(elms[i]).cursor == "pointer") {
//         elms[i].style.cursor = "url(img/cursor.ico)";
//     }
// }



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

// var restart = function () {
//   // console.log(arr)
//   N=1
//   arr[N-1].classList.remove('showing')

//   arr[0].classList.add('showing')
//   CombatIndex=0
//   MagicIndex=0
//   StealthIndex=0
// }
// 
var className = {
  'Воин':'Warrior',
  'Маг':'Mage',
  'Вор':'Thief',
  'Рыцарь':'Рыцарь',
  'Варвар':'Barbarian',
  'Паладин':'Crusader',
  'Разведчик':'Scout',
  'Лучник':'Archer',
  'Жулик':'Rogue',
  'Целитель':'Healer',
  'Бард':'Bard',
  'Пилигрим':'Pilgrim',
  'Шпион':'Agent',
  'Чародей':'Sorcerer',
  'Монах':'Monk',
  'Акробат':'Acrobat',
  'Воин Слова':'Spellsword',
  'Ассассин':'Assassin',
  'Боевой маг':'Battlemage',
  'Инквизитор':'Witchhunter',
  'Меч ночи':'Nightblade'
};

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
  Number:'<strong>Вопрос 1</strong>Вы натыкаетесь на странного зверя, который угодил лапой в капкан. Судя по тому, сколько крови он потерял, долго ему не протянуть.',
  Question1:'Вытаскиваете кинжал, чтобы милосердно прервать его мучения одним ударом?',
  Question2:'Используете растения, которые у вас есть, чтобы усыпить его?',
  Question3: 'Не вмешиваетесь в естественный ход событий, однако, используете эту ситуацию, чтобы изучить странное животное, которое видите первый раз в жизни?'
},
{
  Number:'<strong>Вопрос 2</strong> Прекрасный летний день. Отец предлагает вам выбрать, какой работой по дому заняться.',
  Question1:'Работать с ним в кузнице, отливая железо для нового плуга?',
  Question2:'Собирать растения для матери, которая готовит обед?',
  Question3:'Пойти ловить рыбу с помощью сети и удочки?'
},
{
  Number:'<strong>Вопрос 3</strong> Ваш двоюродный брат придумал для вас очень обидное прозвище, и, что еще хуже, он называет вас так перед вашими друзьями. Вы попросили его прекратить, но ему очень нравится видеть, как вы краснеете.',
  Question1:'Вы побьете своего брата и скажете ему, что если он еще раз назовет вас так, ему будет еще хуже.',
  Question2:'Вы придумаете историю, которая сделает ваше прозвище достойным, а не унизительным.',
  Question3:'Вы придумаете для брата еще более обидное прозвище и будете называть его так, пока он не поймет, что был не прав'
},
{
  Number:'<strong>Вопрос 4</strong> В местной таверне активно обсуждают группу людей, которые называются &quot;Телепаты&quot;. Их наняли короли Города-Государства. Ходят слухи, что эти Телепаты могут читать мысли людей, и нужны для того, чтобы хозяева знали, говорят ли им правду.',
  Question1:'Это ужасно. Мысли человека - его личное дело, и даже у короля нет права вторгаться в сознание другого человека.',
  Question2:'Верным подданным Короля нечего бояться Телепатов. Необходимо уметь находить наемных убийц и шпионов, пока еще не поздно.',
  Question3:'В наши времена - это необходимое зло. Вы не обязаны быть в восторге от этой идеи, но у Телепатов есть явные преимущества во время войны, они нужны, чтобы отличать невинных от виновных.'
},
{
  Number:'<strong>Вопрос 5</strong> Ваша мать посылает вас на рынок со списком того, что нужно купить. Купив все, вы обнаруживаете, что торговец случайно ошибся в вашу пользу, давая вам сдачу.',
  Question1:'Вы вернетесь в магазин и вернете ему деньги, объяснив, в чем дело?',
  Question2:'Вы решите потратить эти деньги во благо и купите что-то, что нужно вашей семье?',
  Question3:'Вы прикарманите лишние деньги, зная, что торговцы очень часто обсчитывают своих покупателей?'
},
{
  Number:'<strong>Вопрос 6</strong> Вы были на рынке и увидели, как вор срезал кошелек у дворянина. Дворянин заметил это и позвал стражу. Пытаясь сбежать, вор роняет кошелек рядом с вами. Как ни странно, кажется, никто не замечает мешочка с деньгами у ваших ног.',
  Question1:'Вы поднимете кошелек и позовете стражу, зная, что благородному человеку полагается вернуть деньги их законному владельцу?',
  Question2:'Вы оставите кошелек на месте, решив, что лучше не вмешиваться?',
  Question3:'Вы поднимете кошелек и заберете его себе, зная, что эти деньги могут помочь вашей семье в трудные времена?'
},
{
  Number:'<strong>Вопрос 7</strong> Ваш отец дает вам задание, которое вы ненавидите всей душой: почистить конюшню. Вооружившись вилами, вы идете туда и по дороге встречаете своего друга, который живет по соседству. Он предлагает вам сделать за вас эту работу в обмен на услугу в будущем на его усмотрение.',
  Question1:'Отказываетесь, зная, что ваш отец хочет, чтобы именно вы выполнили эту работу, и лучше не быть в долгу?',
  Question2:'Просите его помочь вам, зная, что два человека могут сделать все гораздо быстрее, и соглашаетесь помочь ему с одним заданием на его усмотрение?',
  Question3:'Принимаете его предложение, решив, что если конюшня будет вычищена, какая разница, кто это сделал?'
},
{
  Number:'<strong>Вопрос 8</strong> Ваша мать просит вас починить печь. Пока вы работаете, горячая труба соскальзывает со своего места и падает на нее.',
  Question1:'Встаете между трубой и матерью?',
  Question2:'Хватаете горячую трубу и пытаетесь отбросить ее в сторону?',
  Question3:'Отталкиваете мать?'
},
{
  Number:'<strong>Вопрос 9</strong> В городе пекарь дает вам сладкий рулет. Вы несете его в укромное место, чтобы съесть, но на вас налетает шайка из трех парней вашего возраста. Главарь шайки требует, чтобы вы отдали ему рулет, иначе они побьют вас и заберут лакомство сами.',
  Question1:'Кидаете рулет на землю, наступаете на него и готовитесь к драке?',
  Question2:'Без вопросов отдаете ему рулет, зная, что позже вы сможете привести с собой своих друзей и тогда он получит по заслугам?',
  Question3:'Делаете вид, что собираете отдать ему рулет, но в последний момент подкидываете его в воздух, надеясь, что это отвлечет их ровно настолько, чтобы вы успели ударить главаря?'
},
{
  Number:'<strong>Вопрос 10</strong> Входя в город вы видите хорошо одетого человека, который убегает от толпы. Он просит вас о помощи. Толпа за его спиной, кажется, в ярости.',
  Question1:'Присоединяетесь к толпе, не вникая в подробности происходящего?',
  Question2:'Отходите в сторону, рассудив, что лучше не вмешиваться, пропускаете, и человека и толпу?',
  Question3:'Немедленно спешите на помощь человеку, не вникая в подробности происходящего?'
}
]

var ArrayOfQestionEng = [

{
  Number:"<strong>Question 1</strong> On a clear day you chance upon a strange animal, its leg trapped in a hunter's clawsnare. Judging from the bleeding it will not survive long",
  Question1:'Draw your dagger, mercifully ending its life with a single thrust',
  Question2:'Use herbs from your pack to put it to sleep',
  Question3:'Do not interfere in the natural evolution of events, but rather take the opportunity to learn more about a strange animal you have never seen before'
},

{
  Number:'Question 2: One Summer afternoon your father gives you a choice of chores.',
  Question1:'Work in the forge with him casting iron for a new plow',
  Question2:'Gather herbs for your mother who is preparing dinner',
  Question3:'Go catch fish at the stream using a net and line'
},
{
  Number:'Question 3: Your cousin has given you a very embarrassing nickname and, even worse, likes to call you it in front of your friends. You asked him to stop, but he finds it very amusing to watch you blush',
  Question1:'Beat up your cousin, then tell him that if he ever calls you that nickname again, you will bloody him worse than this time',
  Question2:'Make up a story that makes your nickname a badge of honor instead of something humiliating',
  Question3:'Make up an even more embarrassing nickname for him and use it constantly until he learns his lesson'
},
{
  Number:"Question 4: There is a lot of heated discussion at the local tavern over a grouped of people called 'Telepaths'. They have been hired by certain City-State kings. Rumor has it these Telepaths read a person's mind and tell their lord whether a follower is telling the truth or not",
  Question1:"This is a terrible practice. A person's thoughts are his own and no one, not even a king, has the right to make such an invasion into another human's mind",
  Question2:'Loyal followers to the king have nothing to fear from a Telepath. It is important to have a method of finding assassins and spies before it is too late',
  Question3:'In these times, it is a necessary evil. Although you do not necessarily like the idea, a Telepath could have certain advantages during a time of war or in finding someone innocent of a crime'
},
{
  Number:"Question 5: Your mother sends you to the market with a list of goods to buy. After you finish you find that by mistake a shopkeeper has given you too much money back in exchange for one of the items.",
  Question1:"Return to the store and give the shopkeeper his hard-earned money, explaining to him the mistake",
  Question2:"Decide to put the extra money to good use and purchase items that would help your family",
  Question3:"Pocket the extra money, knowing that shopkeepers in general tend to overcharge customers anyway"
},
{
  Number:"Question 6: While in the market place you witness a thief cut a purse from a noble. Even as he does so, the noble notices and calls for the city guards. In his haste to get away, the thief drops the purse near you. Surprisingly no one seems to notice the bag of coins at your feet.",
  Question1:"Pick up the bag and signal to the guard, knowing that the only honorable thing to do is return the money to its rightful owner",
  Question2:"Leave the bag there, knowing that it is better not to get involved",
  Question3:"Pick up the bag and pocket it, knowing that the extra windfall will help your family in times of trouble"
},
{
  Number:"Question 7: Your father sends you on a task which you loathe, cleaning the stables. On the way there, pitchfork in hand, you run into your friend from the homestead near your own. He offers to do it for you, in return for a future favor of his choosing",
  Question1:"Decline his offer, knowing that your father expects you to do the work, and it is better not to be in debt",
  Question2:"Ask him to help you, knowing that two people can do the job faster than one, and agree to help him with one task of his choosing in the future",
  Question3:"Accept his offer, reasoning that as long as the stables are cleaned, it matters not who does the cleaning"
},
{
  Number:"Question 8: Your mother asks you to help fix the stove. While you are working, a very hot pipe slips its mooring and falls towards her",
  Question1:"Position yourself between the pipe and your mother",
  Question2:"Grab the hot pipe and try to push it away",
  Question3:"Push your mother out of the way"
},
{
  Number:"Question 9: While in town the baker gives you a sweetroll. Delighted, you take it into an alley to enjoy only to be intercepted by a gang of three other kids your age. The leader demands the sweetroll, or else he and his friends will beat you and take it",
  Question1:"Drop the sweetroll and step on it, then get ready for the fight",
  Question2:"Give him the sweetroll now without argument, knowing that later this afternoon you will have all your friends with you and can come and take whatever he owes you",
  Question3:"Act like you're going to give him the sweetroll, but at the last minute throw it in the air, hoping that they'll pay attention to it long enough for you to get a shot in on the leader"
},
{
  Number:"Question 10: Entering town you find that you are witness to a very well-dressed man running from a crowd. He screams to you for help. The crowd behind him seem very angry",
  Question1:"Rush to the town's aid immediately, despite your lack of knowledge of the circumstances",
  Question2:"Stand aside and allow the man and the mob to pass, realizing it is probably best not to get involved",
  Question3:"Rush to the man's aid immediately, despite your lack of knowledge of the circumstances"
}
]



// var Memory=0;
// var f1=0,f2=0,f3=0;
// console.log(getRndInteger(0,3))
  var translate = function(rusWord) {
    return className[rusWord];
  }
  // console.log(translate('Паладин',className))
  var tran = function() { 
      if (Language) {
        document.querySelector('.combat').textContent = translate(document.querySelector('.combat').textContent,className)

          document.querySelector('.resault').textContent='AMAZING YOU ARE';
          document.querySelector('.PS').textContent='PRESS TAB ON SCREEN FOR RESTART';
      }
}

// var ch=12
var CreateQuestion = function (Text,Answer1,Answer2,Answer3) {
  var NewDiv = document.createElement('div');
  // let FullPath = 'url(' + '../img/slide/slide' + ch + '.jpg' + ')';
  // ch--
  // NewDiv.style.backgroundImage = FullPath;
  // NewDiv.style.backgroundImage="url('../img/slide/slide1.jpg')";
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
     // console.log('N= ' + N)
     // test()
     N++
     if (SummaPlus === 'MagicIndex') {Magic()} else {
       if (SummaPlus === 'CombatIndex') {Combat()} else {
        if (SummaPlus === 'StealthIndex') {Stealth()}
      } } 
    if  (CombatIndex + MagicIndex + StealthIndex === 10) {
      resault();
tran();

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


body.insertBefore(NewDiv,body.children[child+1]);

}





var arr = document.getElementsByTagName('div')
var N=3
//var = 3 producti
// var links = document.getElementsByTagName('a');
// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener('click',function (evt) {
//     evt.preventDefault();
//     arr[N-1].classList.remove('showing')
//     arr[N].classList.add('showing')
//     N++
//     document.querySelector('.combat').textContent = CombatIndex;
//   })
// }

// document.addEventListener("DOMContentLoaded", function () {

// });




document.querySelector('.russian-button').addEventListener('click',function(){

  Language=false
  // console.log('Language= ' + Language)
  for( var Index=9; Index>-1; Index--) {
    CreateQuestion(ArrayOfQestion[Index].Number,ArrayOfQestion[Index].Question1,ArrayOfQestion[Index].Question2,ArrayOfQestion[Index].Question3)
  }
  /* amazing last slide*/
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click',function (evt) {
      evt.preventDefault();
      arr[N-1].classList.remove('showing')
      // console.log('N= '+ N)
      arr[N].classList.add('showing')
      // N++
      // console.log('N= '+ N)
      // document.querySelector('.combat').textContent = CombatIndex;
    })
  }

  // var arr = document.getElementsByTagName('div')
  var NewDiv = document.createElement('div');
  NewDiv.style.backgroundImage="background-image:url('img/background-image.jpg')";
  NewDiv.classList="hidden russian-slide"
  var H1 =document.createElement('h1') 
  H1.classList="visually-hidden"
  H1.textContent="Morrowind"
  NewDiv.appendChild(H1);
  var SPAN = document.createElement('span')
  SPAN.classList="title__img"
  NewDiv.appendChild(SPAN);
  var H2 = document.createElement('h2')
  H2.textContent="Опросник класса"
  NewDiv.appendChild(H2);
  var newP = document.createElement('p')
  newP.classList="wd-80"
  newP.textContent="Один из способов выбрать класс персонажа при старте новой игры заключается в ответе на опрос, который проводит Сокуциус Эргала. Вам будет предложено десять вопросов с тремя вариантами ответа на каждый из них. В зависимости от выбранных вариантов, вам будет предложен класс, который наилучшим образом соответствует вашим ответам. Вы всегда можете игнорировать его предложение и выбрать другой предопределенный класс, или создать свой собственный."
  NewDiv.appendChild(newP);
  var NewLink = document.createElement('a')
  NewLink.classList="start-russian"
  NewLink.href="#"
  NewLink.textContent="Начать"
  NewLink.onclick = function (evt) {
   evt.preventDefault();
   document.querySelector('.russian-slide').classList.remove('showing')
     // console.log('N= ' + N)
    // document.querySelector('.first-slide').classList.remove('showing')
    
    //  arr[N-1].classList.remove('showing')
    // arr[N].classList.add('showing')
    // N++

    var arr = document.getElementsByTagName('div')

    arr[N-1].classList.remove('showing')
    console.log('N= '+ N)
    arr[N].classList.add('showing')
    console.log('N= '+ N)
    //    arr[child].classList.remove('showing')
    // arr[child+1].classList.add('showing')
  }
  NewDiv.appendChild(NewLink);
  body.insertBefore(NewDiv,body.children[child+1]);
  document.querySelector('.first-slide').classList.remove('showing')
  document.querySelector('.russian-slide').classList.add('showing')
  document.querySelector('.last').classList.remove('showing')
})
document.querySelector('.english-button').addEventListener('click',function(){
    // console.log('N= ' + N)
  Language=true
  // console.log('Language= ' + Language)
    for( var Index=9; Index>-1; Index--) {
    CreateQuestion(ArrayOfQestionEng[Index].Number,ArrayOfQestionEng[Index].Question1,ArrayOfQestionEng[Index].Question2,ArrayOfQestionEng[Index].Question3)
  }
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click',function (evt) {
      evt.preventDefault();
      arr[N-1].classList.remove('showing')
      arr[N].classList.add('showing')
      // N++
      // document.querySelector('.combat').textContent = CombatIndex;
    })
  }

  var arr = document.getElementsByTagName('div')
  var NewDiv = document.createElement('div');
  NewDiv.style.backgroundImage="background-image:url('img/background-image.jpg')";
  NewDiv.classList="hidden english-slide"
  var H1 =document.createElement('h1') 
  H1.classList="visually-hidden"
  H1.textContent="Morrowind"
  NewDiv.appendChild(H1);
  var SPAN = document.createElement('span')
  SPAN.classList="title__img"
  NewDiv.appendChild(SPAN);
  var H2 = document.createElement('h2')
  H2.textContent="Class Quiz"
  NewDiv.appendChild(H2);
  var newP = document.createElement('p')
  newP.classList="wd-80"
  newP.textContent="One of the ways to choose your character's class at the start of the game is to allow Socucius Ergalla to give you a 'personality test' of sorts. You will be asked ten multiple-choice questions, and he will suggest the class that best fits your answers. You can always ignore his suggestion and choose a different predefined class, or create your own"
  NewDiv.appendChild(newP);
  var NewLink = document.createElement('a')
  NewLink.classList="start-english"
  NewLink.href="#"

  NewLink.textContent="Start"

  NewLink.onclick = function (evt) {
   evt.preventDefault();

   document.querySelector('.english-slide').classList.remove('showing')
   evt.preventDefault();
     // console.log('N= ' + N)
    // document.querySelector('.first-slide').classList.remove('showing')
    
    //  arr[N-1].classList.remove('showing')
    // arr[N].classList.add('showing')
    // N++

    var arr = document.getElementsByTagName('div')
    arr[2].classList.remove('showing')
    arr[3].classList.add('showing')
  }
  NewDiv.appendChild(NewLink);
  body.insertBefore(NewDiv,body.children[child+1]);
  document.querySelector('.first-slide').classList.remove('showing')
  document.querySelector('.english-slide').classList.add('showing')
  document.querySelector('.last').classList.remove('showing')
})




// document.querySelector('.start-english').addEventListener('click',function(){
//    document.querySelector('.english-slide').classList.remove('showing')

// })
// test()
// 
// 
// slider on js
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var Interval = 8500; //time for change pictures
var slideInterval = setInterval(nextSlide,Interval);
// default time = 8500
function nextSlide() {
  slides[currentSlide].className = slides[currentSlide].className.replace(' showing-slide','');
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className += ' showing-slide'; 
}

document.addEventListener("DOMContentLoaded", function () {
  // document.querySelector('.red').classList.remove('red')
  var NewDiv = document.createElement('div');
  NewDiv.style.backgroundImage="background-image:url('img/slide/slide3.jpg')";
  NewDiv.classList="last hidden center"
  // NewDiv.onclick= function() {}

  var span =document.createElement('span') 
  span.classList='resault'
  span.textContent='ВЕЛИКОЛЕПНО ВЫ'
  NewDiv.appendChild(span);
  var span =document.createElement('span') 
  span.classList='combat resault red'
  span.textContent='что-то пошло не так, напиши Mifomen'
  NewDiv.appendChild(span);
  var span =document.createElement('span') 
  span.classList='PS'
  span.innerHTML='Tab по экрану <br>и начнешь заново'
  NewDiv.appendChild(span);
  body.insertBefore(NewDiv,body.children[child]);

  document.querySelector('.last').addEventListener('click',function(){
    window.location.reload()
  })
});