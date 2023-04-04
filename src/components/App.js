import React from "react"

import MovieTile from "./MovieTile"

const App = (props) => {
  // debugger
  const handleSongMessage = (clickedMovieId) => {
    // debugger

    let specificSongs = props.movieData.songs.filter(
      (song) => song.movieId === clickedMovieId
    )

    // debugger

    let alertMessage = `The songs for this movie are:\n`

    specificSongs.forEach((song) => {
      // debugger
      alertMessage += `${song.title}\n`
    })
    alert(alertMessage)
  }

  const arrayOfMovies = props.movieData.movies.map((movieElement) => {
    // console.log(movieElement)
    return (
      <MovieTile
        key={movieElement.id}
        id={movieElement.id}
        title={movieElement.title}
        handleSongMessage={handleSongMessage}
      />
    )
  })
  console.log("movies array", arrayOfMovies)

  return (
    <div className="movie-container">
      <h1>Movies to Watch</h1>
      {arrayOfMovies}
    </div>
  )
}

export default App
