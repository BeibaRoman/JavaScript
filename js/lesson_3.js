// Practice from compendium

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  generes: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book);
 */

/* const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: { country: "Jamaica", city: "Ocho Rios" },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

console.log(user);
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle);

const bookGenres = book.genres;
console.log(bookGenres);

const bookPrice = book.price;
console.log(bookPrice);
 */

/* const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swiming", "music", "sci-fi"],
};

console.log(user.name);
console.log(user.location);
console.log(user.location.country);
console.log(user.hobbies);
console.log(user.hobbies[2]);
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book["title"];
console.log(bookTitle);

const bookGenres = book["genres"];
console.log(bookGenres);

const propKey = "author";
const bookAuthor = book[propKey];
console.log(bookAuthor);
 */

// !Зміна значення властивості
/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("comedy");

console.log(book); */
// ! Додавання властивостей

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.oraginalLanguage = "en";
book.translation = ["ua"];

console.log(book); */

// ! shorthand properties

/* const name = "Генрі Сибола";
const age = 25;

const user = {
  name,
  age,
};

console.log(user); */

// ! computed properties

/* const propName = "name";

const user = {
  age: 25,
  [propName]: "Генрі Сибола",
};

console.log(user); */

//! Методи об'єкта

/* const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
  getBooks() {
    console.log("Цей метод буде повертати всі книги - властивість books");
  },
  addBook(bookName) {
    console.log("Цей метод буде додавати нову книгу у властивість books");
  },
};

bookShelf.getBooks();
bookShelf.addBook(); */

// ! Доступ до властивостей об'єкта в методах

/* const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    console.log(this);
  },
};

bookShelf.getBooks(); */

/* const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },

  removeBook(bookName) {
    const bookIndex = this.books.indexOf(bookName);
    this.books.splice(bookIndex, 1);
  },
};

console.log(bookShelf.getBooks());

bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");

console.log(bookShelf.getBooks());

bookShelf.removeBook("The Mist");
console.log(bookShelf.getBooks());
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key);
  console.log(book[key]);
}
 */

/* const animal = {
  legs: 4,
};

const dog = Object.create(animal);

console.log(dog);

dog.name = "Mango";

console.log(dog);
console.log(dog.name);
console.log(dog.legs); */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Corwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  if (book.hasOwnProperty(key)) {
    console.log(key);
    console.log(book[key]);
  }
}
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

const keys = Object.keys(book);

for (const key of keys) {
  console.log(key);
  console.log(book[key]);
} */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};

const keys = Object.keys(book);
console.log(keys);

const values = Object.values(book);
console.log(values); */

/* const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
};

const values = Object.values(goods);
console.log(values);

let total = 0;

for (const value of values) {
  total += value;
}

console.log(total);
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};

const keys = Object.keys(book);
console.log(keys);

const values = Object.values(book);
console.log(values);

const entries = Object.entries(book);
console.log(entries);
 */

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];
 */
/* const bookNames = [];
for (const book of books) {
  console.log(book);
  console.log(book.title);
  console.log(book.rating);
  console.log(book.author);
  bookNames.push(book.title);
}

console.log(bookNames);
 */

/* let totalRating = 0;

for (const book of books) {
  console.log(book.rating);
  totalRating += book.rating;
}

const averageRating = Number((totalRating / books.length).toFixed(1));
console.log(averageRating);
 */

/* const temps = [14, -4, 25, 8, 11];

console.log(Math.max(...temps));

console.log(temps);

const copyOfTemps = [...temps];
console.log(copyOfTemps);
 */

/* const lastWeekTemps = [14, 25, 11];

const currentWeekTemps = [23, 17, 18];

const allTemps = [...lastWeekTemps, ...lastWeekTemps];

console.log(lastWeekTemps);
console.log(currentWeekTemps);
console.log(allTemps); */

/* const first = { propA: 5, propB: 10 };
const second = { propC: 15 };

const third = { ...first, ...second };

console.log(first);
console.log(second);
console.log(third); */

/* const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15, propD: 20 };

const third = { ...first, ...second };

console.log(third);

const fourth = { ...second, ...first };

console.log(fourth); */

/* const first = { propA: 5, propB: 10, propC: 50 };
const second = { propC: 15 };

const third = { propB: 20, ...first, ...second };
console.log(third);

const fourth = { ...first, ...second, propB: 20 };
console.log(fourth);

const fifth = { ...first, propB: 20, ...second };
console.log(fifth);
 */

/* function multiply(...args) {
  console.log(args);
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4);
 */

