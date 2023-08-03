'use strict';

const body = document.querySelector('body');
const input = document.createElement('input');
const inputText = document.createElement('p');

body.append(input, inputText);


const debounce = (callback, delay) => {
  let time;
  return function (...arg) {
    clearTimeout(time);
    time = setTimeout(() => {
      callback.apply(this, arg);
    }, delay);
  };
};

let keyInput = (e) => {
  inputText.textContent = e.target.value;
}

keyInput = debounce(keyInput, 500);

input.addEventListener('keyup', keyInput);







