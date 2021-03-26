import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Config from "../../Config";
import axios from "axios";
import Card from "../../Components/Card";

export default function TvOnAir() {
	// const { onAirTv } = useSelector(state => ({ ...state.popularReducer }))
	const [onAirTv, setOnAirTv] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchDataTV() {
			const url = `${Config.API_ROOT}tv/on_the_air?api_key=${Config.API_KEY}`;
			await axios.get(url).then((response) => {
				// console.log({response: response.data.results})
				// dispatch({
				//     type: 'ADD_ON_AIR_TV',
				//     payload: response.data.results
				// })
				setOnAirTv(response.data.results);
			});
		}
		fetchDataTV();
	}, [dispatch]);

	console.log({ onAirTv });

	if (!onAirTv) {
		return null;
	}

	return (
		<div className="container">
			<h1 className="text-center title">On Air</h1>
			<div className="container-cards">
				{onAirTv.map((tv) => {
					return <Card media_type="tv" item={tv} key={tv.id} />;
				})}
			</div>
		</div>
	);
}
