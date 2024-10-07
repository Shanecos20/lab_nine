import React, { useEffect } from 'react';
// Importing components from react-bootstrap for UI styling
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieItem(props) {
  // Using useEffect to log the movie details whenever 'mymovie' prop changes
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]);

  return (
    <Container className="mb-4">
      <Row className="justify-content-center">
        <Col md={8}>
          {/* Card component to display movie details */}
          <Card className="shadow-sm">
            {/* Displaying the title of the movie in the card header */}
            <Card.Header className="text-center" style={{ backgroundColor: '#6c757d', color: 'white' }}>
              {props.mymovie.Title}
            </Card.Header>
            <Card.Body className="text-center">
              {/* Displaying the movie poster image */}
              <Card.Img 
                variant="top" 
                src={props.mymovie.Poster} 
                alt={props.mymovie.Title} 
                className="img-fluid mb-3"
                style={{ maxHeight: '100%', maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
              />
              {/* Displaying the year of the movie in the footer */}
              <blockquote className="blockquote mb-0">
                <footer className="blockquote-footer">
                  Year: <cite title="Movie Year">{props.mymovie.Year}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieItem;
