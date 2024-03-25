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

function calculateAverage(...args) {
  let total = 0;
  args.forEach((item) => (total += item));

  return total / args.length;
}

console.log(calculateAverage(1, 5, 3, 7, 2)); // 3.6
console.log(calculateAverage(5, 8));
console.log(calculateAverage(1, 2, 3));
