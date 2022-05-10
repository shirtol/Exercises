class MovieInfo {
    constructor(json) {
        this.poster = json.Poster;
        this.title = json.Title;
        this.genre = json.Genre;
        this.year = json.Year;
        this.plot = json.Plot;
        this.director = json.Director;
        this.actors = json.Actors;
        this.ratings = json.Ratings;
    }
}

const movieDoesntExists = (moviesData) =>
    moviesData.Error === "Movie not found!";

const getMovieID = async () => {
    const input = document.querySelector("#user-input").value;
    try {
        const allMoviesWithThatName = await fetch(
            `http://www.omdbapi.com/?s=${input}&page=1&apikey=45618c55&`
        );

        moviesData = await allMoviesWithThatName.json();
        if (movieDoesntExists(moviesData)) {
            alert("this movie doesn't exists!");
            return null;
        }

        return moviesData.Search[0].imdbID;
    } catch (err) {
        console.log(err);
    }
};

const ratingWebsBelowThree = (movieInfoData) =>
    movieInfoData.Ratings.length < 3;

const getMovieInfo = async () => {
    try {
        const movieByID = await getMovieID();
        if (movieByID !== null) {
            const movieID = movieByID;
            const movieInfo = await fetch(
                `http://www.omdbapi.com/?i=${movieID}&apikey=45618c55&`
            );
            const movieInfoData = await movieInfo.json();
            if (ratingWebsBelowThree(movieInfoData)) {
                alert(
                    "The movie you a re searching for doesn't contain all the rating information"
                );
                return null;
            }

            return new MovieInfo(movieInfoData);
        }
    } catch (err) {
        console.log(err);
    }
    return null;
};

const getDOMElements = () => [
    document.querySelector(".img-container"),
    document.querySelector(".title"),
    document.querySelector(".genre"),
    document.querySelector(".year"),
    document.querySelector(".plot"),
    document.querySelector(".director"),
    document.querySelector(".actors"),
    document.querySelector(".ratings-container"),
];

const displayMovieInfo = async () => {
    const movieInfo = await getMovieInfo();

    if (movieInfo !== null) {
        const [
            imgEl,
            titleEl,
            genreEl,
            yearEl,
            plotEl,
            directorEl,
            actorsEl,
            ratingEl,
        ] = getDOMElements();
        imgEl.style.backgroundImage = "";
        titleEl.textContent = "Title: ";
        genreEl.textContent = "Genre: ";
        yearEl.textContent = "Year: ";
        plotEl.textContent = "Plot: ";
        directorEl.textContent = "Director: ";
        actorsEl.textContent = "Actors: ";
        [...ratingEl.children].forEach((child) => {
            child.textContent = `${child.getAttribute("data-rating")}: `;
        });

        document
            .querySelector(".movie-container")
            .classList.add("container-style");
        imgEl.style.backgroundImage = `url(${movieInfo.poster})`;
        titleEl.textContent += movieInfo.title;
        genreEl.textContent += movieInfo.genre;
        yearEl.textContent += movieInfo.year;
        plotEl.textContent += movieInfo.plot;
        directorEl.textContent += movieInfo.director;
        actorsEl.textContent += movieInfo.actors;
        for (let i = 0; i < [...ratingEl.children].length; i++) {
            [...ratingEl.children][i].textContent += movieInfo.ratings[i].Value;
        }
    }
    document.querySelector("input").value = "";
};

const addEvents = (btn, input) => {
    btn.addEventListener("click", displayMovieInfo);
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            displayMovieInfo();
        }
    });
};

addEvents(
    document.querySelector(".search-btn"),
    document.querySelector("input")
);

window.onload = () => {
    document.querySelector("input").focus();
};
