import React from 'react';
import Movie from './Movie'


class MoviesList extends React.Component{

	render(){
		const {movies} = this.props;
		return(
			<ul>
				{movies.map((movie,index) =>
					<li key={movie.id.toString()}>
						<Movie movie={movie} />
					</li>
				)}
			</ul>
		);
	}
}

export default MoviesList;