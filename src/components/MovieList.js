import React from "react"

import MovieTile from './MovieTile'

const MovieList = (props) => {
  const movieTiles = props.movies.map((movie) => {
    
    const movieClick = () => {
      // debugger
      props.handleClick(movie.id)
    }

    // handleClick={props.handleClick}
    return (
      <MovieTile 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        movieClick={movieClick}
      />
    )
  })
  // debugger
  
  return (
    <div>
      {movieTiles}
    </div>
  )
}

export default MovieList