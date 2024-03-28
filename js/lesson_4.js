/* function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
}

function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", greet);
 */

/* function registerGuest(name, callback) {
  console.log(`Реєструємо гостя ${name}.`);
  callback(name);
}

registerGuest("Манго", function greet(name) {
  console.log(`Ласкаво просимо ${name}.`);
});

registerGuest("Полі", function notify(name) {
  console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
}); */

/* function processCall(recipient, onAvailable, onNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }

  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
  // Логіка прийняття дзвінка
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
  // Логіка активації автовідповідача
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
  // Логіка запису голограми
}

processCall("Манго", takeCall, activateAnsweringMachine);
processCall("Манго", takeCall, leaveHoloMessage); */

/* function printValue(value) {
  console.log(value);
}

function prettyPrint(value) {
  console.log("Logging value: ", value);
}

function repeat(n, action) {
  for (let i = 1; i <= n; i += 1) {
    action(i);
  }
}

repeat(10, printValue);
repeat(10, prettyPrint);
 */

// const numbers = [5, 10, 15, 20, 25];

// Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const add = (a, b, c) => a + b + c;

// console.log(add(2, 6, 3));

// const add = (a) => a + 5;
// console.log(add(6));

/* const greet = () => {
  console.log("Hello");
};

greet();
 */

/* const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

add(5, 9, 3); */

/* const numbers = [5, 10, 15, 20, 25]; */

/* numbers.forEach(function (number, index) {
  console.log(`Індекс ${index}, значення ${number}`);
}); */

/* numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
}); */

/* const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
};

numbers.forEach(logMessage); */

//Чисті функції

/* const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);

console.log(numbers); */

/* const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach((element) => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

console.log(numbers);

console.log(doubledNumbers); */
/* 
const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};

doMath(2, 6, function (x, y) {
  return x * y;
});

doMath(2, 6, function (x, y) {
  return x - y;
});

doMath(2, 6, function (x, y) {
  return x + y;
}); */

const buttonRef = document.querySelector(".js-button");

const handlBtnClick = function () {
  console.log("Клик по кнопке " + Date.now());
};

buttonRef.addEventListener("click", handlBtnClick);

/* const onGetPositionSuccess = function (position) {
  console.log("Це виклик onGetPositionSuccess");
  console.log(position);
};

const onGetPositionError = function (error) {
  console.log("Це виклик onGetPositionError");
  console.log(error);
};

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);
 */

/* const callback = function () {
  console.log("Через 2 секунди в середині колбека в таймауті");
};

console.log("До setTimeout()");

setTimeout(callback, 2000);

console.log("Після setTimeout()"); */

/* const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }
  return filteredArray;
};

const callback1 = function (value) {
  return value >= 3;
};

const callback2 = function (value) {
  return value <= 4;
};

const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};

const r3 = filter(fruits, getFruitsWithQuantity);

console.log(r3); */

/* const fnA = function (parameter) {
  const innerVariable = "значение внутренней переменной функции fnA";

  const innerFunction = function () {
    console.log(parameter);
    console.log(innerVariable);
    console.log("Виклик даної функції");
  };

  return innerFunction;
};

const fnB = fnA("Borys");

fnB(); */

/* const makeSheff = function (name) {
  const makeDish = function (dish) {
    console.log(`${name} готує ${dish}`);
  };

  return makeDish;
};

const borys = makeSheff("Борис");

const bogdan = makeSheff("Богдан");

borys("Млинці");

borys("Вареники");

bogdan("Борщ");
bogdan("Хліб"); */

/* const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log(rounder2(3.4567));

console.log(rounder2(3.4567));
console.log(rounder2(3.4526567));
console.log(rounder2(3.4645567));

console.log(rounder3(3.4526567));
console.log(rounder3(3.4645567)); */

/* const salaryManagerFactory = function (employeeName, baseSalary = 0) {
  let salary = baseSalary;

  return {
    raise(amount) {
      if (amount > 1000) {
        return "Ти обнаглів?";
      }
      salary + amount;
    },
    lower(amount) {
      salary -= amount;
    },
    current() {
      return `Зарплата на даний момент ${employeeName} - ${salary}`;
    },
  };
};

const salaryManager = salaryManagerFactory("Mango", 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current()); */

/* const filter = (array, test) => {
  const filteredArray = [];
  for (const el of array) {
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

console.log(filter([1, 2, 3, 4, 5], (value) => value >= 3));

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], (value) => value <= 4));

const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];

console.log(filter(fruits, (fruit) => fruit.quantity >= 120)); */

