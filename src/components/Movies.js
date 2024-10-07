import MovieItem from "./MovieItem";

// Movies component to render a list of MovieItem components
function Movies(props) {
    return (
        <div>
            {/* Looping through the 'myMovies' array and rendering a MovieItem for each movie */}
            {props.myMovies.map((movie) => (
                // Rendering a MovieItem component for each movie in the array
                <MovieItem mymovie={movie} key={movie.imdbID} />
            ))}
        </div>
    );
}

export default Movies;
