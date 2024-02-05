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

// const a = 190;
// const b = 20;

// if (a >= 100 && b >= 100) {
// if (a > b) console.log(a);
// else console.log(b);
// a > b ? console.log(a) : console.log(b);

//   console.log(Math.max(a, b));
// } else {
//   console.log(b + 512);
// }

//! ==========================================

//* Example 10 - Дедлайн здачі проекту (switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// if (daysUntilDeadline === 0) {
//   console.log("Сьогодні");
// } else if (daysUntilDeadline === 1) {
//   console.log("Завтра");
// } else if (daysUntilDeadline === 2) {
//   console.log("Післязавтра");
// } else {
//   console.log("Дата у майбутньому");
// }

// const daysUntilDeadline = 2;

// switch (daysUntilDeadline) {
//   case 0: {
//     console.log("Сьогодні");
//     break;
//   }
//   case 1: {
//     console.log("Завтра");
//     break;
//   }
//   case 2: {
//     console.log("Післязавтра");
//     break;
//   }

//   default: {
//     console.log("Дата у майбутньому");
//   }
// }

//* Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1) {
//   if (i % 5 !== 0) continue;
//   console.log(i);
// }

//! ==========================================

//* Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const login = prompt("Введіть Логін: ")?.trim();

// console.log(login);

// if (login === "Адмін") {
//   const password = prompt("Введіть пароль: ");
//   if (password === "Я адмін") console.log("Здрастуйте!");
//   else console.log("Невірний пароль");
// } else if (!login) {
//   console.log('"Скасовано"');
// } else {
//   console.log("Я вас не знаю");
// }

//!==========================================
// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

/* const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);
 */

// <!=================================================

/* Функція makeMessage(name, price) складає і повертає повідомлення про покупку. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

name - назва товару
price - ціна товару
Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків. */

/* function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
}

console.log(makeMessage("Radar", 6150));
console.log(makeMessage("Scanner", 3500));
console.log(makeMessage("Reactor", 8000));
console.log(makeMessage("Engine", 4070));
 */

// <!========================================

/* Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

orderedQuantity - кількість дроїдів у замовленні
pricePerDroid - ціна одного дроїда
deliveryFee - вартість доставки
Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості. */

/* function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  let message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
  return message;
}

console.log(makeOrderMessage(2, 100, 50));
 */

//!=========================================
/* Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

pricePerDroid - ціна одного дроїда
orderedQuantity - кіл-сть замовлених дроїдів
customerCredits - сума коштів на рахунку клієнта
Доповни її наступним функціоналом:

Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
Додай перевірку, чи зможе клієнт оплатити замовлення:
якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left". */

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = orderedQuantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));

// !==============================================

/* Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount і повертається з функції як результат її роботи.

Використовуючи розгалуження і логічні оператори, доповни код функції.

Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT. */

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent <= 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent > 2000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }

//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));

/*
Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.

Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

Список країн і вартість доставки:

China - 100 кредитів
Chile - 250 кредитів
Australia - 170 кредитів
Jamaica - 120 кредитів
Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country" 
 */

/* function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case "China":
      message = "Shipping to China will cost 100 credits";
      break;
    case "Chile":
      message = "Shipping to Chile will cost 250 credits";
      break;
    case "Australia":
      message = "Shipping to Australia will cost 170 credits";
      break;
    case "Jamaica":
      message = "Shipping to Jamaica will cost 120 credits";
      break;

    default:
      message = "Sorry, there is no delivery to your country";
  }

  // Change code above this line
  return message;
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica")); */

// !================================================

/* Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

Доповни код функції таким чином, що якщо довжина рядка:

не перевищує maxLength, функція повертає його в початковому вигляді.
більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію. */

/* function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  result =
    message.length <= maxLength ? message : `${message.slice(0, maxLength)}...`;
  /// Change code above this line
  return result;
}

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
 */

// !===============================================

/*
Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
Якщо в рядку відсутні заборонені слова, функція повертає буль false. 
 */

function checkForSpam(message) {
  let result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");

  // Change code below this line
  // Change code above this line
  return result;
}

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Amazing SalE, only tonight!"));
