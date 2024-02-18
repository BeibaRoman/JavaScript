/*! Compendium practice */

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// ! cycle for of

/* const clients = ["Mango", "Ajax", "Poly"];

for (const client of clients) {
  console.log(client);
}

const string = "javascript";

for (const character of string) {
  console.log(character);
} */
// ! break

/* const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "poly";
let message;

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }

  message = "Клієнт з таким ім'ям відсутній в базі даних!";
}

console.log(message);
 */

/* const clients = ["Mango", "Poly", "Ajax"];
const clientNameToFind = "Ajax";
let message = "Клієнт з таким ім'ям відсутній в базі даних!";

for (const client of clients) {
  if (client === clientNameToFind) {
    message = "Клієнт з таким ім'ям є в базі даних!";
    break;
  }
}

console.log(message); */

// ! continue

/* const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(`Число більше за ${threshold}: ${numbers[i]}`);
}
 */

//  !Methods of Array
/* method .split() */

/* const name = "Mango";

const nameArray = name.split("");
console.log(nameArray);

const message = "JavaScript - це цікаво";
const messageArray = message.split(" ");
console.log(messageArray);
 */

/* method .join() */

/* const words = ["JavaScript", "це", "цікаво"];
const wordsArray = words.join(" ");
console.log(wordsArray); */

/* method .indexOf() */
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.indexOf("Mango"));
// console.log(clients.indexOf("Pavlo"));

/* method .includes() */

/* const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log(clients.includes("Ajax"));
console.log(clients.includes("Max"));

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "cherry";

const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
}
 */

/* Method .push() */

/* const numbers = [];
numbers.push(1);
numbers.push(2);
numbers.push(3);

console.log(numbers);
 */

/* Method .pop() */
/* const numbers = [1, 2, 3, 4, 5];
console.log(numbers.pop());
console.log(numbers);
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers.pop());
console.log(numbers);
 */

// Method .unshift()

/* const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.unshift("Lemon", "Pineapple"));
console.log(fruits);
 */

// Method .shift()
/* const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());
fruits.shift();
fruits.shift();
fruits.shift();
console.log(fruits.shift());
console.log(fruits);
 */
/* Method slice() */

/* const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
const clientsCut = clients.slice(0, 3);
console.log(clientsCut);

const newArray = clients.slice();
console.log(newArray);

const clientsFirstCut = clients.slice(2);
console.log(clientsFirstCut);

const negativeValue = clients.slice(-3);
console.log(negativeValue);
 */

/* Method .splice()*/
// deleted
// const scores = [1, 2, 3, 4, 5];

// const deletedScores = scores.splice(0, 2);

// console.log(scores);
// console.log(deletedScores);

// add

/* const colors = ["red", "green", "blue"];
colors.splice(1, 0, "purple");
console.log(colors);

colors.splice(1, 0, "yellow", "pink");
console.log(colors);

// change
const languages = ["C", "C++", "Java", "JavaScript"];

languages.splice(1, 1, "Python");
console.log(languages);

languages.splice(2, 1, "C#", "Swift", "Go");
console.log(languages);
 */

// Method .concat()

/* const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allNewArrayWithFirstOld = oldClients.concat(newClients);
const allNewArrayWithFirstNew = newClients.concat(oldClients);
console.log(allNewArrayWithFirstOld);
console.log(allNewArrayWithFirstNew);

console.log(oldClients);
console.log(newClients);
 */

/* Practive from first video By Repeta */

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(friends[i]);
// }

// for (const friend of friends) {
//   console.log(friend);
// }

// Calculate the total amount of purchases

/* const carts = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];

let total = 0; */

/* for (let i = 0; i <= carts.length - 1; i += 1) {
  total += cart[i];
} */

// for (const cart of carts) {
//   total += cart;
// }

// console.log(total);

// ! add tax

/* for (let i = 0; i < carts.length; i += 1) {
  const totalWithTax = Math.round((carts[i] = carts[i] * 1.2));

  total += totalWithTax;
  console.log(totalWithTax);
}

console.log(total); */

// Write a script that calculates the sum of all even numbers in an array.

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

// let total = 0;

/* for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 === 0) {
    console.log(`Парне число ${numbers[i]}`);
    total += numbers[i];
  }
}
 */

