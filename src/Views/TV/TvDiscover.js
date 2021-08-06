import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import axios from "axios";

import Config from "../../Config";

import Card from "../../Components/Card";
import Button from "../../Components/Button/Button";

export default function TvDiscover() {
	const { discoverTv } = useSelector((state) => ({ ...state.discoverReducer }));
	const dispatch = useDispatch();

	useEffect(() => {
		fetchDataDiscover(1);
	}, [dispatch]);

	async function fetchDataDiscover(page) {
		const TODAY = moment().format("YYYY-MM-DD");
		const NEXT_WEEK = moment().add(7, "days").format("YYYY-MM-DD");
		const url = `${Config.API_ROOT}discover/tv?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&sort_by=popularity.desc&include_adult=false&include_video=false&api_key=${Config.API_KEY}&page=${page}`;
		await axios.get(url).then((response) => {
			dispatch({
				type: "ADD_DISCOVER_TV",
				payload: response.data,
			});
		});
	}

	const handleFirstPage = () => {
		fetchDataDiscover(1);
		window.scrollTo(0, 0);
	};
	const handlePreview = () => {
		fetchDataDiscover(discoverTv.page - 1);
		window.scrollTo(0, 0);
	};
	const handleNext = () => {
		fetchDataDiscover(discoverTv.page + 1);
		window.scrollTo(0, 0);
	};
	const handleLastPage = () => {
		fetchDataDiscover(discoverTv.total_pages);
		window.scrollTo(0, 0);
	};

	if (!discoverTv) {
		return null;
	}

	return (
		<div className="container">
			<h1 className="text-center title">TV Discover</h1>
			<div className="container-cards">
				{discoverTv &&
					discoverTv.results &&
					discoverTv.results.map((tv) => <Card media_type="tv" item={tv} key={tv.id} />)}
			</div>
			<div className="container-btns">
				{discoverTv.page !== 1 && (
					<Button onClick={handleFirstPage}>
						<span className="material-icons">fast_rewind</span>
					</Button>
				)}
				{discoverTv.page !== 1 && (
					<Button onClick={handlePreview}>
						<span className="material-icons">chevron_left</span>
					</Button>
				)}
				<span className="mx-2">
					<strong>
						{discoverTv.page} / {discoverTv.total_pages}
					</strong>
				</span>
				{discoverTv.page !== discoverTv.total_pages && (
					<Button onClick={handleNext}>
						<span className="material-icons">navigate_next</span>
					</Button>
				)}
				{discoverTv.page !== discoverTv.total_pages && (
					<Button onClick={handleLastPage}>
						<span className="material-icons">fast_forward</span>
					</Button>
				)}
			</div>
		</div>
	);
}
