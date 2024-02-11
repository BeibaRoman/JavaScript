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

const numbers = [2, 17, 94, 1, 23, 37];

let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log("🚀 ~ smallestNumber:", smallestNumber);
