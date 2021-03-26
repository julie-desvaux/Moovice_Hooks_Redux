import * as Scroll from "react-scroll";
import Movie from "./Movie";
import TV from "./Tv";
import Person from "./Person";

export default function Card(item, media_type) {
	const clickScrollTop = (e) => {
		if (e.target.className !== "card-btn") {
			Scroll.scroller.scrollTo("container", {
				duration: 150,
				delay: 100,
				smooth: true,
				offset: -500,
			});
		}
	};

	switch (media_type) {
		case "person":
			return <Person {...item} {...media_type} clickScrollTop={clickScrollTop} />;
		case "tv":
			return <TV {...item} {...media_type} clickScrollTop={clickScrollTop} />;
		default:
			return <Movie {...item} {...media_type} clickScrollTop={clickScrollTop} />;
	}
}