// !============================================
/* const apple = { name: "🍎", price: 30, quantity: 3 };
const lemon = { name: "🍋", price: 20, quantity: 5 };

function createProduct(obj, callback) {
  const newProduct = { ...obj, id: Date.now() };
  callback(newProduct);
  // callback( { ...obj, id: Date.now() };);
}
const logProduct = (product) => console.log(product);
const logTotalPrice = ({ price, quantity }) => console.log(price * quantity);

createProduct(apple, logProduct);
createProduct(lemon, logTotalPrice);
 */

/* const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,

  withdraw(amount, onSuccess, onError) {
    if (amount >= TRANSACTION_LIMIT) {
      onError(`Перевищено ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`);
    } else if (amount > this.balance) {
      onError(`Недостатньо коштів! Поточний баланс: ${this.balance}`);
    } else {
      this.balance -= amount;
      onSuccess(`Кошти знято! Поточний баланс: ${this.balance}`);
    }
  },

  deposit(amount, onSuccess, onError) {
    if (amount >= TRANSACTION_LIMIT) {
      onError(`Перевищено ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`);
    } else if (amount < 0) {
      onError("Неможливо покласти таку суму. Сума повинна бути більша за 0");
    } else {
      this.balance += amount;
      onSuccess(`Кошти зараховано! Поточний баланс: ${this.balance}`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}

function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(500, handleSuccess, handleError);
account.withdraw(1500, handleSuccess, handleError);
account.deposit(400, handleSuccess, handleError);
account.deposit(1200, handleSuccess, handleError);
account.deposit(-3, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.withdraw(700, handleSuccess, handleError); */
/* 
function each(array, callback) {
  const newArray = [];

  array.forEach((element) => newArray.push(callback(element)));

  return newArray;
}

const arr = [1, 2, 3, 4, 5];
console.log(each(arr, (num) => num + 1));
console.log(each(arr, (num) => num * 2));
console.log(each(arr, (num) => num - 1));
console.log(each(arr, (num) => Math.sqrt(num)));
 */
/* 
function calculateAverage(...args) {
  let total = 0;
  args.forEach((item) => (total += item));

  return total / args.length;
}

console.log(calculateAverage(1, 5, 3, 7, 2)); // 3.6
console.log(calculateAverage(5, 8));
console.log(calculateAverage(1, 2, 3)); */

// ! Exercise 1

/* function alphabetPosition(text) {
  var result = [];
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  text = text
    .replace(/\W*\d+/g, "")
    .toLowerCase()
    .split("");
  // return text;

  for (let i = 0; i < text.length; i += 1) {
    if (!(alphabet.indexOf(text[i]) === -1)) {
      result.push(alphabet.indexOf(text[i]) + 1);
    }
  }

  return result.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock.")); */

/* function replace(s) {
  const vowels = ["a", "e", "i", "o", "u"];
  const newArray = [...s];
  let result = "";
  for (let i = 0; i < newArray.length; i += 1) {
    if (vowels.includes(newArray[i].toLowerCase())) {
      result += "!";
    } else {
      result += newArray[i];
    }

    //
  }
  return result;
}

console.log(replace("Hi!"));
console.log(replace("!Hi! Hi!"));
console.log(replace("ABCDE"));
console.log(replace("aeiou")); */
// !==========Mathod .map()==============

/* const planets = ["Земля", "Марс", "Венера", "Юпітер"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());

console.log(planetsInUpperCase);

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase);

console.log(planets); */

/* const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const names = students.map((student) => student.name);

console.log(names); */

// !==========Mathod .flapMap()==============

/* const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const courses = students.map((student) => student.courses);
console.log(courses);

const uniqueCourses = courses.flatMap((course) => course);

console.log(uniqueCourses); */

// !==========Mathod .filter()==============

/* const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValue = values.filter((value) => value >= 0);
console.log(positiveValue);

const negativeValue = values.filter((value) => value <= 0);
console.log(negativeValue);

const bigValue = values.filter((value) => value > 1000);
console.log(bigValue); */

/* const students = [
  { name: "Манго", courses: ["математика", "фізика"] },
  { name: "Полі", courses: ["інформатика", "математика"] },
  { name: "Ківі", courses: ["фізика", "біологія"] },
];

const allCourses = students.flatMap((student) => student.courses);
console.log(allCourses);

const uniqeCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

console.log(uniqeCourses); */
/* const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best);

const worst = students.filter((student) => student.score <= LOW_SCORE);
console.log(worst);

const average = students.filter(
  (student) => student.score >= LOW_SCORE && student.score <= HIGH_SCORE
);
console.log(average); */

