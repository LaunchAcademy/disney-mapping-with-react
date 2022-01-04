import React from "react"

import MovieTile from "./MovieTile"

const MovieList = (props) => {
  const movieTiles = props.movies.map((movie) => {
    // debugger
    const handleClickWrapper = () => {
      props.handleClick(movie.id)
    }

    return (
      <MovieTile
        key={movie.id}
        title={movie.title}
        id={movie.id}
        handleClickWrapper={handleClickWrapper}
      />
    )
  })
  return (
    <>
      <h2>Movie List</h2>
      <ul>{movieTiles}</ul>
    </>
  )
}

export default MovieList
