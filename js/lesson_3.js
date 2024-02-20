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

const book = {
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