// !==========Mathod .find()==============

/* const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.find((option) => option.label === "blue"));

console.log(colorPickerOptions.find((option) => option.label === "pink"));

console.log(colorPickerOptions.find((option) => option.label === "white")); */

// !==========Mathod .findIndex()==============

/* const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

console.log(colorPickerOptions.findIndex((option) => option.label === "blue"));

console.log(colorPickerOptions.findIndex((option) => option.label === "white"));
 */

// !==========Mathod .every()==============

/* console.log([1, 2, 3, 4, 5].every((value) => value >= 0));

console.log([1, 2, 3, -10, 4, 5].every((value) => value >= 0));
 */
// !==========Mathod .some()==============

/* console.log([1, 2, 3, 4, 5].some((value) => value >= 0));

console.log([-7, -20, 3, -10, -14].some((value) => value >= 0));

console.log([1, 2, 3, 4, 5].some((value) => value < 0));

console.log([1, 2, 3, -10, 4, 5].some((value) => value < 0)); */

/* const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

const allAvailable = fruits.every((fruit) => fruit.amount > 0);
console.log(allAvailable);

const anyAvailable = fruits.some((fruit) => fruit.amount > 0);
console.log(anyAvailable);
 */

// !==========Mathod .reduce()==============

/* const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); */

/* const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
  { name: "Х'юстон", score: 64 },
];

const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

console.log(totalScore / students.length); */
/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const getTags = (tweets) =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);

const tags = getTags(tweets);
// console.log(tags);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

const countTags = (tags) => tags.reduce(getTagStats, {});

console.log(countTags(tags)); */

// !   ===============================================
/* const countTags = (acc, tags) => {
  for (let i = 0; i < tags.length; i += 1) {
    if (!acc.hasOwnProperty(tags[i])) {
      acc[tags[i]] = 0;
    }
    acc[tags[i]] += 1;
  }
  return acc;
};

console.log(countTags({}, tags));
 */

// ! Method ====================.sort()==================

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores);

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// students.sort();

// console.log(students);

// const letters = ["b", "B", "a", "A", "c", "C"];

// letters.sort();

// console.log(letters);

// const scores = [61, 19, 74, 35, 92, 56];

// const ascendingScores = [...scores].sort();

// console.log(ascendingScores);

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores);

// const scores = [61, 19, 74, 35, 92, 56];

// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores);

// const students = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));

// console.log(inAlphabetOrder);

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));

// console.log(inReversedOrder);
/* 
const students = [
  { name: "Манго", score: 83 },
  { name: "Полі", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Ківі", score: 94 },
];

const inAscendingScoreOrder = [...students].sort((a, b) => a.score - b.score);

console.log(inAscendingScoreOrder);

const inDescendingScoreOrder = [...students].sort((a, b) => b.score - a.score);

console.log(inDescendingScoreOrder);

const inAlphabetNameOrder = [...students].sort((a, b) =>
  a.name.localeCompare(b.name)
);

console.log(inAlphabetNameOrder); */
// !=====================================================!

/* const students = [
  { name: "Манго", score: 83, courses: ["математика", "фізика"] },
  { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
  { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
  { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
]; */

/* const inAscendingScoreOrder = [...students].sort((a, b) => a.score - b.score);

console.log(inAscendingScoreOrder);

const names = inAscendingScoreOrder.map((student) => student.name);

console.log(names); */
/* 
const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map((student) => student.name);
console.log(names); */

/* const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses);
 */

//!============Practice from first Lesson =================

// ?======================Method .forEach()===================

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach((number) => console.log("number", number));

// console.log(numbers);

// ?====================Method .map()=========================

/* const numbers = [5, 10, 15, 20, 25];
console.log("🚀 ~ numbers:", numbers);

const doubledNums = numbers.map((number) => number * 3);
console.log("🚀 ~ doubledNums:", doubledNums);
 */

/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];
console.log("🚀 ~ players:", players);

const playerNames = players.map((player) => player.name);
console.log("🚀 ~ playerNames:", playerNames);

const playerIds = players.map((player) => player.id);
console.log("🚀 ~ playerIds:", playerIds);

const res = players.map(({ name, online }) => ({
  name,
  online,
}));
console.log("🚀 ~ res ~ res:", res); */

