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

function transformUsername({ firstName, lastName, ...rest }) {
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
);
