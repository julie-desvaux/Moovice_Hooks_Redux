import { useEffect, useState } from "react";
import { getItems, addItem, removeItem } from "../../Utils/localStorage";
import "./Icon.scss";

const _ = require("lodash");

export default function Icon({ id, media_type, item }) {
	const [icon, setIcon] = useState("favorite_border");

	useEffect(() => {
		let myList = getItems();

		const index = _.findIndex(myList, function (o) {
			return o.id === id && o.media_type === media_type;
		});
		if (index !== -1) {
			setIcon("favorite");
		}
	}, [id, media_type]);

	const handleAddFavorite = (id, media_type) => {
		let myList = getItems();

		if (icon === "favorite_border") {
			const favoriteTemp = {
				id,
				media_type,
				profile_path: item.profile_path,
				gender: item.gender,
				name: item.name,
				character: item.character,
				poster_path: item.poster_path,
				release_date: item.release_date,
				title: item.title,
			};
			addItem(myList, favoriteTemp);
			setIcon("favorite");
		} else {
			removeItem(myList, id, media_type);
			setIcon("favorite_border");
		}
	};

	return (
		<>
			<span className="material-icons favorite" onClick={() => handleAddFavorite(id, media_type)}>
				{icon}
			</span>
		</>
	);
}
