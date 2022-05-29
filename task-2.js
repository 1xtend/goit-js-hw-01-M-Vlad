'use strict';

const total = 100;
const ordered = 50;
// const ordered = prompt('Введіть кількість товару');

if (ordered > total) {
  console.log('На складі недостатньо товарів!');
} else {
  console.log("Замовлення оформлено, з вами зв'яжеться менеджер");
}
