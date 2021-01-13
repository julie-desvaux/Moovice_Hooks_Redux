import * as Scroll from 'react-scroll'
import { Link } from 'react-router-dom'
import Config from '../../Config'
import Icon from '../Icon/Icon'
import placeholder from '../../Assets/placeholder.png'
import picture0 from '../../Assets/picture0.png'
import picture1 from '../../Assets/picture1.png'
import picture2 from '../../Assets/picture2.png'
import './Card.scss'

export default function Cards({ item, media_type }) {

    const clickScrollTop = (e) => {
        if (e.target.className !== "card-btn") {
            Scroll.scroller.scrollTo("container", {
                duration: 150,
                delay: 100,
                smooth: true,
                offset: -500,
            })
        }
    }

    if (media_type === "person") {
        return (
            <div className="card">
                <Icon 
                    id={item.id}
                    media_type={media_type}
                    item={item}
                />
                <img src={item.profile_path ? `${Config.IMG_ACTOR_ROOT}${item.profile_path}` : item.gender === 0 ? picture0 : item.gender === 1 ? picture1 : picture2} alt={`Poster of ${item.name}`} className="card-image"/>
                <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    {item.character ? 
                        (
                            <>
                                <h4>Character :</h4>
                                <p className="card-txt">{item.character}</p>
                            </>
                        ): null
                    }
                    <Link
                        className="link"
                        onClick={(e) => clickScrollTop(e)}
                        to={{pathname: `/person/${item.id}`}}
                    >
                        <div className="card-btn">Go details</div>
                    </Link>
                </div>
            </div>
        )
    }

    if (media_type === "movie") {
        return (
            <div className="card">        
                <Icon 
                    id={item.id}
                    media_type={media_type}
                    item={item}
                />
                <img 
                    src={item.poster_path ? `${Config.IMG_ROOT}${item.poster_path}` : placeholder} 
                    alt={item.poster_path ? `Poster of ${item.title}` : `Poster of DVD`} 
                    className="card-image"
                />
                <div className="card-body">
                    {item.title ?
                        <h3 className="card-title">{item.title}</h3>
                        : null
                    }
                    {item.release_date ?
                        <>
                            <h4>Release date :</h4>
                            <p className="card-txt">{item.release_date}</p>
                        </>
                        : null
                    }
                    <Link
                        className="link"
                        onClick={(e) => clickScrollTop(e)}
                        to={{pathname: `/${media_type}/${item.id}`}}
                    >
                        <div className="card-btn">Go details</div>
                    </Link>
                </div>
            </div>
        )
    }

    if (media_type === "tv") {
        return (
            <div className="card">
                <Icon 
                    id={item.id}
                    media_type={media_type}
                    item={item}
                />
                <img src={item.poster_path !== null ? `${Config.IMG_ROOT}${item.poster_path}` : placeholder} alt={item.poster_path !== null ? `Poster of ${item.name}` : `Poster of DVD`} className="card-image"/>
                <div className="card-body">
                    <h3 className="card-title">{item.name}</h3>
                    {/* <h4>Character :</h4>
                    <p className="card-txt">{item.character}</p> */}
                    <Link
                        className="link"
                        onClick={(e) => clickScrollTop(e)}
                        to={{pathname: `/${media_type}/${item.id}`}}
                    >
                        <div className="card-btn">Go details</div>
                    </Link>
                </div>
            </div>
        )
    }
}
