import React from 'react'
import MovieTile from './MovieTile'

const MovieList = props => {
  
  const listOfMovies = props.movies.map(movie => {
    const handleSpecificMovieClick = () =>{
      props.handleClick(movie.id)
    }
    
    return(    
      <MovieTile
        key={movie.id}
        title={movie.title}
        handleClick={handleSpecificMovieClick}
       />
    )
  })

  return(
    <ul>
      {listOfMovies}
    </ul>
  )
}

export default MovieList