/* for (const number of numbers) {
  if (number % 2 === 0) {
    total += number;
  }
} */

/* for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log(
      `This iteration should be skipped, the number is not even: ${number}`
    );
    continue;
  }

  console.log(`${number} - even number`);

  total += number;
}

console.log(`Total sum of even: ${total}`);
 */
// ? Exercise - 1
// ! Write a login search script
// - If there is no login, display the message 'User [login] not found.

//  - If a login is found, display the message 'User [login] found.

/* const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];

const loginToFind = "j4xth3m4n"; */

// let message = `User ${loginToFind} not found`;

/* for (let i = 0; i < logins.length; i += 1) {
  // console.log(logins[i]);
  let curentLogin = logins[i];

  if (curentLogin === loginToFind) {
    message = `User ${loginToFind} found`;
    break;
  }

  message = `User ${loginToFind} not found`;
} */

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `User ${loginToFind} found`;
//     break;
//   }
// }

/* let message = logins.includes(loginToFind)
  ? `User ${loginToFind} found`
  : `User ${loginToFind} not found`;

console.log(message);
 */

// ? Exercise - 2
/* Write a script to find the smallest number in an array,
provided that the numbers are unique (not repeated). */

/* const numbers = [51, 18, 13, 24, 7, 85, 19];

let smallestNum = numbers[0];
console.log(smallestNum);
for (const number of numbers) {
  if (number < smallestNum) {
    smallestNum = number;
  }
}
console.log(`smallestNumber: ${smallestNum}`);
 */

// ? Exercise - 3

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
/* let string = "";

for (const friend of friends) {
  // console.log(friend);
  string += friend + ",";
}

string = string.slice(0, string.length - 1);

console.log(string); */

// let string = friends.join(",");
// console.log(string);

// ? Exercise - 4
/* Write a script that reverses the case of each character in a string. For example, if the string is "JavaScript", then the output should be the string "jAVAsCRIPT". */

/* const string = "JavaScript";
const letters = string.split("");
console.log(letters);

let invertedString = ""; */

/* for (const letter of letters) {
  console.log(letter);

  if (letter === letter.toLowerCase()) {
    console.log(letter);
    invertedString += letter.toUpperCase();
  } else {
    invertedString += letter.toLowerCase();
  }

  const isEqual = letter === letter.toLowerCase();
  invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log(invertedString);
 */

// ? Exercise - 5

/* We make a URL from the title of the article (for example, dev.to) The title of the article consists only of letters and spaces. */

/* const title = "Top 10 benefits of React framework";

const slug = title.toLowerCase().split(" ").join("-");
console.log(slug); */

// ? Exercise - 6

/* Write a script that calculates the sum of the elements of two arrays. */

/* const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let total = 0;

const newArray = array1.concat(array2);
console.log(newArray);

for (const num of newArray) {
  total += num;
}

console.log(total);
 */

// ? Exercise - 7

/* We work with  collection of the card in Trello*/
// delate
// add
// change

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

/* const cardToRemove = "Карточка-2";
const indexCard = cards.indexOf(cardToRemove);
console.log(indexCard);

cards.splice(indexCard, 1);

console.log(cards);
 */
/* 
const cardToInsert = "Карточка-6";
const indexCard = 5;

cards.splice(indexCard, 0, cardToInsert);
console.log(cards);
 */
/* 
const cardToUpdate = "Карточка-2";
const index = cards.indexOf(cardToUpdate);

cards.splice(index, 1, "Карточка-9");

console.log(cards);

 */
// !Practice from secon lessson of first part second module
//* Example 8 - Базові операції з масивом

// Створіть масив genres з елементами «Jazz» та «Blues».
//1. Додайте «Рок-н-рол» до кінця.
//2. Виведіть у консоль перший елемент масиву.
//3. Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
//4. Видаліть перший елемент та виведіть його в консоль.
//5. Вставте «Country» та «Reggae» на початок масиву.

/* const genres = ["Jazz", "Blues"];
console.log(genres);

genres.push("Rock and Roll");

console.log("🚀 ~ log:", genres[0]);
console.log("🚀 ~ log:", genres[genres.length - 1]);
console.log("🚀 ~ console:", genres.shift());
console.log(genres.splice(0, 1)[0]);

genres.splice(0, 0, "Country", "Reggae");
genres.unshift("Country", "Reggae");

console.log(genres);
 */

