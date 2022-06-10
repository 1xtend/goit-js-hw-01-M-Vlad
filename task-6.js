'use strict';

let total = 0;

let input;

do {
  input = prompt('Введіть число');

  if (isNaN(input)) {
    alert('Це не число, спробуйте ще раз');
    continue;
  }

  total += Number(input);
} while (input !== null);

alert(`Загальна сума рядків дорівнює ${total}`);
