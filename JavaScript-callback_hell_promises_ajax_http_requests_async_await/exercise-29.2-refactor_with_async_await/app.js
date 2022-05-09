async function fetchJoke() {
    const res = await fetch("https://api.jokes.one/jod");
    const resJSON = await res.json();
    let joke = resJSON.contents.jokes[0].joke;
    let output = "<h2>Joke Of The Day:</h2>";
    output += `
                    <div>
                    <h3>${joke.title}</h3>
                    <p>${joke.text}</p>
                    </div>
                    `;
    document.getElementById("output").innerHTML = output;
}

document.querySelector("#fetch-joke").addEventListener("click", fetchJoke);
