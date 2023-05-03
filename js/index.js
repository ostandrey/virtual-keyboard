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

  textarea.rows = 10;
  textarea.cols = 100;
  textarea.id = 'key_input';

  main.className = 'main';

  main.appendChild(textarea);
  main.appendChild(createKeyboard());

  return main;
}

// document.onkeydown = function (event) {
//   console.log(event);
//   keyboardEng2.push(event.code);
//   console.log(keyboardEng2);
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

  console.log();

  return key;
}

document.onkeydown = function (event) {
  const textarea = document.querySelector('#key_input');
  const keyboard = document.querySelector('#keyboard');

  document.querySelectorAll('#keyboard .key').forEach((key) => {
    key.classList.remove('active');
  });
  document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.add('active');

  if (event.code === 'Backspace') {
    textarea.value = textarea.value.slice(0, -1);
  } else if (event.code === 'Tab') {
    event.preventDefault();
    textarea.value += '\t';
  } else if (event.code === 'CapsLock') {
    document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.toggle('active');
    console.log(
      document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.toggle('active'),
    );
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
};

document.onkeyup = function (event) {
  document.querySelector(`#keyboard .key[data="${event.code}"]`).classList.remove('active');
};

// document.querySelectorAll('#keyboard .key').forEach((key) => {
//   key.addEventListener('click', () => {
//     document.querySelectorAll('#keyboard .key').forEach((key) => {
//       key.classList.remove('active');
//     });
//     let code = document.getAttribute('data');
//     this.classList.add('active');
//     console.log(code), once;
//   });
//   // el.onclick = function (event) {
//   //   document.querySelectorAll('#keyboard .key').forEach((el) => {
//   //     el.classList.remove('active');
//   //   });
//   //   let code = this.getAttribute('data');
//   //   this.classList.add('active');
//   //   console.log(code);
//   // };

//   // el.mouseup = function (event) {
//   //   document.querySelectorAll('#keyboard .key').forEach((el) => {
//   //     el.classList.remove('active');
//   //   });
//   //   // let code = this.getAttribute('data');
//   //   // this.classList.remove('active');
//   //   // console.log(code);
//   // };
// });
