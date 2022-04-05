import React from "react"

import MovieTile from "./MovieTile"

const MovieList = (props) => {
  // debugger

  const moviesArray = props.movies.map((movie) => {
    // debugger

    return (
      <MovieTile 
        key={movie.id}
        title={movie.title}
        id={movie.id}
        handleClick={props.handleClick}
      />
    )
  })

  return (
    <>
      <h2>Movie List</h2>
      <ul>
        {moviesArray}
      </ul>
    </>
  )
}

export default MovieList