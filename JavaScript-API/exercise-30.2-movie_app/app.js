class MovieInfo {
    constructor({
        Poster,
        Title,
        Genre,
        Year,
        Plot,
        Director,
        Actors,
        Ratings,
    }) {
        this.poster = Poster;
        this.title = Title;
        this.genre = Genre;
        this.year = Year;
        this.plot = Plot;
        this.director = Director;
        this.actors = Actors;
        this.ratings = Ratings;
    }
}

class MovieDOMEl {
    constructor() {
        this.img = document.querySelector(".img-container");
        this.title = document.querySelector(".title");
        this.genre = document.querySelector(".genre");
        this.year = document.querySelector(".year");
        this.plot = document.querySelector(".plot");
        this.director = document.querySelector(".director");
        this.actors = document.querySelector(".actors");
        this.rating = document.querySelector(".ratings-container");
    }
}

const isMovieExists = (moviesData) => moviesData.Error !== "Movie not found!";

const getMovieID = async () => {
    const input = document.querySelector("#user-input").value;
    try {
        const allMoviesWithThatName = await fetch(
            `http://www.omdbapi.com/?s=${input}&page=1&apikey=45618c55&`
        );

        moviesData = await allMoviesWithThatName.json();
        if (!isMovieExists(moviesData)) {
            alert("this movie doesn't exists!");
            return null;
        }

        return moviesData.Search[0].imdbID;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const ratingWebsBelowThree = (movieInfoData) =>
    movieInfoData.Ratings.length < 3;

const getMovieInfo = async () => {
    try {
        const movieID = await getMovieID();
        if (movieID !== null) {
            const movieInfo = await fetch(
                `http://www.omdbapi.com/?i=${movieID}&apikey=45618c55&`
            );
            const movieInfoData = await movieInfo.json();
            if (ratingWebsBelowThree(movieInfoData)) {
                alert(
                    "The movie you are searching for doesn't contain all the rating information"
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

const addStylingClasses = (movieEl) => {
    document.querySelector(".movie-container").classList.add("container-style");
    document.querySelector(".movie-container").classList.add("shadow");
    movieEl.img.classList.add("shadow");
};

const populateRatings = (movieEl, movieInfo) => {
    for (let i = 0; i < [...movieEl.rating.children].length; i++) {
        [...movieEl.rating.children][i].textContent = `${[
            ...movieEl.rating.children,
        ][i].getAttribute("data-rating")}: ${movieInfo.ratings[i].Value}`;
    }
};

const populateMovieInfo = (movieEl, movieInfo) => {
    movieEl.img.style.backgroundImage = `url(${movieInfo.poster})`;
    movieEl.title.textContent = `Title: ${movieInfo.title}`;
    movieEl.genre.textContent = `Genre: ${movieInfo.genre}`;
    movieEl.year.textContent = `year: ${movieInfo.year}`;
    movieEl.plot.textContent = `plot: ${movieInfo.plot}`;
    movieEl.director.textContent = `director: ${movieInfo.director}`;
    movieEl.actors.textContent = `actors: ${movieInfo.actors}`;
    populateRatings(movieEl, movieInfo);
};

const displayMovieInfo = async () => {
    try {
        const movieInfo = await getMovieInfo();

        if (movieInfo !== null) {
            const movieEl = new MovieDOMEl();
            addStylingClasses(movieEl);
            populateMovieInfo(movieEl, movieInfo);
        }
    } catch (err) {
        console.log(err);
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
