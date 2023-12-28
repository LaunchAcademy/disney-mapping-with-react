import React from "react"

import MovieTile from "./MovieTile"

const App = (props) => {
  // debugger

  const handleClick = (clickedMovieId) => {
    console.log(clickedMovieId);

    const specificSongs = props.dataFromApp.songs.filter((song) => {
      // debugger
      if (song.movieId === clickedMovieId) {
        return song
      }
    })

    // debugger
    console.log(specificSongs);

    let alertMessage = `The songs for this movie are:\n`
    specificSongs.forEach((song) => {
      alertMessage += `${song.title}\n`
    })
    alert(alertMessage)
  }

  const moviesDataArray = props.dataFromApp.movies

  // console.log(moviesDataArray)

  const movieComponentList = moviesDataArray.map((movie) => {
    return (
      <MovieTile 
        key={movie.id} 
        title={movie.title} 
        id={movie.id} 
        handleClick={handleClick}
        // movie={movie}
      />
    )
  })

  // console.log(movieComponentList)

  return (
    <div className="movie-container">
      <h1>Movies to Watch</h1>
      <ul>{movieComponentList}</ul>
    </div>
  )
}

export default App
