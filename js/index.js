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
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
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
  const keyboardContainer = document.createElement('div');

  textarea.rows = 10;
  textarea.cols = 100;

  keyboardContainer.innerHTML = createKey();
  keyboardContainer.className = 'keyboard';

  main.appendChild(textarea);
  main.appendChild(keyboardContainer);

  return main;
}

document.onkeydown = function (event) {
  console.log(event);
  keyboardEng.push(event.key);
  console.log(keyboardEng);
};

function createKey() {
  let key = '';

  console.log(keyboardEng[0]);

  for (let i = 0; i < keyboardEng.length; i++) {
    key += '<div class="key"> ' + keyboardEng[i] + '</div>';
  }

  return key;
}
