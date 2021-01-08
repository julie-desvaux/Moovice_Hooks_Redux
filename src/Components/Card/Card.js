import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import Config from '../../Config'
import placeholder from '../../Assets/placeholder.png'
import picture0 from '../../Assets/picture0.png'
import picture1 from '../../Assets/picture1.png'
import picture2 from '../../Assets/picture2.png'
import './Card.scss'

export default function Cards(props) {

    const { movie, actor, actorMovie } = props;
    const url = window.location.href

    console.log(url)

    if (actor) {
        return (
            <div className="card">
                <img src={actor.profile_path ? `${Config.IMG_ACTOR_ROOT}${actor.profile_path}` : actor.gender === 0 ? picture0 : actor.gender === 1 ? picture1 : picture2} alt={`Poster of ${actor.name}`} className="card-image"/>
                <div className="card-body">
                    <h3 className="card-title">{actor.name}</h3>
                    <h4>Character :</h4>
                    <p className="card-txt">{actor.character}</p>
                    <Link
                        className="link"
                        onClick={Scroll.scroller.scrollTo("container", {
                            duration: 150,
                            delay: 100,
                            smooth: true,
                            offset: -500,
                        })}
                        to={{pathname: `/actor/${actor.id}`}}
                    >
                        <div className="card-btn">Go details</div>
                    </Link>
                </div>
            </div>
        )
    }

    if (movie) {
        return (
            <div className="card">
                <img 
                    src={movie.poster_path ? 
                        `${Config.IMG_ROOT}${movie.poster_path}` 
                        : movie.name ? movie.profile_path ? `${Config.IMG_ACTOR_ROOT}${movie.profile_path}` : picture0 : placeholder} 
                    alt={movie.poster_path ? 
                        `Poster of ${movie.title}` 
                        : movie.name ? `Picture of ${movie.name}` : `Poster of DVD`} 
                    className="card-image"
                />
                <div className="card-body">
                    {movie.title ?
                        <h3 className="card-title">{movie.title}</h3>
                        : movie.name ?
                            <h3 className="card-title">{movie.name}</h3>
                            : null
                    }
                    {movie.release_date ?
                        <>
                            <h4>Release date :</h4>
                            <p className="card-txt">{movie.release_date}</p>
                        </>
                        : null
                    }
                    <Link
                        className="link"
                        onClick={Scroll.scroller.scrollTo("container", {
                            duration: 150,
                            delay: 100,
                            smooth: true,
                            offset: -500,
                        })}
                        to={{pathname: movie.media_type ? movie.media_type !== "person" ? `/${movie.media_type}/${movie.id}` : `/actor/${movie.id}` : `/movie/${movie.id}`}}
                    >
                        <div className="card-btn">Go details</div>
                    </Link>
                </div>
            </div>
        )
    }

    if (actorMovie) {
        return (
            <div className="card">
                <img src={actorMovie.poster_path !== null ? `${Config.IMG_ROOT}${actorMovie.poster_path}` : placeholder} alt={actorMovie.poster_path !== null ? `Poster of ${actorMovie.title}` : `Poster of DVD`} className="card-image"/>
                <div className="card-body">
                    <h3 className="card-title">{actorMovie.title}</h3>
                    <h4>Character :</h4>
                    <p className="card-txt">{actorMovie.character}</p>
                    <Link
                        className="link"
                        onClick={Scroll.scroller.scrollTo("container", {
                            duration: 150,
                            delay: 100,
                            smooth: true,
                            offset: -500,
                        })}
                        
                        to={{pathname: `/movie/${actorMovie.id}`}}
                    >
                        <div className="card-btn">Go details</div>
                    </Link>
                </div>
            </div>
        )
    }
}
