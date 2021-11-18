const resault = function(CombatIndex,MagicIndex,StealthIndex) {
  const messageResault = document.querySelector('.combat');

  switch (true) {
    case (CombatIndex>6 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>-1 && StealthIndex<4):
      messageResault.textContent = 'Воин';
      break;
    case (CombatIndex>-1 && CombatIndex<4 && MagicIndex>6 && StealthIndex>-1 && StealthIndex<4):
      messageResault.textContent = 'Маг';
      break;
    case (CombatIndex>-1 && CombatIndex<4 && MagicIndex>-1 && MagicIndex<4 && StealthIndex>6):
      messageResault.textContent = 'Вор';
      break;
    case (CombatIndex  ===  6 && MagicIndex === 4 && StealthIndex === 0):
      messageResault.textContent = 'Рыцарь';
      break;
    case (CombatIndex === 6 && MagicIndex === 3 && StealthIndex === 1):
      messageResault.textContent = 'Варвар';
      break;
    case (CombatIndex === 6 && MagicIndex === 2 && StealthIndex === 2):
      messageResault.textContent = 'Рыцарь';
      break;
    case (CombatIndex === 6 && MagicIndex === 1 && StealthIndex === 3):
      messageResault.textContent = 'Паладин';
      break;
    case (CombatIndex === 6 && MagicIndex === 0 && StealthIndex === 4):
      messageResault.textContent = 'Рыцарь';
      break;
    case (CombatIndex === 5 && MagicIndex === 5 && StealthIndex === 0):
      messageResault.textContent = 'Лучник';
      break;
    case (CombatIndex === 5 && MagicIndex === 4 && StealthIndex === 1):
      messageResault.textContent = 'Лучник';
      break;
    case (CombatIndex === 5 && MagicIndex === 3 && StealthIndex === 2):
      messageResault.textContent = 'Лучник';
      break;
    case (CombatIndex === 5 && MagicIndex === 2 && StealthIndex === 3):
      messageResault.textContent = 'Разведчик';
      break;
    case (CombatIndex === 5 && MagicIndex === 1 && StealthIndex === 4):
      messageResault.textContent = 'Лучник';
      break;
    case (CombatIndex === 5 && MagicIndex === 0 && StealthIndex === 5):
      messageResault.textContent = 'Лучник';
      break;
    case (CombatIndex === 4 && MagicIndex === 6 && StealthIndex === 0):
      messageResault.textContent = 'Целитель';
      break;
    case (CombatIndex === 4 && MagicIndex>-1 && MagicIndex<6 && StealthIndex>-1 && StealthIndex<7):
      messageResault.textContent = 'Жулик';
      break;
    case (CombatIndex === 3 && MagicIndex === 6 && StealthIndex === 1):
      messageResault.textContent = 'Целитель';
      break;
    case (CombatIndex === 3 && MagicIndex === 5 && StealthIndex === 2):
      messageResault.textContent = 'Инквизитор';
      break;
    case (CombatIndex === 3 && MagicIndex === 4 && StealthIndex === 3):
      messageResault.textContent = 'Воин Слова';
      break;
    case (CombatIndex === 3 && MagicIndex === 3 && StealthIndex === 4):
      messageResault.textContent = 'Бард';
      break;
    case (CombatIndex === 3 && MagicIndex === 2 && StealthIndex === 5):
      messageResault.textContent = 'Пилигрим';
      break;
    case (CombatIndex === 3 && MagicIndex === 1 && StealthIndex === 6):
      messageResault.textContent = 'Шпион';
      break;
    case (CombatIndex === 2 && MagicIndex === 6 && StealthIndex === 2):
      messageResault.textContent = 'Чародей';
      break;
    case (CombatIndex === 2 && MagicIndex === 5 && StealthIndex === 3):
      messageResault.textContent = 'Инквизитор';
      break;
    case (CombatIndex === 2 && MagicIndex === 4 && StealthIndex === 4):
      messageResault.textContent = 'Воин Слова';
      break;
    case (CombatIndex === 2 && MagicIndex === 3 && StealthIndex === 5):
      messageResault.textContent = 'Монах';
      break;
    case (CombatIndex === 2 && MagicIndex === 2 && StealthIndex === 6):
      messageResault.textContent = 'Акробат';
      break;
    case (CombatIndex === 1 && MagicIndex === 6 && StealthIndex === 3):
      messageResault.textContent = 'Боевой маг';
      break;
    case (CombatIndex === 1 && MagicIndex === 5 && StealthIndex === 4):
      messageResault.textContent = 'Инквизитор';
      break;
    case (CombatIndex === 1 && MagicIndex === 4 && StealthIndex === 5):
      messageResault.textContent = 'Воин Слова';
      break;
    case (CombatIndex === 1 && MagicIndex === 3 && StealthIndex === 6):
      messageResault.textContent = 'Ассассин';
      break;
    case (CombatIndex === 0 && MagicIndex === 6 && StealthIndex === 4):
      messageResault.textContent = 'Боевой маг';
      break;
    case (CombatIndex === 0 && MagicIndex === 5 && StealthIndex === 5):
      messageResault.textContent = 'Инквизитор';
      break;
    case (CombatIndex === 0 && MagicIndex === 4 && StealthIndex === 6):
      messageResault.textContent = 'Меч ночи';
      break;
    default:
      messageResault.textContent = 'что-то сломалось';
      //eslint-disable-next-line
      alert( "что-то сломалось" );
  }
};

const getRndInteger = function(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
};

export {resault,getRndInteger};
