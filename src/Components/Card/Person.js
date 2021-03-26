import { Link } from "react-router-dom";
import Config from "../../Config";
import Icon from "../Icon/Icon";
import picture0 from "../../Assets/picture0.png";
import picture1 from "../../Assets/picture1.png";
import picture2 from "../../Assets/picture2.png";
import "./Card.scss";

export default function Person({ item, clickScrollTop, media_type }) {
	return (
		<div className="card">
			<Icon id={item.id} media_type={media_type} item={item} />
			<img
				src={
					item.profile_path
						? `${Config.IMG_ACTOR_ROOT}${item.profile_path}`
						: item.gender === 0
						? picture0
						: item.gender === 1
						? picture1
						: picture2
				}
				alt={`Poster of ${item.name}`}
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
				<Link className="link" onClick={(e) => clickScrollTop(e)} to={{ pathname: `/person/${item.id}` }}>
					<div className="card-btn">Go details</div>
				</Link>
			</div>
		</div>
	);
}
