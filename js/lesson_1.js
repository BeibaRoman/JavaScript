/* Lesson one practice */

/* const age = 10;
const totalPrice = 200.74;
const userName = "Chelsy";
const message = "Welcome";
const isOpen = true;
const shouldConfirm = false;

const type = typeof isOpen;
console.log(type);
console.log(typeof age);
console.log(typeof userName);
 */

// method window.confirm() and window.prompt()

/* const shouldRenew = confirm("Do you want proceed subscription ?");
console.log(shouldRenew); */

/* let quantity = prompt("Enter the number of products");

quantity = Number(quantity);

console.log(quantity);
console.log(typeof quantity); */

// Number.parseInt() and Number.parseFloat()

/* let elementsWidth = "50px";
elementsWidth = Number.parseInt(elementsWidth);
console.log("elementsWidth ", elementsWidth); */
/* 
let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("elementHeight ", elementHeight);
 */

// Method toFixed(digits)
/* let salary = 1300.16458;
salary = Number(salary.toFixed(2));
console.log(typeof salary); */

/* let quantity = "30";
let value = "This string cannot be converted to a number";

console.log(Number(quantity));
console.log(Number(value)); */

// Object Math

// const base = 3;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);

// console.log(base ** power);

// let base = prompt("Give me a number");
// console.log(typeof base);
// base = Number(base);
// console.log(typeof base);

// let power = prompt("Give me a degree");
// console.log(typeof power);
// power = Number(power);
// console.log(typeof power);

// const result = base ** power;
// const result = Math.pow(base, power);

// console.log(result);

// Generating pseudorandom numbers
/*  Math.random()
    Math.round()
*/

// Math.random() * ( max - min ) + min;

// const max = 80;
// const min = 10;

// const result = Math.random() * (max - min) + min;
// console.log(Number(result.toFixed()));

/* const colors = ["tomato", "teal", "orange", "deeppink", "skyblue"];
const max = colors.length - 1;
console.log(max);
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
console.log(index);

const color = colors[index];
console.log(color);

document.body.style.backgroundColor = color; */

// property .length in string

/* const message = "This line has 27 characters";
console.log(message.length); */

// String Concatenation

/* const firstName = "Chelsy";
const lastName = "Emerald";
const fullName = firstName + " " + lastName;
console.log(fullName);

const room = 716;
const type = "VIP";
 */
// const welcomeMsg =
//   "Guest " +
//   firstName +
//   " " +
//   lastName +
//   " settles in " +
//   type +
//   " room " +
//   room;

// template strings

/* const welcomeMsg = `Guest ${firstName} ${lastName} settles in ${type} room ${room}`;

console.log(welcomeMsg); */

// const quantity = 15;

// const orderMsg = `You order ${quantity} refrigerators.`;

// console.log(orderMsg);
/* 
Normalization with method .toLowerCase()
*/

// let brand = prompt("Give a brand");
// brand = brand.toLowerCase();
// console.log(brand);
/* 
let brand = "SamSUnG";
console.log(brand);
console.log(brand[4]);
brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);
 */

// Search in a string with a method includes()

/* const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I am Prince Abdul, this is not spam, I am offering you a million!";

const string2 = "Biggest SALE this week, do not miss out!";
const string3 = "Advertising campaign #fatlivematter";

console.log(string1.includes(blacklistedWord1));
console.log(string2.includes(blacklistedWord2));
console.log(string2.includes(blacklistedWord1));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));
 */

/* const x1 = 10;
const x2 = 30;
const number = 45;

console.log(
  `Does ${number} fall within the interval up to ${x1}?`,
  number < x1
);
console.log(`Does ${number} fall into the segment after ${x2}?`, number > x2);

const res1 = number > x1 && number < x2;
console.log(res1);

console.log(`Does ${number} fall within the range from ${x1} to ${x2}?`, res1);

const res2 = number < x1 || number > x2;
console.log(
  `Does ${number} fall within the range to ${x1} or after ${x2}?`,
  res2
); */

//Write a script that checks the ability to open a chat with a user.

// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log("Can open the chat ", canOpenChat);

