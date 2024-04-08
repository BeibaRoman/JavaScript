// !============Lesson 5 of JS=============
// const petya = {
//   username: "Petya",
//   showName() {
//     console.log(this.username);
//     console.log("🚀 ~ showName ~ showName:", this);
//   },
// };

// petya.showName();

///* ============================== */

// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors());

// bookShelf.addAuthor("Лі Таніт");

// console.log(bookShelf.getAuthors());
///* ============================================ */
// function foo() {
//   console.log(this);
// }

// foo();

///* ============================================ */

// const petya = {
//   username: "Petya",
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.username);
//   },
// };

// petya.showThis();
// petya.showName();

///* ============================================ */

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// showThis();

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext();

///* ============================================ */

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

///* ============================================ */
// const showThis = () => {
//   console.log("this in showThis: ", this);
// };

// showThis();

// const user = {
//   username: "Mango",
// };

// user.showContext = showThis;

// user.showContext();

///* ============================================ */

// const hotel = {
//   username: "Resort hotel",
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log("this in foo: ", this);
//     };

//     foo();
//     console.log("this in showThis: ", this);
//   },
// };

// hotel.showThis();

///* ============================================ */

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо");

// greetGuest.call(poly, "Ласкаво просимо");

///* ============================================ */

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.apply(mango, ["Ласкаво просимо"]);
// greetGuest.apply(poly, ["Ласкаво просимо"]);

///* ============================================ */

// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter("Манго"));

// const gmail = {
//   service: "Gmail",
// };

// const gmailGreeter = greet.bind(gmail);

// console.log(gmailGreeter("Poly"));
///* ============================================ */

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName.bind(customer));

///* ============================================ */
// !Lesson - 1;

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// // user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

///* ============================================ */

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

///* ============================================ */

// const fn = function () {
//   console.log("fn -> this", this);
// };

// fn();

///* ============================================ */

// const book = {
//   title: "React for beginners",
//   showThis() {
//     console.log("showThis -> this", this);
//   },
//   showTitle() {
//     console.log("showTitle -> this.title", this.title);
//   },
// };

// book.showThis();

// const outerShowThis = book.showThis;
// outerShowThis();

// const outerShowTitle = book.showTitle;
// outerShowTitle();

///* ============================================ */

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//     this.color = color;
//   };

//   const sweater = {
//     color: "teal",
//   };

//   sweater.updateColor = changeColor;

//   sweater.updateColor("red");

//   return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor("blue");

///* ============================================ */

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log("changeColor -> this", this);
//     console.log((this.color = color));
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();
// // updateColor("yellow");

// const hat = {
//   color: "blue",
//   updateColor,
// };

// hat.updateColor("orange");

// console.log(hat);

///* ============================================ */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

///* ============================================ */

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log("showThis -> this", this);
// };

// showThis();

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// const objB = {
//   x: 788,
//   y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// showThis();

///* ============================================ */

// const changeColor = function (color) {
//   console.log("changeColor -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// changeColor.call(hat, "orange");
// console.log(hat);

// const sweater = {
//   color: "green",
// };

// changeColor.call(sweater, "blue");
// console.log(sweater);

///* ============================================ */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log("increment -> this", this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log("decrement -> this", this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);

///* ============================================ */

const counter = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector(".js-decrement");
const incrementBtn = document.querySelector(".js-increment");
const valueEl = document.querySelector(".js-value");

decrementBtn.addEventListener("click", function () {
  console.log("Клік на декримент!");
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  console.log("Клік на інкрімент");
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});

///* ============================================ */

//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const { price, quantity } = this.stones.find(
//       ({ name }) => name === stoneName
//     );
//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald")); // 5200
// console.log(chopShop.calcTotalPrice("Diamond")); // 8100
// console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
// console.log(chopShop.calcTotalPrice("Ruby")); // 1600

//* Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//       showCtx() {
//         console.log(this);
//       },
//     };
//     newContact.showCtx();
//     this.contacts.push(newContact);
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

// console.log(phonebook.contacts);

//*  Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:
//* read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.

//* add() - повертає суму збережених значень.

//* mult() - перемножує збережені значення та повертає результат.

// const culculator = {
//   read(a = 0, b = 0) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
// };

