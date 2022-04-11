const firstBook = {
    name: "Harry Potter and the Chamber of Secrets",
    author: "J. K. Rowling",
    year: 1998,
};

const secondBook = {
    name: "Memoirs of a Geisha",
    author: "Arthur Golden",
    year: 1997,
};

const bookUtils = {
    getFirstPublished(book1, book2) {
        return book1.year < book2.year ? book1 : book2;
    },

    setNewEdition(book, editionYear) {
        book["latestEdition"] = editionYear;
    },

    setLanguage(book, language) {
        book["language"] = language;
    },

    setTranslation(book, language, translator) {
        book["translation"] = {
            translator: translator,
            language: language,
        };
    },

    setPublisher(book, name, location) {
        book["publisher"] = {
            name: name,
            location: location,
        };
    },

    isSamePublisher(book1, book2) {
        return (
            book1.publisher.location === book2.publisher.location &&
            book1.publisher.name === book2.publisher.name
        );
    },
};

console.log(bookUtils.getFirstPublished(firstBook, secondBook));
bookUtils.setTranslation(firstBook, "Hebrew", "Lala");
console.log(firstBook);

bookUtils.setPublisher(firstBook, "hi", "hi");
bookUtils.setPublisher(secondBook, "hi", "hi");

console.log(bookUtils.isSamePublisher(firstBook, secondBook));
