const body = document.querySelector('body');

const keyboardEng = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '\\',
  'Delete',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'Shift',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  'ArrowUp',
  'Shift',
  'Control',
  'Meta',
  'Alt',
  ' ',
  'Alt',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'Control',
];

const keyboardUkr = [
  "'",
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ї',
  '\\',
  'Delete',
  'CapsLock',
  'ф',
  'і',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'є',
  'Enter',
  'Shift',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
  'Shift',
  'Control',
  'Meta',
  'Alt',
  ' ',
  'Control',
  'AltGraph',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'Control',
];

const keyboardEng2 = [
  'Backquote',
  'Digit1',
  'Digit2',
  'Digit3',
  'Digit4',
  'Digit5',
  'Digit6',
  'Digit7',
  'Digit8',
  'Digit9',
  'Digit0',
  'Minus',
  'Equal',
  'Backspace',
  'Tab',
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyR',
  'KeyT',
  'KeyY',
  'KeyU',
  'KeyI',
  'KeyO',
  'KeyP',
  'BracketLeft',
  'BracketRight',
  'Backslash',
  'Delete',
  'CapsLock',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyF',
  'KeyG',
  'KeyH',
  'KeyJ',
  'KeyK',
  'KeyL',
  'Semicolon',
  'Quote',
  'Enter',
  'ShiftLeft',
  'KeyZ',
  'KeyX',
  'KeyC',
  'KeyV',
  'KeyB',
  'KeyN',
  'KeyM',
  'Comma',
  'Period',
  'Slash',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Space',
  'AltRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'ControlRight',
];

function initComponents() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';

  wrapper.appendChild(createHeader());
  wrapper.appendChild(createMain());

  body.appendChild(wrapper);
  return body;
}

initComponents();

function createHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');

  title.innerText = 'Virtual keyboard';

  header.appendChild(title);

  return header;
}

function createMain() {
  const main = document.createElement('main');
  const textarea = document.createElement('textarea');
  // const additionalInfo = document.createElement('div');
  const description = document.createElement('p');
  const language = document.createElement('p');

  textarea.rows = 10;
  textarea.cols = 100;
  textarea.id = 'key_input';

  description.innerText = `Keyboard created in the ${getOs()} operating system`;
  language.innerText = `To switch the language combination: left ctrl + alt`;

  main.className = 'main';

  main.appendChild(textarea);
  main.appendChild(createKeyboard());
  main.appendChild(description);
  main.appendChild(language);

  return main;
}

function getOs() {
  let os = navigator.userAgent;
  let finalOs = '';
  if (os.search('Windows') !== -1) {
    finalOs = 'Windows';
  } else if (os.search('Mac') !== -1) {
    finalOs = 'MacOS';
  } else if (os.search('Linux') !== -1 && os.search('X11') !== -1) {
    finalOs = 'Linux';
  }

  return finalOs;
}

// document.onkeydown = function (event) {
//   console.log(event);
//   keyboardUkr.push(event.key);
//   console.log(keyboardUkr);
// };

function createKeyboard() {
  const keyboardContainer = document.createElement('div');

  keyboardContainer.className = 'keyboard';
  keyboardContainer.id = 'keyboard';
  keyboardContainer.innerHTML = createKey();

  return keyboardContainer;
}

function createKey() {
  let key = '';

  for (let i = 0; i < keyboardEng2.length; i++) {
    if (i === 14 || i === 29 || i === 42 || i === 55 || i === 64) {
      key += '<div class="clearfix"></div>';
    }

    // switch (keyboardEng2[i]) {
    //   case 'Delete':
    //     key += '<div class="key">Del</div>';
    //     break;
    //   case 'Control':
    //     key += '<div class="key">Ctrl</div>';
    //     break;
    //   case 'ArrowUp':
    //     key += '<div class="key">&#x2191;</div>';
    //   default:
    //     key += '<div class="key">' + keyboardEng2[i] + '</div>';
    // }

    if (keyboardEng2[i] === 'Delete') {
      key += `<div class="key" data="${keyboardEng2[i]}">Del</div>`;
    } else if (keyboardEng2[i] === 'Control') {
      key += `<div class="key" data="${keyboardEng2[i]}">Ctrl</div>`;
    } else if (keyboardEng2[i] === 'ArrowUp') {
      key += `<div class="key" data="${keyboardEng2[i]}">▲</div>`;
    } else if (keyboardEng2[i] === 'ArrowLeft') {
      key += `<div class="key" data="${keyboardEng2[i]}">◄</div>`;
    } else if (keyboardEng2[i] === 'ArrowRight') {
      key += `<div class="key" data="${keyboardEng2[i]}">►</div>`;
    } else if (keyboardEng2[i] === 'ArrowDown') {
      key += `<div class="key" data="${keyboardEng2[i]}">▼</div>`;
    } else {
      key += `<div class="key" data="${keyboardEng2[i]}">${keyboardEng[i]}</div>`;
    }
  }

  return key;
}

