import React from 'react'
import MovieTile from './MovieTile'

const MovieList = props => {
  // iterate over the movies
  // create a new array of MovieTile components
  // put that new array in the <ul> below
  const movieTileComponents = props.movies.map(movie => {
    return (
      <MovieTile
        key={movie.id}
        id={movie.id}
        title={movie.title}
        clickFunction={props.buttonClickFunction}
      />
    )
  })

  return (
    <ul>
      {movieTileComponents}
    </ul>
  )
}

export default MovieList