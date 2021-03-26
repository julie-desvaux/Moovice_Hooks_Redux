import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Config from "../../Config";
import axios from "axios";
import Card from "../../Components/Card";

export default function TvToday() {
	const [tvToday, setTvToday] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchDataTV() {
			const url = `${Config.API_ROOT}tv/airing_today?api_key=${Config.API_KEY}`;
			await axios.get(url).then((response) => {
				setTvToday(response.data.results);
			});
		}
		fetchDataTV();
	}, [dispatch]);

	if (!tvToday) {
		return null;
	}

	return (
		<div className="container">
			<h1 className="text-center title">Tv Today</h1>
			<div className="container-cards">
				{tvToday.map((tv) => {
					return <Card media_type="tv" item={tv} key={tv.id} />;
				})}
			</div>
		</div>
	);
}