document.onkeydown = function (event) {
  const textarea = document.querySelector('#key_input');
  const keyboard = document.querySelector('#keyboard');

  document.querySelectorAll('#keyboard .key').forEach((key) => {
    if (!key.getAttribute('data') === 'CapsLock') {
      key.classList.remove('active');
    }
  });

  if (event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  } else if (event.code === 'Tab') {
    event.preventDefault();
    textarea.value += '\t';
  } else if (event.code === 'CapsLock') {
    keyboard.classList.toggle('uppercase');
    textarea.value += '';
  } else if (
    event.code === 'ControlLeft' ||
    event.code === 'ControlRight' ||
    event.code === 'AltLeft' ||
    event.code === 'AltRight' ||
    event.code === 'ShiftLeft' ||
    event.code === 'ShiftRight' ||
    event.code === 'Delete' ||
    event.code === 'Meta'
  ) {
    event.preventDefault();
    textarea.value += '';
  } else if (event.code === 'Enter') {
    textarea.value += '\n';
  } else if (event.code === 'ArrowUp') {
    textarea.value += '▲';
  } else if (event.code === 'ArrowLeft') {
    textarea.value += '◄';
  } else if (event.code === 'ArrowRight') {
    textarea.value += '►';
  } else if (event.code === 'ArrowDown') {
    textarea.value += '▼';
  } else {
    textarea.value += event.key;
  }

  if (event.code === 'CapsLock') {
    document.querySelector(`#keyboard .key[data="CapsLock"]`).classList.toggle('active');
  } else {
    document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.add('active');
  }
};

document.onkeyup = function (event) {
  if (event.code === 'CapsLock') {
    return;
  }
  document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.remove('active');
};

document.querySelectorAll('#keyboard .key').forEach((el) => {
  const textarea = document.querySelector('#key_input');
  const keyboard = document.querySelector('#keyboard');

  el.onmousedown = function (event) {
    document.querySelectorAll('#keyboard .key').forEach((key) => {
      if (!key.getAttribute('data') === 'CapsLock') {
        key.classList.remove('active');
      }
    });

    let code = this.getAttribute('data');
    let keyName = this.innerText;

    if (code === 'Backspace') {
      textarea.value = textarea.value.slice(0, -1);
    } else if (code === 'Tab') {
      event.preventDefault();
      textarea.value += '\t';
    } else if (code === 'CapsLock') {
      keyboard.classList.toggle('uppercase');
      textarea.value += '';
    } else if (
      code === 'ControlLeft' ||
      code === 'ControlRight' ||
      code === 'AltLeft' ||
      code === 'AltRight' ||
      code === 'ShiftLeft' ||
      code === 'ShiftRight' ||
      code === 'Delete' ||
      code === 'Meta'
    ) {
      event.preventDefault();
      textarea.value += '';
    } else if (code === 'Enter') {
      textarea.value += '\n';
    } else if (code === 'ArrowUp') {
      textarea.value += '▲';
    } else if (code === 'ArrowLeft') {
      textarea.value += '◄';
    } else if (code === 'ArrowRight') {
      textarea.value += '►';
    } else if (code === 'ArrowDown') {
      textarea.value += '▼';
    } else {
      textarea.value += keyName;
    }

    if (event.code === 'CapsLock') {
      this.classList.toggle('active');
    } else {
      this.classList.add('active');
    }
  };
});

document.querySelectorAll('#keyboard .key').forEach((el) => {
  el.onmouseup = function (event) {
    document.querySelectorAll('#keyboard .key').forEach((key) => {
      if (event.code === 'CapsLock') {
        return;
      }
      key.classList.remove('active');
    });
  };
});
