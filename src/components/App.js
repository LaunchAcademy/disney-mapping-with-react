import React from "react"

import SongList from "./SongList"
import MovieList from "./MovieList"

const App = (props) => {

  const handleClick = (clickedMovieId) => {
    // debugger
    let specificSongs = props.data.songs.filter((song) => {
      return(
        song.movieId === clickedMovieId
      )
    })

    let alertMessage = `The songs for this movie are:\n`
    specificSongs.forEach(song => {
      alertMessage += `${song.title}\n`
    })
    alert(alertMessage)
  }
  

  return(
    <div className="movie-container">
      <h1>Movies to Watch</h1>

      <MovieList movies={props.data.movies} handleClick={handleClick} />
      <SongList songs={props.data.songs} />
    </div>
  );
};

export default App
