import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Config from "../../Config";

import Card from "../../Components/Card";
import Button from "../../Components/Button/Button";

export default function TvOnAir() {
	const { onAirTv } = useSelector((state) => ({ ...state.tvReducer }));
	const dispatch = useDispatch();

	useEffect(() => {
		fetchDataTV(1);
	}, [dispatch]);

	async function fetchDataTV(page) {
		const url = `${Config.API_ROOT}tv/on_the_air?api_key=${Config.API_KEY}&page=${page}`;
		await axios.get(url).then((response) => {
			dispatch({
				type: "ADD_ON_AIR_TV",
				payload: response.data,
			});
		});
	}

	const handleFirstPage = () => {
		fetchDataTV(1);
		window.scrollTo(0, 0);
	};
	const handlePreview = () => {
		fetchDataTV(onAirTv.page - 1);
		window.scrollTo(0, 0);
	};
	const handleNext = () => {
		fetchDataTV(onAirTv.page + 1);
		window.scrollTo(0, 0);
	};
	const handleLastPage = () => {
		fetchDataTV(onAirTv.total_pages);
		window.scrollTo(0, 0);
	};

	if (!onAirTv) {
		return null;
	}

	return (
		<div className="container">
			<h1 className="text-center title">On Air</h1>
			<div className="container-cards">
				{onAirTv &&
					onAirTv.results &&
					onAirTv.results.map((tv) => {
						return <Card media_type="tv" item={tv} key={tv.id} />;
					})}
			</div>
			<div className="container-btns">
				{onAirTv.page !== 1 && (
					<Button onClick={handleFirstPage}>
						<span className="material-icons">fast_rewind</span>
					</Button>
				)}
				{onAirTv.page !== 1 && (
					<Button onClick={handlePreview}>
						<span className="material-icons">chevron_left</span>
					</Button>
				)}
				<span className="mx-2">
					<strong>
						{onAirTv.page} / {onAirTv.total_pages}
					</strong>
				</span>
				{onAirTv.page !== onAirTv.total_pages && (
					<Button onClick={handleNext}>
						<span className="material-icons">navigate_next</span>
					</Button>
				)}
				{onAirTv.page !== onAirTv.total_pages && (
					<Button onClick={handleLastPage}>
						<span className="material-icons">fast_forward</span>
					</Button>
				)}
			</div>
		</div>
	);
}
