import { Link } from "react-router-dom";
import Config from "../../Config";
import Icon from "../Icon/Icon";
import placeholder from "../../Assets/placeholder.png";
import "./Card.scss";

export default function Movie({ item, clickScrollTop, media_type }) {
	return (
		<div className="card">
			<Icon id={item.id} media_type={media_type} item={item} />
			<img
				src={item.poster_path ? `${Config.IMG_ROOT}${item.poster_path}` : placeholder}
				alt={item.poster_path ? `Poster of ${item.title}` : `Poster of DVD`}
				className="card-image"
			/>
			<div className="card-body">
				{item.title ? <h3 className="card-title">{item.title}</h3> : null}
				{item.character ? (
					<>
						<h4>Character :</h4>
						<p className="card-txt">{item.character}</p>
					</>
				) : null}
				{item.release_date ? (
					<>
						<h4>Release date :</h4>
						<p className="card-txt">{item.release_date}</p>
					</>
				) : null}
				<Link className="link" onClick={(e) => clickScrollTop(e)} to={{ pathname: `/${media_type}/${item.id}` }}>
					<div className="card-btn">Go details</div>
				</Link>
			</div>
		</div>
	);
}
