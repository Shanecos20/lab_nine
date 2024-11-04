import React, { useState, useEffect } from 'react';  // Importing necessary React hooks
import axios from 'axios';  // Importing axios for making HTTP requests
import Movies from './Movies';  // Importing the Movies component

// Read component to display movie data using the Movies component
const Read = () => {
    const [data, setData] = useState([]);  // State to hold fetched movie data

    // useEffect hook to fetch movie data when the component mounts
    useEffect(() => {
        // Making a GET request to fetch the movie data
        axios.get('http://localhost:4000/api/movies')
            .then(response => {
                // Update state with the 'movies' array from the response
                setData(response.data.movies);
            })
            .catch(error => {
                // Log any errors if the request fails
                console.error('Error fetching movie data:', error);
            });
    }, []);  // Empty dependency array means this runs once when the component mounts

    return (
        <div>
            <h1 className="text-center text-primary">Read Component!</h1>
            {/* Passing the fetched data to the Movies component as a prop */}
            <Movies myMovies={data} />
        </div>
    );
};

export default Read;