//! ================================================

//* Example 9 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

/* const values = "8 3";

const valuesArray = values.split(" ");
console.log("🚀 ~ valuesArray:", valuesArray);

const a = valuesArray[0];
console.log("🚀 ~ a:", a);

const b = valuesArray[valuesArray.length - 1];
console.log("🚀 ~ b:", b);

const square = a * b;
console.log("🚀 ~ square:", square); */
//! ================================================

//* Example 10 - Перебір масиву

// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

/*
1: 🍎
2: 🍇
3: 🍑
*/

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i += 1) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }

// for (const i in fruits) {
//   console.log(`${Number(i) + 1}: ${fruits[i]}`);
// }

//* Example 11 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

/* const string = "Welcome to the future";

const strArray = string.split(" ");
console.log(strArray);

strArray.shift();
strArray.pop();
console.log("🚀 ~ strArray:", strArray);

const newStrArray = strArray.join(" ");
console.log("🚀 ~ newStrArray:", newStrArray);
 */

//! ================================================

//* Example 12 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = "Welcome to the future";

// const reversedString = string.split("").reverse().join("");
// console.log("🚀 ~ reversedString:", reversedString);
/*
1. створення масиву, який буде зберігати результат і накопичувати значення
2. зробити із строки масив і перебрати його задом наперед
3. пушити в масив результату поточний символ
4. робимо із масиву результату звичайну строку
*/

/* let newString = [];

const stringArray = string.split("");
console.log("🚀 ~ stringArray:", stringArray);

for (let i = stringArray.length - 1; i >= 0; i -= 1) {
  newString.push(stringArray[i]);
}

newString = newString.join("");

console.log("🚀 ~ newString:", newString); */

//! ================================================

//* Example 13 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

/*
1. запустити цикл, який буде проходитись по всім елементам(по індексам)
2. запутити вкладений цикл, який буде починатись з індексу на один більше від i
3. порівнюємо перші букви сусідніх елементів
    3.1. якщо буква зліва більша за букву справа, то міняємо елементи місцями
*/

/* const langs = ["python", "javascript", "c++", "haskel", "php", "ruby"];

for (let i = 0; i < langs.length - 1; i += 1) {
  console.log(`El: ${langs[i]} | i: ${i}`);

  for (let j = i + 1; j < langs.length; j += 1) {
    console.log(`\tEl: ${langs[j]} | j : ${j}`);

    if (langs[i][0] > langs[j][0]) {
      let temp = langs[i];
      langs[i] = langs[j];
      langs[j] = temp;
    }
  }
  console.log("\n");
}

console.log(langs);
 */

//! ================================================

//* Example 14 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

/* const numbers = [2, 17, 94, 1, 23, 37];

let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log("🚀 ~ smallestNumber:", smallestNumber);
 */

// Module 2 topic  function learn (){}

// function multiply() {
//   console.log("Це лог на момент виклику функції multiply");
// }

// multiply();

/* function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

multiply(1, 2, 3);
multiply(5, 2, 8);
multiply(2, 1, 323);
 */
/* 
function multiply(x, y, z) {
  console.log("Код до return виконується звичайним чином");

  return x * y * z;
}

let result = multiply(2, 3, 6);
console.log(result);

result = multiply(4, 8, 12);
console.log(result);

result = multiply(17, 6, 25);
console.log(result);
 */

/* function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

console.log("Лог до виклику функції multiply");
multiply(2, 3, 5);
console.log("Лог після виклику функції multiply");
 */

/* function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5);

count(2);
count();
 */

/* function multiply() {
  let total = 1;
  for (const argument of arguments) {
    total *= argument;
  }
  return total;
}

console.log(multiply(1, 2, 3)); //  6
console.log(multiply(1, 2, 3, 4)); //  24
console.log(multiply(1, 2, 3, 4, 5)); //  120
 */
/* 
function fn() {
  const args = Array.from(arguments);
  return args;
}

console.log(fn(2, 5, 6, 3, 5, 9));
 */

/* function fn(...args) {
  return args;
}

console.log(fn(2, 3, 8, 9, 6, 2));
 */

/* function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
  } else if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
  } else {
    console.log("Операція зняття коштів проведена успішно");
  }
}

withdraw(0, 300);
withdraw(500, 300);
withdraw(100, 300); */

