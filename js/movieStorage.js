console.log('Start');

let movieDatabase = [];

const createMovieList = (movieTitle, movieYear, cast, studio, movieImage) => {
        const movies ={
            title: movieTitle,
            year: movieYear,
            cast: cast,
            studio: studio,
            image: movieImage
        }
        movieDatabase.push(movies)
}

createMovieList('Friday', '1995', 'Ice Cube, Chris Tucker', 'New Line Cinema')
createMovieList('Belly', '1998', 'DMX, Nas, Method Man', 'Artisan',)
console.log(movieDatabase)