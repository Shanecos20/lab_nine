import { useState } from "react";
import axios from "axios"; // Ensure axios is installed

function Create() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [poster, setPoster] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation: check if all fields are filled
    if (!title || !year || !poster) {
      alert("Please fill all fields before submitting.");
      return;
    }

    // Log the values to the console
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);

    const movie = {
      title: title,
      year: year,
      poster: poster
    };

    // Send POST request to the server
    axios.post('http://localhost:4000/api/movies', movie)
      .then((res) => {
        console.log(res.data);
        // Clear form after submission
        setTitle('');
        setYear('');
        setPoster('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        {/* Movie Title Input */}
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Movie Year Input */}
        <div className="form-group">
          <label>Add Movie Year: </label>
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>

        {/* Movie Poster Input */}
        <div className="form-group">
          <label>Add Movie Poster: </label>
          <input
            type="text"
            className="form-control"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <input type="submit" value="Add Movie" className="btn btn-primary" />
      </form>
    </div>
  );
}

export default Create;
