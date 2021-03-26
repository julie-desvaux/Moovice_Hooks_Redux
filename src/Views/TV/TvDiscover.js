import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Config from "../../Config";
import Card from "../../Components/Card";
import moment from "moment";
import axios from "axios";

export default function TvDiscover() {
	const { discoverTv } = useSelector((state) => ({ ...state.discoverReducer }));
	const dispatch = useDispatch();

	useEffect(() => {
		async function fetchDataDiscover() {
			const TODAY = moment().format("YYYY-MM-DD");
			const NEXT_WEEK = moment().add(7, "days").format("YYYY-MM-DD");
			const url = `${Config.API_ROOT}discover/tv?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&sort_by=popularity.desc&include_adult=false&include_video=false&api_key=${Config.API_KEY}`;
			await axios.get(url).then((response) => {
				dispatch({
					type: "ADD_DISCOVER_TV",
					payload: response.data.results,
				});
			});
		}
		fetchDataDiscover();
	}, [dispatch]);

	if (!discoverTv) {
		return null;
	}

	return (
		<div className="container">
			<h1 className="text-center title">TV Discover</h1>
			<div className="container-cards">
				{discoverTv.map((tv) => (
					<Card media_type="tv" item={tv} key={tv.id} />
				))}
			</div>
		</div>
	);
}
