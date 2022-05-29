'use strict';

const credits = 23580;
const pricePerDroid = 3000;

let numOfDroids = +prompt('Введіть кількість дроїдів, які хочете купити');

if (numOfDroids === 0) {
  console.log('Скасовано користувачем!');
} else {
  const totalPrice = numOfDroids * pricePerDroid;

  if (totalPrice > credits) {
    console.log('Недостатньо коштів на рахунку!');
  } else {
    const balance = credits - totalPrice;

    console.log(
      `Ви купили ${numOfDroids} дроїдів, на рахунку залишилося ${balance} кредитів.`
    );
  }
}
