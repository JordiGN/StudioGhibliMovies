import React from 'react'

class Movie extends React.Component{

	render(){
		const {movie} = this.props
		return(
				<div>
					<h3>{movie.title}</h3>
					<div>
						<span>Descripcion</span>
						<p>	
							{movie.description}
						</p>
					</div>
					<div>
						<span>Directed by:</span>
						<label htmlFor="">
							{movie.director}
						</label>
					</div>
					<div>
						<span>Produced by:</span>
						<label htmlFor="">
							{movie.producer}
						</label>
					</div>

				</div>
		)
	}

}

export default Movie;