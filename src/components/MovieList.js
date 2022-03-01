import React from "react"
import MovieTile from "./MovieTile"

const MovieList = (props) => {
  const movieList = props.movies.map((movie) => {
    return (
      <MovieTile
        id={movie.id}
        key={movie.id}
        title={movie.title}
        handleClick={props.handleClick}
      />
    )
  })

  return <ul>{movieList}</ul>
}

export default MovieList
