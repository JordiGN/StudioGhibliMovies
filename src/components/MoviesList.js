import React from 'react';


class MoviesList extends React.Component{

	render(){
		const {movies} = this.props;
		return(
			<ul>
				{movies.map((movie,index) =>
					<li key={movie.id.toString()}>
						{movie.title}
					</li>
				)}
			</ul>
		);
	}
}

export default MoviesList;