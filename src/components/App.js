import React from "react"
import MovieList from "./MovieList"
import SongList from "./SongList"

const App = (props) => {
  let handleClick = (clickedMovieId) => {
    let specificSongs = props.data.songs.filter(
      (song) => song.movieId === clickedMovieId
    )
    let alertMessage = `The songs for this movie are:\n`
    specificSongs.forEach((song) => {
      alertMessage += `${song.title}\n`
    })
    alert(alertMessage)
  }

  return (
    <div className="movie-container">
      <h1>Movies to Watch</h1>
      <MovieList movies={props.data.movies} handleClick={handleClick} />
      <h1>Song to listen to</h1>
      <SongList songs={props.data.songs} />
    </div>
  )
}

export default App
