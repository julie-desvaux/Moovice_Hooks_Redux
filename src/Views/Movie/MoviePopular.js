import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import Config from "../../Config";

import Card from "../../Components/Card";
import Button from "../../Components/Button/Button";

export default function Popular() {
	const { popular } = useSelector((state) => ({ ...state.popularReducer }));
	const dispatch = useDispatch();

	useEffect(() => {
		fetchDataPopular(1);
	}, [dispatch]);

	async function fetchDataPopular(page) {
		const url = `${Config.API_ROOT}movie/popular?api_key=${Config.API_KEY}&include_adult=false&page=${page}`;
		await axios.get(url).then((response) => {
			dispatch({
				type: "ADD_POPULAR",
				payload: response.data,
			});
		});
	}

	const handleFirstPage = () => {
		fetchDataPopular(1);
		window.scrollTo(0, 0);
	};
	const handlePreview = () => {
		fetchDataPopular(popular.page - 1);
		window.scrollTo(0, 0);
	};
	const handleNext = () => {
		fetchDataPopular(popular.page + 1);
		window.scrollTo(0, 0);
	};
	const handleLastPage = () => {
		fetchDataPopular(popular.total_pages);
		window.scrollTo(0, 0);
	};

	if (!popular) {
		return null;
	}

	return (
		<div className="container">
			<h1 className="text-center title">Popular</h1>
			<div className="container-cards">
				{popular &&
					popular.results.map((movie) => {
						return <Card media_type="movie" item={movie} key={movie.id} />;
					})}
			</div>
			<div className="container-btns">
				{popular.page !== 1 && (
					<Button onClick={handleFirstPage}>
						<span class="material-icons">fast_rewind</span>
					</Button>
				)}
				{popular.page !== 1 && (
					<Button onClick={handlePreview}>
						<span class="material-icons">chevron_left</span>
					</Button>
				)}
				<span className="mx-2">
					<strong>
						{popular.page} / {popular.total_pages}
					</strong>
				</span>
				{popular.page !== popular.total_pages && (
					<Button onClick={handleNext}>
						<span className="material-icons">navigate_next</span>
					</Button>
				)}
				{popular.page !== popular.total_pages && (
					<Button onClick={handleLastPage}>
						<span class="material-icons">fast_forward</span>
					</Button>
				)}
			</div>
		</div>
	);
}