/*  Write a script to check the user's subscription when accessing content
  - There are three types of subscription: free, pro and vip.
   - Only pro and vip users can gain access */

/* const sub = "free";

const canAccessContent = sub === "pro" || sub === "vip";

console.log("Do you have access to the content?", canAccessContent); */

// const salary = 2300;

// if (salary <= 500) {
//   console.log("Level 1");
// } else if (salary > 500 && salary <= 1500) {
//   console.log("Level 2");
// } else if (salary > 1500 && salary < 3000) {
//   console.log("Level 3");
// } else {
//   console.log("Level 4");
// }

// ternary operator

// const balance = 1;
// let message;

// if (balance > 0) {
//   message = "Positive balance";
// } else {
//   message = "Negative balance";
// }
// console.log(message);

/* const message = balance > 0 ? "Positive balance" : "Negative balance";
console.log(message); */

/* let balance = 10000;
const payment = 2000;

console.log(
  `The total cost of the order is ${balance} credits. Checking the amount of available funds in the account`
);

if (payment <= balance) {
  balance -= payment;
  console.log(`There are ${balance} credits left on the account`);
} else {
  console.log(
    "There are not enough funds in the account to carry out the operation!"
  );
}

console.log("Operation completed!");
 */

/* const totalSpent = 1620;
let payment = 500;
let discount = 0;

if (totalSpent < 100) {
  console.log(`Not a partner, discount: ${discount}%!`);
  console.log(
    `We place an order for the amount of ${payment} with a discount ${discount}%!`
  );
} else if (totalSpent > 100 && totalSpent < 1000) {
  discount += 0.02 * 100;

  console.log(`Bronze partner, discount: ${discount}%!`);
  console.log(
    `We place an order for the amount of ${(payment -=
      (payment * discount) / 100)} with a discount ${discount}%!`
  );
} else if (totalSpent > 1000 && totalSpent < 5000) {
  discount += 0.05 * 100;
  console.log(`Silver partner, discount: ${discount}%!`);
  console.log(
    `We place an order for the amount of ${(payment -=
      (payment * discount) / 100)} with a discount ${discount}%!`
  );
} else {
  discount += 0.1 * 100;
  console.log(`Gold partner, discount: ${discount}%!`);
  console.log(
    `We place an order for the amount of ${(payment -=
      (payment * discount) / 100)} with a discount ${discount}%!`
  );
}
 */

/* const starts = 8;
let price; */

/* if (starts === 1) {
  price = 20;
  console.log(`Cost of the hotel: ${price}`);
} else if (starts === 2) {
  price = 30;
  console.log(`Cost of the hotel: ${price}`);
} else if (starts === 3) {
  price = 50;
  console.log(`Cost of the hotel: ${price}`);
} else if (starts === 4) {
  price = 70;
  console.log(`Cost of the hotel: ${price}`);
} else if (starts === 5) {
  price = 120;
  console.log(`Cost of the hotel: ${price}`);
} else {
  console.log("There are no such number of stars");
}
 */

/* switch (starts) {
  case 1:
    price = 20;
    console.log(`Cost of the hotel: ${price}`);
    break;

  case 2:
    price = 30;
    console.log(`Cost of the hotel: ${price}`);
    break;

  case 3:
    price = 50;
    console.log(`Cost of the hotel: ${price}`);
    break;

  case 4:
    price = 70;
    console.log(`Cost of the hotel: ${price}`);
    break;

  case 5:
    price = 120;
    console.log(`Cost of the hotel: ${price}`);
    break;

  default:
    console.log("There are no such number of stars");
}
 */

/* const starts = 52;
let price; */

/* if (starts === 1 || starts === 2) {
  price = 20;
  console.log(`Cost of the hotel: ${price}`);
} else if (starts === 3 || starts === 4) {
  price = 30;
  console.log(`Cost of the hotel: ${price}`);
} else if (starts === 5) {
  price = 120;
  console.log(`Cost of the hotel: ${price}`);
} else {
  console.log("There are no such number of stars");
} */

