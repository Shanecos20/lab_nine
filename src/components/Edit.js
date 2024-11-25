// Import necessary libraries and hooks
import React from 'react'; 
import { useParams } from 'react-router-dom'; // Hook to get parameters from the URL
import { useState, useEffect } from 'react'; // Hooks for state and lifecycle management
import axios from 'axios'; // HTTP client for API requests
import { useNavigate } from "react-router-dom"; // Hook to navigate programmatically

// Define and export the Edit component
export default function Edit(props) {
  // Get the "id" parameter from the URL
  let { id } = useParams();

  // Define state variables to manage form inputs
  const [title, setTitle] = useState(""); // State for movie title
  const [year, setYear] = useState(""); // State for movie release year
  const [poster, setPoster] = useState(""); // State for movie poster URL

  // Hook for navigation
  const navigate = useNavigate();

  // useEffect to fetch movie data when the component is mounted or when "id" changes
  useEffect(() => {
    // Fetch the movie data from the API using the movie ID
    axios.get('http://localhost:4000/api/movie/' + id)
      .then((response) => {
        // Update the state with the fetched data
        setTitle(response.data.title);
        setYear(response.data.year);
        setPoster(response.data.poster);
      })
      .catch((error) => {
        // Log any errors that occur during the fetch
        console.log(error);
      });
  }, [id]); // Dependency array to re-run this effect when "id" changes

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create an object with the updated movie data
    const newMovie = { id, title, year, poster };

    // Send a PUT request to update the movie data in the backend
    axios.put('http://localhost:4000/api/movie/' + id, newMovie)
      .then((res) => {
        // Log the server response
        console.log(res.data);
        // Navigate back to the "read" page after successful update
        navigate('/read');
      });
  }

  // Return the form to edit the movie details
  return (
    <div>
      {/* Form to edit movie details */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Title: </label>
          {/* Input field for movie title */}
          <input type="text" 
            className="form-control" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Release Year: </label>
          {/* Input field for release year */}
          <input type="text" 
            className="form-control" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Poster URL: </label>
          {/* Input field for poster URL */}
          <input type="text" 
            className="form-control" 
            value={poster} 
            onChange={(e) => setPoster(e.target.value)} />
        </div>
        <div className="form-group">
          {/* Submit button to save the changes */}
          <input type="submit" value="Edit Movie" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