// console.log(culculator.read(8, 12));
// console.log(culculator.add());
// console.log(culculator.mult());

// console.log(culculator);

///*!======== Прототипне наслідування в JS ======*/

/* const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = "Mango";

console.log(dog);

console.log(animal.isPrototypeOf(dog));

console.log(dog.hasOwnProperty("name"));
console.log(dog.name);

console.log(dog.hasOwnProperty("legs"));
console.log(dog.legs); */

/* const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) console.log(key);
 */

/* const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;

  console.log(key);
} */

/* const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;

const dogKeys = Object.keys(dog);
console.log("🚀 ~ dogKeys:", dogKeys);
 */

// !===============Classes in JS ==============

/* class User {}

const mango = new User();
console.log("🚀 ~ mango:", mango);

const poly = new User();
console.log("🚀 ~ poly:", poly);
 */

/* class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango@mail.com");
console.log("🚀 ~ mango:", mango);

const poly = new User("Поли", "poly@mail.com");
console.log("🚀 ~ poly:", poly); */
/* 
class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});
console.log(mango);

const poly = new User({
  name: "Poly",

  email: "poly@mail.com",
});

console.log(poly);
 */

/* class User {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }

  getMail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const mango = new User({ name: "Mango", email: "mango@mail.com" });

console.log(mango.getMail());
mango.changeEmail("mango989@mail.com");
console.log(mango.getMail()); */
/* 
class User {
  name;
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getMail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  name: "Mango",
  email: "mango@mail.com",
});

console.log(mango.getMail());
// console.log(mango.#email);
 */

/* class User {
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (newEmail === "") {
      console.error("Помилка! Пошта не може бути порожнім рядком!");
      return;
    }

    this.#email = newEmail;
  }
}

const mango = new User({ name: "Mango", email: "mango@mail.com" });

console.log(mango.email);
mango.email = "mango903@mail.com";
console.log(mango.email);
mango.email = "";
 */
/* 
class User {
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  #email;
  #role;

  constructor({ email, role }) {
    this.#email = email;
    this.#role = role;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const mango = new User({
  email: "mango@mail.com",
  role: User.Roles.ADMIN,
});
// console.log(mango.Roles);
console.log(User.Roles);

console.log(mango.role);
mango.role = User.Roles.EDITOR;
console.log("🚀 ~ mango.role:", mango.role);
 */
/* 
class User {
  static #takeEmail = [];

  static isEmailTaken(email) {
    return User.#takeEmail.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takeEmail.push(email);
  }
}

const mango = new User({ email: "mango@mail.com" });

console.log(User.isEmailTaken("mango@mail.com"));
console.log(User.isEmailTaken("mago@mail.com")); */

/* class User {
  #email;

  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {}

const editor = new ContentEditor("mango@mail.com");

console.log(editor);
console.log(editor.email); */
/* 
class User {
  #email;
  constructor(email) {
    this.#email = email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });

console.log(editor);
console.log(editor.email);
editor.addPost("post-1");

console.log(editor.posts);
 */

// !=========ractice from the third lesson==========
/* 
class Car {
  static description = "Клас описує автомобіль!";

  static logInfo(carObj) {
    console.log("Car.logInfo -> carObj", carObj);
  }

  #model;
  #price;

  constructor({ brand, model, price }) {
    this.brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }
}

const carInstance = new Car({
  brand: "Audi",
  model: "A4",
  price: 11500,
});

console.log(carInstance.price);
console.log(carInstance.model);
carInstance.price = 25000;
console.log(carInstance.price);
carInstance.model = "A7";
console.log(carInstance.model);

console.log(carInstance); */

// class Hero {
//   constructor({ name = "hero", xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     if (amount === undefined) {
//       console.log(`${this.name} отримує 0 досвіду`);
//       return this.xp;
//     }
//     console.log(`${this.name} отримує ${amount} досвіду`);
//     return (this.xp += amount);
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps);

