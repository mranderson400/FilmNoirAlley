const URL = "https://www.omdbapi.com/?t=";
const apiKey = "&apikey=ae352cd8";
const movies1930s = ["King Kong", "Gone with the Wind", "Snow White", "The Wizard of Oz", "Frankenstein"];

// Function for fetching a specific movie's details
function getMovie(event) {
    event.preventDefault();
    const movieResultDiv = document.querySelector('#movieResult');
    const movieName = document.querySelector('#searchBox').value;
    movieResultDiv.innerHTML = "Loading...";
    fetch(URL + movieName + apiKey)
        .then(response => response.json())
        .then(data => {
            let results = {
                'Actors': data.Actors,
                'Director': data.Director,
                'Title': data.Title,
                'Poster': data.Poster,
                'Genre': data.Genre
            };
            let img = document.createElement("img");
            img.src = data.Poster;
            img.alt = "Movie Poster";
            img.style.width = "200px";
            movieResultDiv.innerHTML = JSON.stringify(results);
            movieResultDiv.appendChild(img);
        })
        .catch(err => console.log(err));
}

// Function for fetching random movie posters from the 1930s
function getRandomMovies() {
    const posterContainer = document.querySelector('#posterContainer');
    posterContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const randomMovie = movies1930s[Math.floor(Math.random() * movies1930s.length)];
        fetch(URL + randomMovie + apiKey)
            .then(response => response.json())
            .then(data => {
                let img = document.createElement("img");
                img.src = data.Poster;
                img.alt = "Movie Poster from 1930s";
                img.style.width = "140px";
                img.style.height = "165px";
                posterContainer.appendChild(img);
            })
            .catch(err => console.log(err));
    }
}

// Call the function to display random posters
getRandomMovies();