/* function multiply(firstNumber, secondNumber, ...otherArgs) {
  console.log(firstNumber);
  console.log(secondNumber);
  console.log(otherArgs);
}

multiply(1, 2);
multiply(1, 2, 3);
multiply(1, 2, 3, 4); */

/* const playlist = {
  name: "Мой супер плейлист",
  rating: 5,
  tracks: ["трек-1", "трек-2", "трек-3"],
  changeName(newName) {
    this.name = newName;
  },
  addTrack(newTrack) {
    this.tracks.push(newTrack);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTracksCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTracksCount());

playlist.changeName("New Name ");

playlist.addTrack("new track - 1");

console.log(playlist.getTracksCount());

playlist.updateRating(8);
console.log(playlist);
 */

/* const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

console.log(feedback); */

/* const arrKey = Object.keys(feedback);

for (let i = 0; i < arrKey.length; i += 1) {
  console.log(feedback[arrKey[i]]);
} */

/* console.log(arrKey); */

/* const arrValues = Object.values(feedback);
console.log(arrValues);

for (const value of arrValues) {
  console.log(value);
}
 */

/* const arrEntries = Object.entries(feedback);
console.log(arrEntries);

for (const entry of arrEntries) {
  console.log(entry[entry.length - 1]);
}
 */

/* const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

console.table(friends); */

/* const findFriendByName = function (allfriends, friendName) {
  for (const friend of allfriends) {
    if (friend.name === friendName) {
      return "Знайшли друга!";
    }
  }
  return "Не знайшли друга!";
};

console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy")); */

// Отримуємо імена всіх друзів

/* const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    names.push(friend.name);
  }
  return names;
};

console.log(getAllNames(friends));
 */

// Отримуємо імена всіх друзів які онлайн

/* function getNamesByOnline(allFriends) {
  const nameByStatus = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    if (friend.online) {
      nameByStatus.push(friend.name);
    }
  }
  return nameByStatus;
}

console.log(getNamesByOnline(friends)); */

/* function getNamesByOffline(allFriends) {
  const nameByStatus = [];
  for (const friend of allFriends) {
    console.log(friend.name);
    if (!friend.online) {
      nameByStatus.push(friend.name);
    }
  }
  return nameByStatus;
}

console.log(getNamesByOffline(friends));
 */

/* const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    console.log(friend);

    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);
  }
  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const { title, author, genres, isPublic, rating, coverImage } = book;
console.log(title);
console.log(coverImage);

const accessType = isPublic ? "публічному" : "закритому";

const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
console.log(message);
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
};

const {
  title,
  author,
  coverImage = "https://via.placeholder.com/640/480",
} = book;

console.log(title);
console.log(author);
console.log(coverImage); */

/* const firstBook = {
  title: "The Last Kingdom",
  coverImage:
    "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};

const {
  title: firstTitle,
  coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log(firstTitle);
console.log(firstCoverImage); */

/* const secondBook = {
  title: "Сон смішної людини",
};

const {
  title: secondTitle,
  coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log(secondTitle);
console.log(secondCoverImage); */

/* const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
]; */

// for (const book of books) {
//   const { title, author, rating } = book;
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

/* for (const { title, author, rating } of books) {
  console.log(title);
  console.log(author);
  console.log(rating);
}
 */

/* const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  name,
  tag,
  stats: { followers, views, likes, userLikes = 0 },
} = user;

console.log(name);
console.log(tag);
console.log(followers);
console.log(views);
console.log(likes);
console.log(userLikes);
 */

/* const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red}, G:${green}, B:${blue}`);
 */

/* const rgb = [200, 255, 100];
let red, green, blue;

[red, green, blue] = rgb;
console.log(`R:${red},G:${green},B:${blue}`); */

/* const rgb = [200, 100, 255];

const [red, green, blue, alfa = 0.3] = rgb;
console.log(`R:${red}, G:${green}, B:${blue}, Alfa:${alfa}`); */

/* const rgb = [200, 255, 100];
const [red, ...colors] = rgb;

console.log(red);
console.log(colors);
 */

/* const rgb = [200, 100, 255];

const [, , blue] = rgb;

console.log(`Blue: ${blue}`);
 */

/* function doStuffWithBook(book) {
  console.log(book.title);
  console.log(book.numberOfPages);
  console.log(book.downloads);
  console.log(book.rating);
  console.log(book.isPublic);
}

doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
}); */

/* function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;

  console.log(title);
  console.log(numberOfPages);
  console.log(downloads);
  console.log(rating);
  console.log(isPublic);
}

doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
}); */

// !====================================================