//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(
//       `${this.name} атакує, використовуючи дану зброю ${this.weapon}`
//     );
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warcry, ...restProps } = {}) {
//     super(restProps);
//     this.warcry = warcry;
//   }

//   babyRage() {
//     console.log(this.warcry);
//   }
// }

// const ajax = new Berserk({
//   name: "ajax",
//   xp: 500,
//   weapon: "axe",
//   warcry: "waaaaaah",
// });

// console.log(ajax);

// ajax.babyRage();

// ajax.attack();
// console.log(ajax.gainXp());
// console.log(ajax.gainXp(500));

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//     super(restProps);
//     this.spells = spells;
//   }

//   cast() {
//     console.log(`${this.name} щочь там кастує 🧙‍♂️`);
//   }
// }

// const mango = new Warrior({ name: "mango", xp: 1000, weapon: "алебарда" });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: "poly", xp: 500, spells: ["фаербол"] });
// console.log(poly);
// poly.cast();
// poly.gainXp(200);

// !=========ractice from the fourth lesson==========

/* class User {
  static calculateBirthDate(age) {
    return 2024 - age;
  }

  constructor(userName, userAge) {
    this.name = userName;
    this.age = userAge;
  }

  greeting() {
    console.log(
      `Hello, ${this.name}! You was born in ${User.calculateBirthDate(
        this.age
      )}`
    );
  }
}

const user = new User("Serg", 25);
const user1 = new User("Olena", 24);
const user2 = new User("Roman", 28);
user.greeting();
user1.greeting();
user2.greeting();

console.log(user);
console.log(user1);
console.log(user2);

console.log(User.calculateBirthDate(57));
 */

//! ====================================

// Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер

// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

/* class Blogger {
  constructor({ email, age, numberOfPosts, topics } = {}) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const mango = new Blogger({
  name: "mango@mail.com",
  age: 24,
  numberOfPosts: 20,
  topics: ["tech", "cooking"],
});

console.log(mango.getInfo());
mango.updatePostCount(5);
console.log(mango.getInfo());

const poly = new Blogger({
  name: "poly@mail.com",
  age: 19,
  numberOfPosts: 17,
  topics: ["sports", "gaming", "health"],
});
console.log(poly.getInfo());
poly.updatePostCount(4);
console.log(poly.getInfo()); */

//! ====================================

// Example 2 - Сховище
// Напиши клас Storage який створює об'єкти для керування складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

/* class Storage {
  constructor(arr = []) {
    this.arr = arr;
  }

  getItems() {
    return this.arr;
  }

  addItem(item) {
    this.arr.push(item);
  }

  removeItem(item) {
    this.arr = this.arr.filter((el) => el !== item);
  }
}

const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

console.log(storage);

storage.addItem("🍌");
console.table(storage.arr);

storage.removeItem("🍋");
console.table(storage.arr); */

// Example 3 - User
// Напиши клас User який створює об'єкт із властивостями login та email. Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

/* class User {
  #login;
  #email;

  constructor({ login, email } = {}) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    if (!Number.isNaN(Number(newLogin))) {
      console.log("Логін не може бути числом!");
    } else this.#login = newLogin;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({
  login: "Mango",
  email: "mango@dog.woof",
});

console.log(mango);

console.log(mango.login);
console.log(mango.email);
 */

// Example 4 - Нотатки
// Напиши клас Notes який керує колекцією нотаток у властивості items. Замітка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

/* class Notes {
  static Priority = {
    LOW: "low",
    NORMAL: "normal",
    HIGH: "high",
  };

  static findIndexByText(items, text) {
    return items.findIndex(({ text: noteText }) => text === noteText);
  }

  constructor(items = []) {
    this.items = items;
  }

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const index = Notes.findIndexByText(this.items, text);
    this.items.splice(index, 1);
  }

  updatePriority(text, newPrioriry) {
    const index = Notes.findIndexByText(this.items, text);
    this.items[index].priority = newPrioriry;
  }
}

const myNotes = new Notes([]);

myNotes.addNote({ text: "Моя перша замітка", priority: Notes.Priority.LOW });

console.log(myNotes);

myNotes.addNote({
  text: "Моя друга замітка",
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote("Моя перша замітка");
console.log(myNotes.items);

myNotes.updatePriority("Моя друга замітка", Notes.Priority.HIGH);
console.log(myNotes.items); */

/* //! ====================================
class Rectangle {
  constructor(a, b) {
    this.name = "Rectangle";
    this.a = a;
    this.b = b;
  }

  greeting() {
    console.log(`Hello! I am ${this.name}`);
  }

  calculateArea() {
    return this.a * this.b;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
}

const rec = new Rectangle(4, 3);

console.log(rec);

rec.greeting();
console.log(rec.calculateArea());

const square = new Square(19);
console.log(square);

square.greeting();
console.log(square.calculateArea());
 */

// ! ========Exercises from homework===========
// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

/* 
const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  // Change code below this line
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
  // Change code above this line
}; */

// ?==============================================
// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
/* const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"] */
// ?==============================================

/* const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  },
  // Change code above this line
}; */

// ?==============================================

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

/* const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};
// Change code below this line

const child = Object.create(parent);

// Change code above this line
child.name = "Jason";
child.age = 27;
 */

// ?==============================================
// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.
/* const ancestor = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};
// Change code below this line

const parent = Object.create(ancestor);
parent.name = "Stacey";
parent.surname = "Moore";
parent.age = 54;

const child = Object.create(parent);
child.name = "Jason";
child.age = 27; */

// ?==============================================

/* Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

class Car{} 
new Car() */

// ?==============================================
// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

/* class Car {
  // Change code below this line
constructor(brand, model, price){
this.brand = brand;
this.model = model;
this.price = price;
}
} */

// ?==============================================
// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.
/* 
class Car {
  // Change code below this line
  constructor({brand, model, price}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code above this line
} */

// ?==============================================
// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.
/* class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  // Change code below this line
getPrice(){
return this.price; 
}

changePrice(newPrice){
this.price = newPrice;
}

} */

// ?==============================================

/* Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент - початковий масив товарів, який записується до створеного об'єкта в властивість items.

Оголоси наступні методи класу:

getItems() - повертає масив поточних товарів у властивості items.
addItem(newItem) - приймає новий товар newItem і додає його до масиву товарів у властивості items об'єкта.
removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта.
Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй. */

/* class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter((el) => el !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());
 */

// ?==============================================

/* Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

getValue() - повертає поточне значення властивості value.
padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй. */

/* class StringBuilder {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  padEnd(str) {
    this.value = this.value + str;
  }

  padStart(str) {
    this.value = str + this.value;
  }

  padBoth(str) {
    this.value = str += this.value + str;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); */

// ?==============================================
// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

/* class Car {

  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }


} */

// ?==============================================
// Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

/* 
class Storage {

   #items;
  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 
storage.addItem("Droid");
console.log(storage.getItems()); 
storage.removeItem("Prolonger");
console.log(storage.getItems()); */

// ?==============================================

// Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

/* class StringBuilder {
  // Change code below this line
   #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^=" */

// ?==============================================
// Виконай рефакторинг класу Car. Зроби властивості model і price приватними, а також #brand. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.
/* class Car {
  // Change code below this line
  #brand;
  #model;
  #price;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }

} */

// ?==============================================
// Виконай рефакторинг класу Car. Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.
/* class Car {
  // Change code below this line
    static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
      if(newPrice > Car.MAX_PRICE){
     return
}
    this.#price = newPrice;
  }
  // Change code above this line
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); */

// ?==============================================
/* Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price). */
/* 
class Car {
  static #MAX_PRICE = 50000;
  // Change code below this line
   static checkPrice (price){
    if(price > Car.#MAX_PRICE){
return "Error! Price exceeds the maximum"
}
return "Success! Price is within acceptable limits"
}


  // Change code above this line
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); 
console.log(Car.checkPrice(bmw.price)); */

// ?==============================================
/* У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

Оголоси клас Admin, який наслідує від класу User
Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"} */
// ?==============================================

/* class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Change code below this line
class Admin extends User {
  static AccessLevel = { BASIC: "basic", SUPERUSER: "superuser" };
}
 */

// ?==============================================
// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel. Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

constructor({email, accessLevel}){
super(email)
 this.accessLevel = accessLevel
}

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); 
console.log(mango.accessLevel); */

// ?==============================================
// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

/* class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
    this.blacklistedEmails = [];
  }


blacklist(email){
this.blacklistedEmails.push(email)
}

isBlacklisted(email){
return this.blacklistedEmails.includes(email)
}

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")) */
