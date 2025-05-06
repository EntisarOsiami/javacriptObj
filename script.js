Book = {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    year: 1954,
    isAvailable: true,
    isBorrowed: function () {
        this.isAvailable = false;
        console.log(`The book: ${Book.title} is borrowed.`);
    },
    publisher: {
        name: "Allen & Unwin",
        year: 1954,
        location: {
            city: "London",
            country: "United Kingdom"
        }
    },

}

console.log(Book);
console.log(Book.title);

Book.year = 2025;
console.log(Book.year);

Book.isBorrowed();
console.log(Book);

console.log(Book.publisher);

console.log(Book.publisher.location.city);