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

//1
console.log(Book);
//2
console.log(Book.title);
//3
Book.year = 2025;
console.log(Book.year);
//4
delete Book.author;
console.log(Book);
//5
Book.isBorrowed();
console.log(Book);
//6
console.log(Book.publisher);
//7
console.log(Book.publisher.location.city);