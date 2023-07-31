'use strict';

const body = document.querySelector('body');
const input = document.createElement('input');
const inputText = document.createElement('p');

body.append(input, inputText);


input.addEventListener('change', e => {
  setTimeout(() => {
    inputText.textContent = e.target.value;
    input.value = '';
  }, 300);
});







