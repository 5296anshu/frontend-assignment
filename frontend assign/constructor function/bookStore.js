// Author constructor
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

// Method added to the Book prototype
Book.prototype.getBookInfo = function () {
    console.log(`
      Title: ${this.title}
      Author: ${this.author.name}
      Genre: ${this.genre}
      Price: $${this.price.toFixed(2)}
    `);
};

// Creating Author instances
let author1 = new Author("J.K. Rowling", 1965, "British");
let author2 = new Author("George Orwell", 1903, "British");

// Creating Book instances
let book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 19.99);
let book2 = new Book("1984", author2, "Dystopian", 15.99);

// Displaying book details
console.log("Bookstore Inventory:");
book1.getBookInfo();
book2.getBookInfo();
