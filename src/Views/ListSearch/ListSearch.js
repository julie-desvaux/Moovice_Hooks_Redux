import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useDispatch } from 'react-redux'
import axios from "axios";
import Config from "../../Config";
import Card from "../../Components/Card";

export default function ListSearch() {
	const { search } = useParams();
	const [searchList, setSearchList] = useState(null);

	useEffect(() => {
		async function fetchDataSearch() {
			const url = `${Config.API_ROOT}search/multi?include_adult=false&api_key=${Config.API_KEY}&query=${search}`;
			await axios.get(url).then((response) => {
				setSearchList(response.data.results);
			});
		}
		fetchDataSearch();
	}, [search]);

	if (!searchList) {
		return null;
	}

	return (
		<div className="container">
			<h1 className="title">Result for : {search}</h1>
			<div className="container-cards">
				{searchList.map((searchItem, index) => (
					<Card media_type={searchItem.media_type} item={searchItem} key={searchItem.id} />
				))}
			</div>
		</div>
	);
}
