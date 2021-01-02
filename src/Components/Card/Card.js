import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Config from '../../Config'
import placeholder from '../../Assets/placeholder.png'
import picture0 from '../../Assets/picture0.png'
import picture1 from '../../Assets/picture1.png'
import picture2 from '../../Assets/picture2.png'

export default function Cards(props) {

    const { movie, actor, actorMovie } = props;

    if (actor) {
        return (
            <Card style={{ width: '10rem', textAlign: 'center', marginRight: '1rem' }}>
                <div className="card-poster">
                    <Card.Img className="actor" variant="top" src={actor.profile_path !== null ? `${Config.IMG_ACTOR_ROOT}${actor.profile_path}` : actor.gender === 0 ? picture0 : actor.gender === 1 ? picture1 : picture2} alt={`Poster of ${actor.name}`}/>
                </div>
                <Card.Body>
                    <Card.Title>{actor.name}</Card.Title>
                    <Card.Text>
                        {actor.character}
                    </Card.Text>
                    <Button variant="primary" href={`/actor/${actor.id}`}>Go details</Button>
                </Card.Body>
            </Card>
        )
    }

    if (movie) {
        return (
            <Card style={{ width: '18rem' }}>
                <div className="card-poster">
                    <Card.Img variant="top" src={movie.poster_path !== null ? `${Config.IMG_ROOT}${movie.poster_path}` : placeholder} alt={movie.poster_path !== null ? `Poster of ${movie.title}` : `Poster of DVD`}/>
                </div>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        Release date : {movie.release_date}
                    </Card.Text>
                    <Button variant="primary" href={`/movie/${movie.id}`}>Go details</Button>
                </Card.Body>
            </Card>
        )
    }

    if (actorMovie) {
        return (
            <Card style={{ width: '18rem' }}>
                <div className="card-poster">
                    <Card.Img variant="top" src={actorMovie.poster_path !== null ? `${Config.IMG_ROOT}${actorMovie.poster_path}` : placeholder} alt={actorMovie.poster_path !== null ? `Poster of ${actorMovie.title}` : `Poster of DVD`}/>
                </div>
                <Card.Body>
                    <Card.Title>{actorMovie.title}</Card.Title>
                    <Card.Text>
                        Character : {actorMovie.character}
                    </Card.Text>
                    <Button variant="primary" href={`/movie/${actorMovie.id}`}>Go details</Button>
                </Card.Body>
            </Card>
        )
    }
}
