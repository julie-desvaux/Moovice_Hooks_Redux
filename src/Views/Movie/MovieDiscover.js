import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Config from "../../Config";
import Card from "../../Components/Card";
import Button from "../../Components/Button/Button";

import moment from "moment";
import axios from "axios";

export default function Discover() {
	const { discover } = useSelector((state) => ({ ...state.discoverReducer }));
	const dispatch = useDispatch();

	useEffect(() => {
		fetchDataDiscover(1);
	}, [dispatch]);

	async function fetchDataDiscover(page) {
		const TODAY = moment().format("YYYY-MM-DD");
		const NEXT_WEEK = moment().add(7, "days").format("YYYY-MM-DD");
		const url = `${Config.API_ROOT}discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&sort_by=popularity.desc&include_adult=false&include_video=false&api_key=${Config.API_KEY}&page=${page}`;
		await axios.get(url).then((response) => {
			dispatch({
				type: "ADD_DISCOVER",
				payload: response.data,
			});
		});
	}

	const handlePreview = () => {
		fetchDataDiscover(discover.page - 1);
		window.scrollTo(0, 0);
	};

	const handleNext = () => {
		fetchDataDiscover(discover.page + 1);
		window.scrollTo(0, 0);
	};

	if (discover.length === 0) {
		return null;
	}

	console.log(discover);

	return (
		<div className="container">
			<h1 className="text-center title">Discover</h1>
			<div className="container-cards">
				{discover && discover.results.map((movie) => <Card media_type="movie" item={movie} key={movie.id} />)}
			</div>
			<div className="container-btns">
				{discover.page !== 1 && <Button onClick={handlePreview}>Preview</Button>}
				<span className="mx-2">
					<strong>
						{discover.page} / {discover.total_pages}
					</strong>
				</span>
				{discover.page !== discover.total_pages && <Button onClick={handleNext}>Next</Button>}
			</div>
		</div>
	);
}
