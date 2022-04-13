const library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

const displayReadableBooks = (booksArr) => {
    return booksArr.filter((book) => book.readingStatus);
};

console.log(displayReadableBooks(library));