/* function doStuffWithBook({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
  console.log(downloads);
  console.log(rating);
  console.log(isPublic);
}

doStuffWithBook({
  title: "The Last Kingdom",
  numberOfPages: 736,
  downloads: 10283,
  rating: 8.38,
  isPublic: true,
});
 */

/* function getGrade(s1, s2, s3) {
  // Code here
  const average = Math.round((s1 + s2 + s3) / 3);

  if (90 <= average && average <= 100) {
    return "A";
  }

  if (80 <= average && average < 90) {
    return "B";
  }

  if (70 <= average && average < 80) {
    return "C";
  }

  if (60 <= average && average < 70) {
    return "D";
  }

  if (0 <= average && average < 60) {
    return "F";
  }

  return "D" === "F";
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(85, 80, 83));

console.log(getGrade(70, 70, 70));
console.log(getGrade(58, 62, 52));

console.log(getGrade(528, 652, 522)); */
/* 
const propName = "name";
const user = {
  age: 25,
  [propName]: "Генрі Сибола",
};

console.log(user.name); // 'Генрі Сибола'
 */

/* const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}
 */

/* const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);
console.log(entries);

for (const [name, rating] of entries) {
  console.log(name, rating);
}
 */

/* const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const makeProfileMarkUp = function (userProfile) {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userProfile;

  return `<div>
  <img src="${avatar}" alt="user avatar">
  <p>${name}<span>@${tag}</span></p>
  <p>Location: ${location}</p>
  <ul>
    <li>Followers: ${followers}</li>
    <li>Views: ${views}</li>
    <li>Likes: ${likes}</li>
  </ul>
</div>`;
};

const makeup = makeProfileMarkUp(profile);
console.log(makeup);

document.body.insertAdjacentHTML("afterbegin", makeup); */
// ===============================================================

/* const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        // console.log("We found!!");
        item.quantity += 1;
        item.price += product.price;

        return;
      }
    }

    const newProduct = {
      ...product,
      quantity: 1,
    };

    this.items.push(newProduct);
  },
  remove(productName) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      if (productName === name) {
        items.splice(i, 1);
        return;
      }
    }
  },
  clear() {
    return (this.items = []);
  },
  countTotalPrice() {
    let totalPrice = 0;
    const { items } = this;

    for (const { price } of items) {
      // console.log(price);

      totalPrice += price;
    }
    return `Total price: ${totalPrice}`;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName.name) {
        console.log((item.quantity += 1));
        console.log((item.price += productName.price));
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName.name) {
        console.log((item.quantity -= 1));
        console.log((item.price -= productName.price));
      }
    }
  },
};

// console.log(cart.getItems());

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍇", price: 70 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍓", price: 110 });
cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍎", price: 50 });

// cart.remove("🍓");

// console.log(cart.clear());

console.log(cart.countTotalPrice());

cart.increaseQuantity({ name: "🍎", price: 50 });
cart.increaseQuantity({ name: "🍓", price: 110 });
cart.increaseQuantity({ name: "🍋", price: 60 });
console.table(cart.getItems());

cart.decreaseQuantity({ name: "🍋", price: 60 });

console.table(cart.getItems()); */

// !====================== Practice from third lesson ====================
//* Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:

//1. додає поле mood зі значенням 'happy'
//2. замінює значення hobby на 'skydiving'
//3. замінює значення premium на false
//4. виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

/* const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

console.log(user);

for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}
 */

//* Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

/* const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

const salariesArr = Object.values(salaries);

for (const salary of salariesArr) sum += salary;

console.log('Результат: 'sum);
 */

//* Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

/* const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 3 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  for (const stone of stones) {
    if (stone.name === stoneName) return stone.price * stone.quantity;
  }
  return `Камінь ${stoneName} не знайдено!`;
}

console.log(calcTotalPrice(stones, "Смарагд")); */

//! ======================================================

//* Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */

// const TRANSACTIONS = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   /*
//    * Кожна транзакція це об'єкт із властивостями: id, type та amount
//    */
//   createTransaction(amount, type) {
//     return {
//       amount,
//       type,
//       id: this.transactions.length,
//     };
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій
//    */
//   deposit(amount) {
//     this.balance += amount;
//     const transaction = this.createTransaction(amount, TRANSACTIONS.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму транзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * після чого додає його до історії транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("Недостатньо коштів на балансі");
//       return;
//     }
//     this.balance -= amount;
//     const transaction = this.createTransaction(amount, TRANSACTIONS.WITHDRAW);
//     this.transactions.push(transaction);
//   },

