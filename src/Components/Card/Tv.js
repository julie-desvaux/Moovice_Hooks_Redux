import { Link } from "react-router-dom";
import Config from "../../Config";
import Icon from "../Icon/Icon";
import placeholder from "../../Assets/placeholder.png";
import "./Card.scss";

export default function TV({ item, clickScrollTop, media_type }) {
	return (
		<div className="card">
			<Icon id={item.id} media_type={media_type} item={item} />
			<img
				src={item.poster_path !== null ? `${Config.IMG_ROOT}${item.poster_path}` : placeholder}
				alt={item.poster_path !== null ? `Poster of ${item.name}` : `Poster of DVD`}
				className="card-image"
			/>
			<div className="card-body">
				<h3 className="card-title">{item.name}</h3>
				{item.character ? (
					<>
						<h4>Character :</h4>
						<p className="card-txt">{item.character}</p>
					</>
				) : null}
				<Link className="link" onClick={(e) => clickScrollTop(e)} to={{ pathname: `/${media_type}/${item.id}` }}>
					<div className="card-btn">Go details</div>
				</Link>
			</div>
		</div>
	);
}
