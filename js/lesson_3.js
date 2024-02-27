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

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

console.table(friends);

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

const getFriendsByStatus = function (allFriends) {
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