//   /*
//    * Метод повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзакції по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (transaction.id === id) {
//         return transaction;
//       }
//     }
//     return {};
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let total = 0;
//     for (const transaction of this.transactions) {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//     }
//     return total;
//   },
// };

// account.deposit(500);
// account.deposit(800);

// account.deposit(500);
// account.deposit(800);
// account.withdraw(200);
// account.withdraw(500);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(18));

// console.log(account.getTransactionTotal("deposit"));

//* Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

/* function transformUsername({ firstName, lastName, ...rest }) {
  //   rest.fullname = `${firstName} ${lastName}`;
  //   return rest;

  return {
    fullname: `${firstName} ${lastName}`,
    ...rest,
  };
}

console.log(
  transformUsername({
    id: 1,
    firstName: "Jacob",
    lastName: "Mercer",
    email: "j.mercer@mail.com",
    friendCount: 40,
  })
); */

// !=============================================

// Exercise 1
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

/* const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
console.log("🚀 ~ allScores:", allScores);
const bestScore = Math.max(...allScores);

console.log("🚀 ~ bestScore:", bestScore);
const worstScore = Math.min(...allScores);

console.log("🚀 ~ worstScore:", worstScore);
 */

//  !=============================================

// Exercise 2

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх них застосувати перевизначені налаштування. Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

/* const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };
 */

//  !=============================================

// Exercise 3

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми. Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

/* function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
  return {
    completed,
    category,
    priority,
    ...data,
  };
  // Change code above this line
}

console.log(makeTask({ category: "Finance", text: "Take interest" }));
 */

//  !=============================================

// Exercise 4

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів (параметр args), рахувала і повертала їх суму.

// Change code below this line
/* function add(...args) {
  // Change code above this line
  let total = 0;

  for (const item of args) {
    total += item;
  }
  return total;
}

console.log(add(12, 4, 11, 48)); */

//  !=============================================

// Exercise 5

// Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// Внеси зміни в параметри і тіло функції.
// Перший параметр повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args).
// Усередині функції ініціалізуй змінну з назвою total і присвой їй значення 0.
// Потім пройдись по кожному аргументу за допомогою циклу або методу ітерації.
// Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до total за допомогою оператора додавання (+=).
// На завершення поверни суму total.

/* function addOverNum(a, ...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > a) {
      total += arg;
    }
  }

  return total;
  // Change code above this line
}

console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
console.log(addOverNum(50, 15, 27));
 */

//  !=============================================

// Exercise 6

// Напиши функцію під назвою findMatches, яка приймає масив як перший аргумент і довільну кількість додаткових аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Функція має повернути новий масив, який містить лише ті числа з додаткових аргументів, які присутні в масиві, указаному як перший аргумент. Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) має повернути масив [1, 2], оскільки лише ці числа містяться в першому масиві аргументів.

// Поради:

// Використовуй параметр rest (...args), щоб зібрати всі додаткові аргументи в масив.
// Пройдись по кожному аргументу в args за допомогою циклу.
// Використовуй метод includes() для масиву, щоб перевірити, чи існує кожен аргумент у масиві.
// Якщо аргумент знайдено у масиві, додай його до масиву matches.
// Поверни масив matches.

// Change code below this line
/* function findMatches(arr, ...args) {
  const matches = []; // Don't change this line
  for (const arg of args) {
    if (arr.includes(arg)) matches.push(arg);
  }

  // Change code above this line
  return matches;
}

console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); */

//  !=============================================

// Exercise 7

// Розшир функціональні можливості об’єкта bookShelf, додавши два нові методи. Ці методи мають працювати подібно до існуючих методів getBooks() і addBook(bookName), але з іншими цілями.

// Метод removeBook(bookName) має повертати рядок у форматі "Deleting book <назва книги>", де <назва книги> — це значення параметра bookName.

// Метод updateBook(oldName, newName) має повертати рядок у форматі "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> є значеннями параметрів oldName і newName відповідно.

/* const bookShelf = {
  // Change code below this line
  books: ["The last kingdom", "The guardian of dreams"],
  getBooks() {
    return "Returning all books";
  },
  addBook(bookName) {
    return `Adding book ${bookName}`;
  },
  removeBook(bookName) {
    const index = this.books.indexOf(bookName);
    this.books.splice(index, 1);
    return `Deleting book ${bookName}`;
  },

  updateBook(oldName, newName) {
    const index = this.books.indexOf(oldName);
    this.books.splice(index, 1, newName);
    return `Updating book ${oldName} to ${newName}`;
  },
  // Change code above this line
};

console.log(bookShelf.removeBook("Red sunset"));
console.log(bookShelf.updateBook("Sands of dune", "Dune")); */

