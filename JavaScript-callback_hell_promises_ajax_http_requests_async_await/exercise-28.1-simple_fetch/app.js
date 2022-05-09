const displayJoke = ({ title, text }) => {
    let output = "<h2>Joke Of The Day:</h2>";
    output += `
            <div>
            <h3>${title}</h3>
            <p>${text}</p>
            </div>
            `;
    document.getElementById("output").innerHTML = output;
};

function fetchJoke() {
    fetch("https://api.jokes.one/jod")
        .then((res) => res.json())
        .then((res) => displayJoke(res.contents.jokes[0].joke));
}

document.querySelector("#fetch-joke").addEventListener("click", fetchJoke);
