'use strict';

let message = prompt('Введіть пароль');
const ADMIN_PASSWORD = 'jqueryismyjam';

if (message === ADMIN_PASSWORD) {
  alert('Ласкаво просимо!');
} else if (message === null) {
  alert('Скасовано користувачем!');
} else {
  alert('Доступ заборонений, невірний пароль!');
}

console.log(message);