/* function withdraw(amount, balance) {
  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
    return;
  }

  if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
    return;
  }

  console.log("Операція зняття коштів проведена");
}

withdraw(0, 300);
withdraw(500, 300);
withdraw(100, 300);
 */

// Оголошення функції (function declaration)
/* function multiply(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

multiply(1, 2, 3);
 */

// Функціональний вираз (function expression)

/* const multiply = function (x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
};

multiply(1, 2, 3);
 */

//! Practice from first video module 2 part 2

//? ==============Exercise 1=======================
/* const multiply = function (items) {
  let totalSum = 0;

  for (const item of items) {
    totalSum += item;
  }

  return totalSum;
};

console.log(multiply([5, 23, 689, 2, 6]));
 */
//? ==============Exercise 2=======================
/* const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(["Mango", "Kiwi", "Poly", "Ajax"]);
logItems([1, 2, 3, 4, 5]);
 */

//? ==============Exercise 3=======================

/* const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"]; */

/* const findLogin = function (allLogins, loginToFind) {
  for (const login of allLogins) {
    if (login === loginToFind) {
      return `User ${loginToFind} found`;
    }
  }

  return `User ${loginToFind} not found`;
};

console.log(findLogin(logins, "k1widab3st")); */

/* const findLogin = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `User ${loginToFind} found`
    : `User ${loginToFind} not found`;
};

console.log(findLogin(logins, "romanTofind"));
console.log(findLogin(logins, "poly1scute"));
 */

//? ============== Exercise 4 =======================

/* const findSmallesNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (let i = 0; i < numbers.length - 1; i += 1) {
    // console.log(numbers[i]);
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
    }
  }
  return smallestNumber;
};

console.log(findSmallesNumber([3, 8, 12, -2, 15]));
 */

/* function findSmallestNumber(numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
}

console.log(findSmallestNumber([3, 8, 12, -2, 15]));
console.log(findSmallestNumber([100, 54, 8, 12, 47]));
console.log(findSmallestNumber([7, 21, 84, 15, 4]));
 */

/* const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";

  for (const letter of letters) {
    if (letter === letter.toLowerCase()) {
      invertedString += letter.toUpperCase();
    } else {
      invertedString += letter.toLowerCase();
    }
  }
  return invertedString;
};

console.log(changeCase("qweRTY"));
console.log(changeCase("OPlknlKLPKweRTY"));
 */
/* 
const changeCase = function (string) {
  const letters = string.split("");
  let invertedString = "";

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }
  return invertedString;
};

console.log(changeCase("qweRTY"));
console.log(changeCase("OPlknlKLPKfvdfbdsfzvTY"));
 */

/* const slugify = function (string) {
  return string.toLowerCase().split(" ").join("-");
};

console.log(slugify("Top 10 benefits of React framework"));
console.log(slugify("Azure Static Web Apps are Awesome"));
console.log(slugify("Technical writing tips for non-native English speakers"));
 */

/* const fn = function () {
  console.log(arguments);

  const arg = Array.from(arguments);
  return arg;
};

console.log(fn(1, 2, 3));
console.log(fn(1, 2, 3, 4, 5));
console.log(fn(1, 2, 3, 4, 5, 6, 7));
 */

/* const fn = function (a, b, c, ...arg) {
  console.log(`${a} ${b} ${c}`);
  console.log(arg);
};

fn("hello", 1, 2, 3);
fn("aloha", 1, 2, 3, 4, 5);
fn("hi", 1, 2, 3, 4, 5, 6, 7);

 */

/* const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const number of args) {
    total += number;
  }

  return total;
};

console.log(add(1, 2, 3));
console.log(add(1, 2, 4, 5, 6));
 */

/* const filterNumbers = function (array, ...args) {
  let filteredArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (args.includes(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8)); // [2, 3]
console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); // [30, 15]
console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64));
 */

//! Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

/* function calcBMI(weight, height) {
  weight = convertToDecimal(weight);
  height = convertToDecimal(height);

  const result = weight / (height * height);

  return getRoundedNumber(result);
}

function convertToDecimal(str) {
  return Number(str.replace(",", "."));
}

function getRoundedNumber(num) {
  return Math.round(num * 10) / 10;
}

const bmi = calcBMI("88,3", "1.75");
console.log(bmi); 

const bmi2 = calcBMI("90,9", "1,50");
console.log(bmi2);
 */

//* Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
/* 
function min(a, b) {
  return Math.min(a, b);
  return a < b ? a : b;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));
 */

//* Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

/* function findLargestNumber(numbers) {
  let largestNumber = numbers[0];

  for (const number of numbers) {
    if (number > largestNumber) largestNumber = number;
  }
  return largestNumber;
}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83 */

//* Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

/* function calAverage() {
  let total = 0;

  for (const number of arguments) {
    total += number;
  }

  return (total = total / arguments.length);
}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2 */

//! ===========================

//* Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

//* addCourse(name) - додає курс до кінця колекції
//* removeCourse(name) - видаляє курс із колекції
//* updateCourse(oldName, newName) - змінює ім'я на нове

/* const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

function addCourse(name) {
  if (courses.includes(name)) {
    console.log("Ви вже маєте такий курс");
    return;
  }
  courses.push(name);
}

function removeCourse(name) {
  const index = courses.indexOf(name);

  if (index === -1) console.log("Курс із таким ім'ям не знайдено");
  else courses.splice(index, 1);
}

function updateCourse(oldName, newName) {
  const index = courses.indexOf(oldName);

  if (index === -1) console.log("Курс із таким ім'ям не знайдено");
  else if (courses.includes(newName)) console.log("Ви вже маєте такий курс");
  else courses[index] = newName;
}

addCourse("Express");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse("CSS"); // 'Ви вже маєте такий курс'

removeCourse("React");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse("Vue"); // 'Курс із таким ім'ям не знайдено'

updateCourse("HTML", "Next.js");
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
 */

// ? HOMEWORK

//!Exercise - 1
// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

/* function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

console.log(checkAge(20));
console.log(checkAge(8));
console.log(checkAge(18)); */

//!Exercise - 2
// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації
/* function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";
}

console.log(checkPassword("mangohackzor"));
console.log(checkPassword("jqueryismyjam")); */

//!Exercise - 3
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 250));

//!Exercise - 4
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
/* 
function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}

console.log(getExtremeElements([1, 2, 3, 4, 5]));
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
 */

//!Exercise - 5

// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

/* function splitMessage(message, delimiter) {
  let words;

  words = message.split(delimiter);

  return words;
}

console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
 */

//!Exercise - 5

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

/* function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
console.log(calculateEngravingPrice("Web-development is creative work", 40));
 */

//!Exercise - 6

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

/* function makeArray(firstArray, secondArray, maxLength) {
  return firstArray.concat(secondArray).length > maxLength
    ? firstArray.concat(secondArray).slice(0, maxLength)
    : firstArray.concat(secondArray);
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 5)); */

//!Exercise - 7

/* function calculateTotal(number) {

  let sum = 0;

  for (let i = 1; i <= number; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(calculateTotal(3));
console.log(calculateTotal(24));
 */

//!Exercise - 8

/* const arr = [1, 2, 3, 65, 9, 3];

for (let i = 0; i < arr.length; i += 1) console.log(arr[i]); */

/* function findLongestWord(string) {
  const wordsArray = string.split(" ");

  let word = string.split(" ")[0];

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (word.length < wordsArray[i].length) {
      word = wordsArray[i];
    }
  }
  return word;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); */

/* function createArrayOfNumbers(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  return numbers;
}

console.log(createArrayOfNumbers(14, 17));
 */

//!Exercise - 9
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

/* function filterArray(numbers, value) {

  const filteredArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      filteredArray.push(numbers[i]);
    }
  }
  return filteredArray;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); */

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

/* function getCommonElements(array1, array2) {
  const arr = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      arr.push(array1[i]);
    }
  }
  return arr;
}

console.log(getCommonElements([1, 2, 3], [2, 4]));
 */

//!Exercise - 10

/* function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); */

//!Exercise - 11

/* function getEvenNumbers(start, end) {
  const numbersArrey = [];

  for (let i = start; i <= end; i += 1) {
    console.log(i);
    if (i % 2 === 0) {
      numbersArrey.push(i);
    }
  }
  return numbersArrey;
}
console.log(getEvenNumbers(3, 11));
 */

//!Exercise - 12

function includes(array, value) {
  for (const num of array) {
    if (num === value) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 2, 3, 4, 5], 3));