/* 
switch (starts) {
  case 1:
  case 2:
    price = 20;
    console.log(`Cost of the hotel: ${price}$`);
    break;

  case 3:
  case 4:
    price = 30;
    console.log(`Cost of the hotel: ${price}$`);
    break;

  case 5:
    price = 120;
    console.log(`Cost of the hotel: ${price}$`);
    break;

  default:
    console.log("There are no such number of stars");
}
 */

/* const option = 2;
let message = "";

switch (option) {
  case 1:
    message = "You can pick up the goods tomorrow from 12:00 at our office";
    break;

  case 2:
    message = "The courier will deliver the order tomorrow from 9:00 to 18:00";

    break;

  case 3:
    message = "The parcel will be sent today";

    break;
  default:
    console.log("The manager will call you back");
}

console.log(message);
 */

/* 
const minSalary = 500;
const maxSalary = 5000;

const employees = 12;

let totalSalary = 0;

for (let i = 1; i <= employees; i += 1) {
  console.log(i);
  const salary = Math.round(
    Math.random() * (maxSalary - minSalary) + minSalary
  );
  totalSalary += salary;
  console.log(`Employee salary numbe ${i} - ${salary}`);
}
console.log(`Total salary of all employees ${totalSalary}`);
 */

/* const min = 0;
const max = 5;
let total = 0;

for (let i = min; i < max; i += 1) {
  console.log(i);
  if (i % 2 !== 0) {
    console.log(`Not even: ${i}`);
    continue;
  }
  console.log(`Even: ${i}`);
  total += i;
}
console.log(total);
 */

const btnAdd = document.querySelector("button[data-add]");
const reseBtn = document.querySelector("button[data-reset]");
const valueInput = document.querySelector("input[data-value]");
const outputEl = document.querySelector(".js-output span");

let total = 0;

btnAdd.addEventListener("click", function () {
  const value = Number(valueInput.value);

  total += value;
  outputEl.textContent = total;
  valueInput.value = "";
});

reseBtn.addEventListener("click", function () {
  total = 0;
  outputEl.textContent = total;
});

//* Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.

// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = "88,3";
// let height = "1.75";

// weight = weight.replace(",", ".");
// height = height.replace(",", ".");

// const bmi = Number((weight / (height * height)).toFixed(1));
// console.log(bmi); // 28.8
// const indexWeight = weight.indexOf(",");
// const indexHeight = height.indexOf(".");

// const weightSl1 = weight.slice(0, indexWeight);
// const weightSl2 = weight.slice(indexWeight + 1);

// const heightSl1 = height.slice(0, indexHeight);
// const heightSl2 = height.slice(indexHeight + 1);

// const weightNum = Number(`${weightSl1}.${weightSl2}`);
// const heightNum = Number(`${heightSl1}.${heightSl2}`);

// console.log(weightNum);
// console.log(heightNum);

// const bmi = +(weightNum / Math.pow(heightNum, 2)).toFixed(1);
// console.log(bmi);

/* ======================================================= */

//* Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const userAnswer = prompt("Яка офіційна назва JavaScript?");
// console.log(userAnswer);

// if (userAnswer === "ECMAScript") {
//   alert("Правельно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// if (userAnswer === "ECMAScript") alert("Правельно!");
// else alert("Не знаєте? ECMAScript!");

// let msg = "";

// userAnswer === "ECMAScript"
//   ? (msg = "Правельно!")
//   : (msg = "Не знаєте? ECMAScript!");

// alert(msg);

// let msg = userAnswer === "ECMAScript" ? "Правельно!" : "Не знаєте? ECMAScript!";

// alert(msg);

//! ==========================================

//* Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 0;
// let msgTime = "";

// if (minutes === 0) msgTime = `${hours} г.`;
// else msgTime = `${hours} г. ${minutes} хв.`;
// console.log(msgTime);

// const hours = 14;
// const minutes = 26;

// let msgTime = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;
// console.log(msgTime);

//! ==========================================

//* Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

const a = 190;
const b = 20;

if (a >= 100 && b >= 100) {
  // if (a > b) console.log(a);
  // else console.log(b);
  // a > b ? console.log(a) : console.log(b);

  console.log(Math.max(a, b));
} else {
  console.log(b + 512);
}
