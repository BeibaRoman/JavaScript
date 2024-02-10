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
