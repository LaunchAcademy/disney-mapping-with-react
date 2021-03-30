import React from "react"
import MovieTile from "./MovieTile"

const MovieList = (props) => {

  const movieComponents = props.movies.map((movie) => {
    // debugger
    const handleClickWrapper = () => {
      props.handleClick(movie.id)
    }

    return (
      <MovieTile 
        key={movie.id}
        id={movie.id}
        title={movie.title}
        handleClickWrapper={handleClickWrapper}
      />
    )
  })

  return (
    <ul>
      {movieComponents}
    </ul>
  )
}

export default MovieList