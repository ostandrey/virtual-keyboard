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

  main.className = 'main';

  main.appendChild(textarea);
  main.appendChild(createKeyboard());

  return main;
}

document.onkeydown = function (event) {
  console.log(event);
  keyboardEng.push(event.key);
  console.log(keyboardEng);
};

function createKeyboard() {
  const keyboardContainer = document.createElement('div');

  keyboardContainer.className = 'keyboard';
  keyboardContainer.id = 'keyboard';
  keyboardContainer.innerHTML = createKey();

  return keyboardContainer;
}

function createKey() {
  let key = '';

  console.log(keyboardEng[0]);

  for (let i = 0; i < keyboardEng.length; i++) {
    if (i === 14 || i === 29 || i === 42 || i === 55 || i === 64) {
      key += '<div class="clearfix"></div>';
    }

    // switch (keyboardEng[i]) {
    //   case 'Delete':
    //     key += '<div class="key">Del</div>';
    //     break;
    //   case 'Control':
    //     key += '<div class="key">Ctrl</div>';
    //     break;
    //   case 'ArrowUp':
    //     key += '<div class="key">&#x2191;</div>';
    //   default:
    //     key += '<div class="key">' + keyboardEng[i] + '</div>';
    // }

    if (keyboardEng[i] === 'Delete') {
      key += `<div class="key" data="${keyboardEng[i]}">Del</div>`;
    } else if (keyboardEng[i] === 'Control') {
      key += `<div class="key" data="${keyboardEng[i]}">Ctrl</div>`;
    } else if (keyboardEng[i] === 'ArrowUp') {
      key += `<div class="key" data="${keyboardEng[i]}">&#x2191;</div>`;
    } else if (keyboardEng[i] === 'ArrowLeft') {
      key += `<div class="key" data="${keyboardEng[i]}">&#x2190;</div>`;
    } else if (keyboardEng[i] === 'ArrowRight') {
      key += `<div class="key" data="${keyboardEng[i]}">&#x2192;</div>`;
    } else if (keyboardEng[i] === 'ArrowDown') {
      key += `<div class="key" data="${keyboardEng[i]}">&#x2193;</div>`;
    } else {
      key += `<div class="key" data="${keyboardEng[i]}">${keyboardEng[i]}</div>`;
    }
  }

  console.log();

  return key;
}

document.onkeydown = function (event) {
  document.querySelectorAll('#keyboard .key').forEach((el) => {
    el.classList.remove('active');
  });

  document.querySelector(`#keyboard .key[data="${event.key}"]`).classList.add('active');
};

document.onkeyup = function (event) {
  document.querySelector(`#keyboard .key[data="${event.key}"]`).classList.remove('active');
};
