
var resault = function(CombatIndex,MagicIndex,StealthIndex) {

  switch (true) {
    case (CombatIndex>6 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>-1 && StealthIndex<4):
      document.querySelector('.combat').textContent = 'Воин';
      break;
    case (CombatIndex>-1 && Ci<4 && MagicIndex>6 && StealthIndex>-1 && StealthIndex<4):
      document.querySelector('.combat').textContent = 'Маг';
      break;
    case (CombatIndex>-1 && Ci<4 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>6):
      document.querySelector('.combat').textContent = 'Вор';
      break;
    case (CombatIndex==6 && MagicIndex==4 && StealthIndex==0):
      document.querySelector('.combat').textContent = 'Рыцарь';
      break;
    case (CombatIndex==6 && MagicIndex==3 && StealthIndex==1):
    document.querySelector('.combat').textContent = 'Варвар';
    break;
    case (CombatIndex==6 && MagicIndex==2 && StealthIndex==2):
    document.querySelector('.combat').textContent = 'Рыцарь';
    break;
    case (CombatIndex==6 && MagicIndex==1 && StealthIndex==3):
    document.querySelector('.combat').textContent = 'Паладин';
    break;
    case (CombatIndex==6 && MagicIndex==0 && StealthIndex==4):
    document.querySelector('.combat').textContent = 'Рыцарь';
    break;
    case (CombatIndex==5 && MagicIndex==5 && StealthIndex==0):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (CombatIndex==5 && MagicIndex==4 && StealthIndex==1):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (CombatIndex==5 && MagicIndex==3 && StealthIndex==2):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (CombatIndex==5 && MagicIndex==2 && StealthIndex==3):
    document.querySelector('.combat').textContent = 'Разведчик';
    break;
    case (CombatIndex==5 && MagicIndex==1 && StealthIndex==4):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (CombatIndex==5 && MagicIndex==0 && StealthIndex==5):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (CombatIndex==4 && MagicIndex==6 && StealthIndex==0):
    document.querySelector('.combat').textContent = 'Целитель';
    break;
    case (CombatIndex==4 && MagicIndex>-1 && MagicIndex<6 && StealthIndex>-1 && StealthIndex<7):
    document.querySelector('.combat').textContent = 'Жулик';
    break;
    case (CombatIndex==3 && MagicIndex==6 && StealthIndex==1):
    document.querySelector('.combat').textContent = 'Целитель';
    break;
    case (CombatIndex==3 && MagicIndex==5 && StealthIndex==2):
    document.querySelector('.combat').textContent = 'Инквизитор';
    break;
    case (CombatIndex==3 && MagicIndex==4 && StealthIndex==3):
    document.querySelector('.combat').textContent = 'Воин Слова';
    break;
    case (CombatIndex==3 && MagicIndex==3 && StealthIndex==4):
    document.querySelector('.combat').textContent = 'Бард';
    break;
    case (CombatIndex==3 && MagicIndex==2 && StealthIndex==5):
    document.querySelector('.combat').textContent = 'Пилигрим';
    break;
    case (CombatIndex==3 && MagicIndex==1 && StealthIndex==6):
    document.querySelector('.combat').textContent = 'Шпион';
    break;
    case (CombatIndex==2 && MagicIndex==6 && StealthIndex==2):
    document.querySelector('.combat').textContent = 'Чародей';
    break;
    case (CombatIndex==2 && MagicIndex==5 && StealthIndex==3):
    document.querySelector('.combat').textContent = 'Инквизитор';
    break;
    case (CombatIndex==2 && MagicIndex==4 && StealthIndex==4):
    document.querySelector('.combat').textContent = 'Воин Слова';
    break;
    case (CombatIndex==2 && MagicIndex==3 && StealthIndex==5):
    document.querySelector('.combat').textContent = 'Монах';
    break;
    case (CombatIndex==2 && MagicIndex==2 && StealthIndex==6):
    document.querySelector('.combat').textContent = 'Акробат';
    break;
    case (CombatIndex==1 && MagicIndex==6 && StealthIndex==3):
    document.querySelector('.combat').textContent = 'Боевой маг';
    break;
    case (CombatIndex==1 && MagicIndex==5 && StealthIndex==4):
    document.querySelector('.combat').textContent = 'Инквизитор';
    break;
    case (CombatIndex==1 && MagicIndex==4 && StealthIndex==5):
    document.querySelector('.combat').textContent = 'Воин Слова';
    break;
    case (CombatIndex==1 && MagicIndex==3 && StealthIndex==6):
    document.querySelector('.combat').textContent = 'Ассассин';
    break;
    case (CombatIndex==0 && MagicIndex==6 && StealthIndex==4):
    document.querySelector('.combat').textContent = 'Боевой маг';
    break;
    case (CombatIndex==0 && MagicIndex==5 && StealthIndex==5):
      document.querySelector('.combat').textContent = 'Инквизитор';
      break;
    case (CombatIndex==0 && MagicIndex==4 && StealthIndex==6):
      document.querySelector('.combat').textContent = 'Меч ночи';
      break;
    default:
      document.querySelector('.combat').textContent = 'что-то сломалось';
      alert( "что-то сломалось" );
  }

}

export {resault};
