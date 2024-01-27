import React from "react";
import Row from "../Row/Row"
import requests from "../../../utils/requests";



const RowList = () => {
	return (
		<>
			<Row
				title="Netflix Orginals"
				ferchUrl={requests.NetflixOrginal}
				isLargeRow
			/>
			<Row title="Trending Now" ferchUrl={requests.Trending} />
			<Row title="TV Shows" ferchUrl={requests.TVShow} />
			<Row title="Top Rated" ferchUrl={requests.TopRatedMovies} />
			<Row title="Action Movie" ferchUrl={requests.ActionMovies} />
			<Row title="Comedy Movie" ferchUrl={requests.ComedyMovies} />
			<Row title="Horror Movie" ferchUrl={requests.HorrorMovies} />
			<Row title="Romance Movie" ferchUrl={requests.RomanceMovies} />
			<Row title="Documentaries" ferchUrl={requests.Documentaries} />
			<Row title="Upcoming" ferchUrl={requests.Upcoming} />
		</>
	);
};

export default RowList;
