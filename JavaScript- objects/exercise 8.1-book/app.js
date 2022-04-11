const book = {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    type: "Fantasy",
    year: 1998,
    publisher: "Bloomsbury",
};

const bookDescription = (book) => {
    return `The book ${book.title} was written by ${book.author} in the year ${book.year}`;
};

console.log(bookDescription(book));
