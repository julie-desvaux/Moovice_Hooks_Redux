import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Config from '../../Config'
import placeholder from '../../placeholder.png';

export default function Cards(props) {

    const { movie } = props;

    return (

        <Card style={{ width: '18rem' }}>
            <div className="card-poster">
                <Card.Img variant="top" src={movie.poster_path !== null ? `${Config.IMG_ROOT}${movie.poster_path}` : placeholder} alt={movie.poster_path !== null ? `Poster of ${movie.title}` : `Poster of DVD`}/>
            </div>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    Release date: {movie.release_date}
                </Card.Text>
                <Button variant="primary" href={`/movie/${movie.id}`}>Go details</Button>
            </Card.Body>
        </Card>
    )
}
