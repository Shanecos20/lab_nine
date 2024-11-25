import React from 'react';  // Import React
import MovieItem from './MovieItem';  // Import MovieItem component

// Movies component to render a list of MovieItem components
function Movies(props) {
    return (
        <>
            {props.myMovies?.map((movie) => (
                <MovieItem
                    mymovie={movie}         // Pass each movie to the MovieItem component
                    key={movie._id}         // Use _id as the unique key
                    Reload={props.ReloadData} // Pass ReloadData function to reload movies
                />
            ))}
        </>
    );
}

export default Movies;
