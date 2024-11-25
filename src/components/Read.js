import React, { useState, useEffect } from 'react'; // Importing necessary React hooks
import axios from 'axios'; // Importing axios for making HTTP requests
import Movies from './Movies'; // Importing the Movies component

// Read component to display and manage movie data
function Read() {
    const [data, setData] = useState([]); // State to hold fetched movie data

    // Function to fetch and reload movie data
    const Reload = () => {
        console.log("Reloading movie data...");
        axios.get('http://localhost:4000/api/movies')
            .then((response) => {
                setData(response.data.movies); // Update state with the 'movies' array from the response
            })
            .catch((error) => {
                console.error("Error reloading data:", error); // Log any errors if the request fails
            });
    };

    // useEffect hook to fetch movie data when the component mounts
    useEffect(() => {
        Reload(); // Initial data fetch
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        <div>
            <h1 className="text-center text-dark">Movies List</h1>
            {/* Passing the fetched data and Reload function to the Movies component as props */}
            <Movies myMovies={data} ReloadData={Reload} />
        </div>
    );
}

export default Read;
