import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Importing components from react-bootstrap for UI styling
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function MovieItem(props) {
  // Destructure props for cleaner access
  const { mymovie, Reload } = props;

  // Log movie details whenever 'mymovie' prop changes
  useEffect(() => {
    console.log("Movie Item:", mymovie);
  }, [mymovie]);

  // Handler for deleting a movie
  const handleDelete = (e) => {
    e.preventDefault();
    // Confirm deletion with the user
    if (window.confirm(`Are you sure you want to delete "${mymovie.title}"?`)) {
      axios.delete(`http://localhost:4000/api/movie/${mymovie._id}`)
        .then(() => {
          Reload(); // Refresh the movie list after deletion
        })
        .catch((error) => {
          console.error("Error deleting movie:", error);
          alert("Failed to delete the movie. Please try again.");
        });
    }
  };

  return (
    <Container className="mb-4">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Card component to display movie details */}
          <Card className="shadow-sm">
            {/* Displaying the title of the movie in the card header */}
            <Card.Header 
              className="text-center" 
              style={{ backgroundColor: '#CCF7FF', color: 'black' }}
            >
              {mymovie.title}
            </Card.Header>
            <Card.Body className="text-center">
              {/* Displaying the movie poster image */}
              <Card.Img 
                variant="top" 
                src={mymovie.poster} 
                alt={mymovie.title} 
                className="img-fluid mb-3"
                style={{ maxHeight: '400px', maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
              />
              {/* Displaying the year of the movie */}
              <blockquote className="blockquote mb-0">
                <footer className="blockquote-footer">
                  Year: <cite title="Movie Year">{mymovie.year}</cite>
                </footer>
              </blockquote>
            </Card.Body>
            {/* Action buttons: Edit and Delete */}
            <Card.Footer className="text-center">
              <Link 
                to={`/edit/${mymovie._id}`} 
                className="btn btn-dark me-2"
              >
                Edit
              </Link>
              <Button 
                variant="danger" 
                onClick={handleDelete}
              >
                Delete
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieItem;
