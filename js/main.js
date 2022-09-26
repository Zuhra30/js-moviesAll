let elMoviesSiteForm = utilsEl("#js-movies-site-form");
let elMoviesTextInput = utilsEl("#js-movies-input-text");
let elMoviesButton = utilsEl("#js-movies-button");
let elMoviesList = utilsEl("#js-movies-list");

let normalMovies = movies.map((movie, i) => {
    return {
    id: i + 1,
    title: movie.Title.toString(),
    fulltitle: movie.fulltitle,
    year: movie.movie_year,
    categories: movie.Categories.split(" | "),
    imageURL: movie.ImageURL,
    imdbId: movie.imdb_id,
    imdbRating: movie.imdb_rating,
    youtubeId: movie.ytid,
    };
});


for(let i = 0; i < normalMovies.length; i++) {
    const film = normalMovies[i];
    if(i <= 20) {
        let liFilmElement = createElementUtils("li", "wrapper-list");
        let imgFilmElement = createElementUtils("img", "wrapper-img")
        let headingFilmElement = createElementUtils("h4", "wrapper-heading mt-2", film.title);
        let textFilmElement = createElementUtils("p", "wrapper-text", film.categories);
        let spanFilmElement = createElementUtils("span", "wrapper-span d-block", film.year);
            
        liFilmElement.appendChild(imgFilmElement);
        liFilmElement.appendChild(headingFilmElement);
        liFilmElement.appendChild(textFilmElement);
        liFilmElement.appendChild(spanFilmElement);

        imgFilmElement.setAttribute("src", "https://via.placeholder.com/350");

        elMoviesList.appendChild(liFilmElement);
    }
}


elMoviesSiteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let textInputValue = elMoviesTextInput.value;

    let searchResult = [];
    let searchQuery = new RegExp (textInputValue, "gi");

    normalMovies.forEach(movie => {
        if(textInputValue === ''){
            elMoviesList.innerHTML = '';
        }else if (movie.title.match(searchQuery)){
            searchResult.push(movie);
        }

        elMoviesList.innerHTML = " ";

        searchResult.forEach(media => {
            let liElement = createElementUtils("li", "wrapper-list");
            let imgElement = createElementUtils("img", "wrapper-img")
            let headingElement = createElementUtils("h4", "wrapper-heading mt-2", media.title);
            let textElement = createElementUtils("p", "wrapper-text", media.categories);
            let spanElement = createElementUtils("span", "wrapper-span d-block", media.year);


            liElement.appendChild(imgElement);
            liElement.appendChild(headingElement);
            liElement.appendChild(textElement);
            liElement.appendChild(spanElement);
        
            imgElement.setAttribute("src", "https://via.placeholder.com/350");
        
            elMoviesList.appendChild(liElement);
        })
    })

    elMoviesSiteForm.reset();
    elMoviesTextInput.focus();
})














































// elMoviesButton.addEventListener("click", () => {

//     let textInputValue = elMoviesTextInput.value;

//     let searchResult = [];
//     let searchQuery = new RegExp(textInputValue, "gi");

//     elMoviesList.innerHTML = "";

//     normalMovies.forEach((movie) => {
//         if (movie.title.match(searchQuery)) {
//             searchResult.push(movie);
//         }
//         searchResult.forEach((movie) => {
//         let liElement = createElementUtils("li", "wrapper-list");
//         let imgElement = createElementUtils("img", "wrapper-img")
//         let headingElement = createElementUtils("h4", "wrapper-heading mt-2", movie.title);
//         let textElement = createElementUtils("p", "wrapper-text", movie.categories);
//         let spanElement = createElementUtils("span", "wrapper-span d-block", movie.year);
    
//         liElement.appendChild(imgElement);
//         liElement.appendChild(headingElement);
//         liElement.appendChild(textElement);
//         liElement.appendChild(spanElement);
    
//         imgElement.setAttribute("src", "https://via.placeholder.com/350")
    
//         elMoviesList.appendChild(liElement);
//             });
    
//         });

//     console.log(searchResult);

// });
// normalMovies.forEach((movie) => {
//     let liElement = createElementUtils("li", "wrapper-list");
//     let imgElement = createElementUtils("img", "wrapper-img")
//     let headingElement = createElementUtils("h4", "wrapper-heading mt-2", movie.title);
//     let textElement = createElementUtils("p", "wrapper-text", movie.categories);
//     let spanElement = createElementUtils("span", "wrapper-span d-block", movie.year);

//     liElement.appendChild(imgElement);
//     liElement.appendChild(headingElement);
//     liElement.appendChild(textElement);
//     liElement.appendChild(spanElement);

//     imgElement.setAttribute("src", "https://via.placeholder.com/350")

//     elMoviesList.appendChild(liElement);

//     });

