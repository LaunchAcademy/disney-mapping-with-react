import React from "react"

import MovieList from "./MovieList";
import SongList from "./SongList";

const App = props => {
  // debugger
  let handleClick = (clickedMovieId) => {
    let specificSongs = props.data.songs.filter(song => {return song.movieId === clickedMovieId
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
