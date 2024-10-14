import React from 'react';  // Import React
import MovieItem from './MovieItem';  // Import MovieItem component

// Movies component to render a list of MovieItem components
const Movies = ({ myMovies }) => (
    <div>
        {myMovies?.map(movie => (
            <MovieItem mymovie={movie} key={movie.imdbID} />  // Rendering each movie item
        ))}
    </div>
);

export default Movies;
