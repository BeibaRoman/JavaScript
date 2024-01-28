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

const balance = -1;
// let message;

// if (balance > 0) {
//   message = "Positive balance";
// } else {
//   message = "Negative balance";
// }
// console.log(message);

const message = balance > 0 ? "Positive balance" : "Negative balance";
console.log(message);