/* const updatedPlayers = players.map((player) => ({
  ...player,
  points: Number((player.points * 1.1).toFixed(1)),
}));
console.log("🚀 ~ updatedPlayers ~ updatedPlayers:", updatedPlayers);
 */
// const playerIdToUpdate = "player-3";

/* const updatedPlayers = players.map((player) => {
  if (playerIdToUpdate === player.id) {
    return {
      ...player,
      timePlayed: player.timePlayed + 100,
    };
  }
  return player;
});
console.log("🚀 ~ updatedPlayers ~ updatedPlayers:", updatedPlayers); */

/* const updatePlayers = players.map((player) =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player
);
console.log("🚀 ~ updatePlayers:", updatePlayers);
 */

// ?====================Method .filter()=========================

/* const numbers = [5, 10, 15, 20, 25];

const filteredNUmbers = numbers.filter((number) => number > 10);
console.log("🚀 ~ filteredNUmbers:", filteredNUmbers); */

/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];

const filteredPlayersByOnline = players.filter((player) => player.online);
console.log("🚀 ~ filteredPlayersByOnline:", filteredPlayersByOnline);

const filteredPlayersByOffline = players.filter((player) => !player.online);
console.log("🚀 ~ filteredPlayersByOffline:", filteredPlayersByOffline);

const hardcorePlayers = players.filter((player) => player.timePlayed > 200);
console.log("🚀 ~ hardcorePlayers:", hardcorePlayers);
 */

// ?====================Method .find()=========================

/* const numbers = [5, 10, 15, 20, 25];

const number = numbers.find((number) => {
  return number === 10;
});
console.log("🚀 ~ number:", number); */

/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];
 */
/* const playerIdToFind = "player-3";

const playerWithId = players.find((player) => player.id === playerIdToFind);
console.log("🚀 ~ playerWithId:", playerWithId);
 */
/* 
const findPlayerById = (allPlayers, playerId) => {
  return allPlayers.find(({ id }) => id === playerId);
};

console.log(findPlayerById(players, "player-1"));
console.log(findPlayerById(players, "player-4")); */

/* const playerNameToFind = "Poly";

const playerWithName = players.find(
  (player) => player.name === playerNameToFind
);
console.log("🚀 ~ playerWithName:", playerWithName); */

// ?====================Method .every()=========================

/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];
const isAllOnline = players.every((player) => player.online);
console.log("🚀 ~ isAllOnline:", isAllOnline); */

// ?====================Method .some()=========================

/* const isAnyOnline = players.some((player) => player.online);
console.log("🚀 ~ isAnyOnline:", isAnyOnline);

const anyHardcorePlayer = players.some((player) => player.timePlayed > 400);
console.log("🚀 ~ anyHardcorePlayer:", anyHardcorePlayer); */

// ?====================Method .reduce()=========================

/* const numbers = [5, 10, 15, 10, 25];

const total = numbers.reduce((acc, number) => acc + number, 0);
console.log("🚀 ~ total ~ total:", total);
 */

// Рахуємо загальну суму зарплат
/* 
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
const totalSalary = Object.values(salary).reduce(
  (total, sum) => total + sum,
  0
);
console.log("🚀 ~ totalSalary:", totalSalary);
 */

/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
];

const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0
);
console.log("🚀 ~ totalTimePlayed:", totalTimePlayed); */

/* const cart = [
  { label: "Apples", price: 100, quantity: 2 },
  { label: "Bananas", price: 120, quantity: 3 },
  { label: "Lemons", price: 70, quantity: 4 },
];

const totalAmount = cart.reduce(
  (total, { price, quantity }) => price * quantity,
  0
);
console.log("🚀 ~ totalAmount:", totalAmount); */

/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Варіант - 1
const allTags = tweets.reduce((acc, { tags }) => [...acc, ...tags], []);
console.log("🚀 ~ allTags:", allTags); */

/* const tagStats = allTags.reduce((acc, tag) => {
  if (acc[tag]) {
    acc[tag] += 1;
    return acc;
  }

  acc[tag] = 1;

  return acc;
}, {});
console.log("🚀 ~ tagStats ~ tagStats:", tagStats); */
/* 
const tagsStats = allTags.reduce(
  (acc, tag) => ({ ...acc, [tag]: acc[tag] ? acc[tag] + 1 : 1 }),
  {}
);
console.log("🚀 ~ tagsStats:", tagsStats); */

