import { useState } from "react";

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

        // Log the values to the console (replace with desired logic)
        console.log({
            title,
            year,
            poster
        });

        // Clear form after submission (optional)
        setTitle('');
        setYear('');
        setPoster('');
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
