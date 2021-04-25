import * as Scroll from "react-scroll";
import Movie from "./Movie";
import TV from "./Tv";
import Person from "./Person";

export default function Card(item) {
	const clickScrollTop = (e) => {
		if (e.target.className !== "link") {
			Scroll.scroller.scrollTo("container", {
				duration: 150,
				delay: 100,
				smooth: true,
				offset: -500,
			});
		}
	};

	switch (item.media_type) {
		case "person":
			return <Person {...item} clickScrollTop={clickScrollTop} />;
		case "tv":
			return <TV {...item} clickScrollTop={clickScrollTop} />;
		default:
			return <Movie {...item} clickScrollTop={clickScrollTop} />;
	}
}