// ?====================Method .sort()=========================

/* const numbers = [1, 9, 6, 2, 3];
numbers.sort();

console.log("🚀 ~ numbers:", numbers);

const letters = ["b", "B", "a", "A"];
letters.sort();

console.log("🚀 ~ letters:", letters);

const descSortedNumber = [...numbers].sort((a, b) => b - a);
console.log("🚀 ~ descSortedNumber:", descSortedNumber);

const ascSortedNumber = [...numbers].sort((a, b) => a - b);
console.log("🚀 ~ ascSortedNumber:", ascSortedNumber); */

/* const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, online: true },
  { id: "player-3", name: "Aiwi", timePlayed: 230, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, online: false },
  { id: "player-5", name: "Chelsey", timePlayed: 80, online: true },
]; */

/* const sortedByBestPlayer = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed
);

console.log("🚀 ~ sortedBybestPlayer:", sortedByBestPlayer);

const sortedByWorstPlayer = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed
); */

/* console.log("🚀 ~ sortedByWorstPlayer:", sortedByWorstPlayer); */

/* const byName = [...players].sort((a, b) => {
  const result = a.name[0] > b.name[0];
  if (result) {
    return 1;
  }
  if (!result) {
    return -1;
  }
});
console.table(byName);
 */

/* const byName = [...players].sort((a, b) => a.name.localeCompare(b.name));

console.table(byName);
 */

// !===============Practice from third video lesson==============

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//* Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

/* const getModels = (models) => {
  return models.map(({ model }) => model);
};

console.log("🚀getModels:", getModels(cars)); */

//* Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));
// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.3));

//* Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

/* const filterByPrice = (cars, threshold) => {
  return cars.filter((car) => car.price < threshold);
};

console.log("🚀filterByPrice:", filterByPrice(cars, 30000));

console.log("🚀filterByPrice:", filterByPrice(cars, 23000));
 */

//* Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

/* const getCarsWithDiscount = (cars) => cars.filter((car) => !car.onSale);

console.log(getCarsWithDiscount(cars)); */

//* Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.
/* 
const getCarsWithType = (cars, carType) =>
  cars.filter((car) => car.type === carType);

console.table(getCarsWithType(cars, "suv"));
console.table(getCarsWithType(cars, "sedan"));
console.table(getCarsWithType(cars, "truck")); */

//* Example 6 - Метод find

/* const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

console.log(getCarByModel(cars, "F-150"));
console.log(getCarByModel(cars, "CX-9")); */

//* Example 7 - Метод sort

/* const arr = [1, 5, 14, 32, 2, 34, 3, 54, 21, 3];

arr.sort((a, b) => a - b);
console.log(arr);

arr.sort((a, b) => b - a);
console.log(arr); */

/* const arr = ["b", "r", "s", "a", "c"];
arr.sort((a, b) => a.localeCompare(b));
console.log(arr);

arr.sort((a, b) => b.localeCompare(a));
console.log(arr);
 */

//* Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

/* const sortByAscendingAmount = (cars) =>
  [...cars].sort((a, b) => a.amount - b.amount);

console.table(sortByAscendingAmount(cars));
 */
//* Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

/* const sortByDescendingPrice = (cars) =>
  [...cars].sort((a, b) => b.price - a.price);

console.table(sortByDescendingPrice(cars));
 */

//* Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

/* console.log("hello");

const sortByModel = (cars, order) =>
  [...cars].sort((a, b) => {
    switch (order) {
      case "asc":
        return a.model.localeCompare(b.model);

      case "desc":
        return b.model.localeCompare(a.model);
    }
  });

console.log(sortByModel(cars, "asc"));
console.log(sortByModel(cars, "desc")); */

//* Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

/* const getTotalAmount = (cars) =>
  cars.reduce((totalSum, { amount }) => totalSum + amount, 0);

console.log("🚀 ~ getTotalAmount:", getTotalAmount(cars));
 */

//* Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

/* const getAvailableCarNames = (cars) =>
  cars.filter(({ onSale }) => onSale).map(({ model }) => model);

console.log(getAvailableCarNames(cars)); */

//* Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

/* const getSortedCarsOnSale = (cars) =>
  cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

console.log(getSortedCarsOnSale(cars));
 */

const numbers = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const uniqueNumbers = (numbers) => {
  return numbers.filter(
    (number, index, array) => array.indexOf(number) === index
  );
};
console.log("🚀 ~ uniqueNumbers:", uniqueNumbers(numbers));
