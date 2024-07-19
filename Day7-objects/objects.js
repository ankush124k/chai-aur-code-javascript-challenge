// Activity 1

// Task 1
const bookStore = {
  title: "subtle art of not giving a fcuk",
  author: "Mark Manson",
  year: 2016,
};

console.log(bookStore);

// Task 2
console.log(bookStore.title);
console.log(bookStore.author);

// Activity 2

// Task 3
bookStore.getTitleAuthor = function () {
  return this.title + "by" + this.author;
};

console.log(bookStore.getTitleAuthor());

// Task 4
console.log("task 4");

let newbook = {
  title: "new book",
  author: "new author",
  year: 2000,
  updateYear: function (newYear) {
    this.year = newYear;
    console.log(this);
  },
};

newbook.updateYear(2015);

// Activity 3

// Task 5
const library = {
  name: "ankush library",
  books: [
    {
      title: "title 1",
      author: "author 1",
      year: 2001,
    },
    {
      title: "title 2",
      author: "author 2",
      year: 2002,
    },
  ],
};

console.log(library);

// Task 6
console.log(library.name);
library.books.map((item) => {
  console.log(item.title);
});

// Activity 4

// Task 7

let bookObj = {
  title: "new book",
  author: "new author",
  year: 2000,
  bookTitleYear: function () {
    return this.title + " by " + this.author;
  },
};
console.log(bookObj.bookTitleYear());

// Activity 5

// Task 8
const books = {
  title: "title 1",
  author: "author 1",
  year: 2001,
};

for (const key in books) {
   console.log(`${key} : ${books[key]}`);
}

// Task 9
console.log(Object.keys(books));
console.log(Object.values(books));