//  !=============================================

// Exercise 8

/* const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const { name } of this.potions) {
      if (name === newPotion.name) {
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      let name = this.potions[i].name;
      if (name === potionName) {
        this.potions.splice(i, 1);
        return;
      }
    }

    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i += 1) {
      // console.log(i);
      // console.log(this.potions[i]);
      // console.log(this.potions[i].name);
      if (this.potions[i].name === oldName) {
        console.log((this.potions[i].name = newName));
        return;
      }
    }

    return `Potion ${oldName} is not in inventory!`;
    // if (potionIndex === -1) {
    //
    // }

    // this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// console.log(atTheOldToad.addPotion({ name: "Drgon breath", price: 700 }));

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.removePotion("Speed potion"));
// console.log(atTheOldToad.removePotion("Stone skin"));
// console.log(atTheOldToad.removePotion("Stodfane skin"));
// console.log(atTheOldToad.removePotion("Stone skin"));

console.log(
  atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
);

console.log(atTheOldToad.updatePotionName("Dron breath", "Polymorth"));

console.log(atTheOldToad.getPotions());
 */
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

/* function calculateEngravingPrice(message, pricePerWord) {
  message = message.split(" ");
  let amountWords = 0;

  for (const word of message) {
    console.log(word);
    amountWords += 1;
  }
  return amountWords * pricePerWord;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
 */
/* 
function slugify(title) {
  // Change code below this line
  return title.split(" ").join("-").toLowerCase();

  // Change code above this line
}
console.log(slugify("Arrays for begginers"));
 */

/* function calculateTotal(number) {
  // Change code below this line
  let totalSum = 0;
  for (let i = 0; i <= number; i += 1) {
    console.log(i);
    totalSum += i;
  }

  // Change code above this line
  return totalSum;
}

console.log(calculateTotal(7));
console.log(calculateTotal(24));
 */

/* function findLongestWord(string) {
  // Change code below this line
  const wordsArray = string.split(" ");
  let longestWord = wordsArray[0];

  for (const word of wordsArray) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
  // Change code above this line
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
 */

/* function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }

  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(14, 17));
 */

/* function filterArray(numbers, value) {
  // Change code below this line
  const newArray = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
      newArray.push(numbers[i]);
    }
  }

  return newArray;
  // Change code above this line
}
console.log(filterArray([1, 2, 3, 4, 5], 3));
 */

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const newArray = [];
//   console.log(array1);
//   console.log(array2);
//   for (const item of array1) {
//     // console.log(item);
//     if (array2.includes(item)) {
//       newArray.push(item);
//     }
//   }

//   return newArray;
//   // Change code above this line
// }

/* function getCommonElements(array1, array2) {
  // Change code below this line
  const newArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) newArray.push(array1[i]);
  }

  return newArray;
  // Change code above this line
}

console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
 */

/* function getEvenNumbers(start, end) {
  // Change code below this line

  const newArray = [];

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      newArray.push(i);
    }
  }
  return newArray;
  // Change code above this line
}

console.log(getEvenNumbers(3, 11)); */

/* function includes(array, value) {
  // Change code below this line

  for (const item of array) {
    if (item === value) {
      return true;
    }
  }

  return false;

  // Change code above this line
}

includes([1, 2, 3, 4, 5], 17);
console.log(includes([1, 2, 3, 4, 5], 17));
console.log(includes([1, 2, 3, 4, 5], 3));
console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
 */
/* 
function solution(str) {
  let wordReverse = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    wordReverse += str[i];
  }
  return wordReverse;
}

console.log(solution("world"));
 */

/* var summation = function (num) {
  // Code here
  let sum = 0;
  for (let i = 1; i <= num; i += 1) {
    sum += i;
    console.log(i);
  }
  return sum;
};

console.log(summation(3));
 */
/* 
function validatePIN(pin) {
  //return true or false

  let pinStr = "";
  for (const item of pin) {
    if (Number.isInteger(Number(item))) {
      pinStr += item;
    }
  }
  return (pinStr.length === 4 || pinStr.length === 6) && pinStr.trim() === pin;
}

console.log(validatePIN("-1234"));
console.log(validatePIN("1236"));
console.log(validatePIN("123456x"));
console.log(validatePIN("123    ")); */

/* function longest(s1, s2) {
  // your code
  const arrayConcat = [...s1, ...s2];
  const newArray = [];

  for (let i = 0; i < arrayConcat.length; i += 1) {
    if (!newArray.includes(arrayConcat[i])) {
      newArray.push(arrayConcat[i]);
    }
  }
  return newArray.sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere")); */
