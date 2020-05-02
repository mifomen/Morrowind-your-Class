
var resault = function(Ci,Mi,Si) {

  switch (Ci,Mi,Si) {
    case (Ci>6 && Mi>-1 && Mi<4 && Si>-1 && Si<4):
     document.querySelector('.combat').textContent = 'Воин';
    break;
    case (Ci>-1 && Ci<4 && Mi>6 && Si>-1 && Si<4):
    document.querySelector('.combat').textContent = 'Маг';
       break;
    case (Ci>-1 && Ci<4 && Mi>-1 && Mi<4 && Si>6):
    document.querySelector('.combat').textContent = 'Вор';
    break;
    case (Ci==6 && Mi==4 && Si==0):
    document.querySelector('.combat').textContent = 'Рыцарь';
    break;
    case (Ci==6 && Mi==3 && Si==1):
    document.querySelector('.combat').textContent = 'Варвар';
    break;
    case (Ci==6 && Mi==2 && Si==2):
    document.querySelector('.combat').textContent = 'Рыцарь';
    break;
    case (Ci==6 && Mi==1 && Si==3):
    document.querySelector('.combat').textContent = 'Паладин';
    break;
    case (Ci==6 && Mi==0 && Si==4):
    document.querySelector('.combat').textContent = 'Рыцарь';
    break;
    case (Ci==5 && Mi==5 && Si==0):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (Ci==5 && Mi==4 && Si==1):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (Ci==5 && Mi==3 && Si==2):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (Ci==5 && Mi==2 && Si==3):
    document.querySelector('.combat').textContent = 'Разведчик';
    break;
    case (Ci==5 && Mi==1 && Si==4):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (Ci==5 && Mi==0 && Si==5):
    document.querySelector('.combat').textContent = 'Лучник';
    break;
    case (Ci==4 && Mi==6 && Si==0):
    document.querySelector('.combat').textContent = 'Целитель';
    break;
    case (Ci==4 && Mi>-1 && Mi<6 && Si>-1 && Si<7):
    document.querySelector('.combat').textContent = 'Жулик';
    break;
    case (Ci==3 && Mi==6 && Si==1):
    document.querySelector('.combat').textContent = 'Целитель';
    break;
    case (Ci==3 && Mi==5 && Si==2):
    document.querySelector('.combat').textContent = 'Инквизитор';
    break;
    case (Ci==3 && Mi==4 && Si==3):
    document.querySelector('.combat').textContent = 'Воин Слова';
    break;
    case (Ci==3 && Mi==3 && Si==4):
    document.querySelector('.combat').textContent = 'Бард';
    break;
    case (Ci==3 && Mi==2 && Si==5):
    document.querySelector('.combat').textContent = 'Пилигрим';
    break;
    case (Ci==3 && Mi==1 && Si==6):
    document.querySelector('.combat').textContent = 'Шпион';
    break;
    case (Ci==2 && Mi==6 && Si==2):
    document.querySelector('.combat').textContent = 'Чародей';
    break;
    case (Ci==2 && Mi==5 && Si==3):
    document.querySelector('.combat').textContent = 'Инквизитор';
    break;
    case (Ci==2 && Mi==4 && Si==4):
    document.querySelector('.combat').textContent = 'Воин Слова';
    break;
    case (Ci==2 && Mi==3 && Si==5):
    document.querySelector('.combat').textContent = 'Монах';
    break;
    case (Ci==2 && Mi==2 && Si==6):
    document.querySelector('.combat').textContent = 'Акробат';
    break;
    case (Ci==1 && Mi==6 && Si==3):
    document.querySelector('.combat').textContent = 'Боевой маг';
    break;
    case (Ci==1 && Mi==5 && Si==4):
    document.querySelector('.combat').textContent = 'Инквизитор';
    break;
    case (Ci==1 && Mi==4 && Si==5):
    document.querySelector('.combat').textContent = 'Воин Слова';
    break;
    case (Ci==1 && Mi==3 && Si==6):
    document.querySelector('.combat').textContent = 'Ассассин';
    break;
    case (Ci==0 && Mi==6 && Si==4):
    document.querySelector('.combat').textContent = 'Боевой маг';
    break;
    case (Ci==0 && Mi==5 && Si==5):
    document.querySelector('.combat').textContent = 'Инквизитор';
    break;
    case (Ci==0 && Mi==4 && Si==6):
    document.querySelector('.combat').textContent = 'Меч ночи';
    break;
    default:
      document.querySelector('.combat').textContent = 'что-то сломалось';
    alert( "что-то сломалось" );
  }

} 